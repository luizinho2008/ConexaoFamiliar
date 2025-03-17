const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Porta correta do cliente React
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // Insira sua senha do MySQL aqui
    database: "projeto2024"
});

// Conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        return;
    }
    console.log("Conectado ao banco de dados");
});

// Função para validar o tipo de chat e retornar a tabela correta
const getTableName = (tipo) => {
    const chatTables = {
        fisicas: "msgfisicas",
        intelectuais: "msgintelectuais",
        emocionais: "msgemocionais",
        sensoriais: "msgsensoriais", // Adicionei msgsensoriais se for o tipo correto
        neurodivergentes: "msgneurodivergentes"
    };
    return chatTables[tipo] || null;
};

// Função para buscar usuário por CPF
const getUserByCpf = (cpf, callback) => {
    db.query("SELECT id, nome FROM users WHERE cpf = ?", [cpf], (err, results) => {
        if (err) return callback(err, null);
        return callback(null, results.length > 0 ? results[0] : null);
    });
};

// Função para carregar mensagens anteriores de uma sala específica
const loadPreviousMessages = (socket, tipo) => {
    const tableName = getTableName(tipo);
    if (!tableName) {
        console.error("Tipo de chat inválido:", tipo);
        return;
    }

    // Aqui, estamos fazendo um JOIN entre as tabelas de mensagens e a tabela de usuários
    db.query(
        `SELECT users.nome, ${tableName}.message FROM ${tableName} 
         INNER JOIN users ON ${tableName}.user_id = users.id 
         ORDER BY ${tableName}.id ASC`,
        (err, results) => {
            if (err) {
                console.error("Erro ao carregar mensagens:", err);
            } else {
                console.log("Mensagens carregadas:", results); // Log para depuração
                socket.emit("previousMessages", results); // Envia para o cliente
            }
        }
    );
};

// Função para inserir uma nova mensagem no banco na tabela correta
const insertNewMessage = (socket, tipo, message, userId, userName) => {
    const tableName = getTableName(tipo);
    if (!tableName) {
        console.error("Tipo de chat inválido:", tipo);
        return;
    }

    db.query(
        `INSERT INTO ${tableName} (user_id, message) VALUES (?, ?)`,
        [userId, message],
        (err) => {
            if (err) {
                console.error("Erro ao inserir mensagem:", err);
            } else {
                io.to(tipo).emit("newMessage", { name: userName, message }); // Envia para o cliente
            }
        }
    );
};

// Gerenciando conexões de usuários
io.on("connection", (socket) => {
    console.log("Usuário conectado");

    socket.on("joinChat", ({ tipo, cpf }) => {
        const tableName = getTableName(tipo);
        if (!tableName) {
            console.error("Tipo de chat inválido:", tipo);
            socket.emit("error", "Tipo de chat inválido");
            return;
        }

        getUserByCpf(cpf, (err, user) => {
            if (err) {
                console.error("Erro ao buscar CPF:", err);
                socket.emit("cpfInvalid");
            } else if (user) {
                socket.userId = user.id;
                socket.userName = user.nome;
                socket.room = tipo;
                socket.join(tipo);
                socket.emit("cpfValid", { name: user.nome });
                loadPreviousMessages(socket, tipo);
            } else {
                socket.emit("cpfInvalid");
            }
        });
    });

    socket.on("sendMessage", (data) => {
        if (socket.userId && socket.room) {
            insertNewMessage(socket, socket.room, data.message, socket.userId, socket.userName);
        }
    });

    socket.on("disconnect", () => {
        console.log("Usuário desconectado");
    });
});

server.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});