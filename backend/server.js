const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2');
const path = require('path');

// Configuração do MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ifsp',
  database: 'projeto2024'
});

// Conectar ao banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados estabelecida com sucesso.');
  }
});

// Configuração do servidor Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = 5000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "..", "frontend", 'public')));
app.use(express.static(path.join(__dirname, "..", "frontend", 'public', 'cadastro')));
app.use(express.static(path.join(__dirname, "..", "frontend", 'public', 'fisica')));
app.use(express.static(path.join(__dirname, "..", "frontend", 'public', 'intelectual')));
app.use(express.static(path.join(__dirname, "..", "frontend", 'public', 'neurodivergente')));
app.use(express.static(path.join(__dirname, "..", "frontend", 'public', 'sensorial')));
app.use(express.static(path.join(__dirname, "..", "frontend", 'chats')));

// Rota para servir os arquivos HTML dos chats
app.get('/chatFisicas', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "chats", "chatFisicas.html"));
});

app.get('/chatIntelectuais', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "chats", "chatIntelectuais.html"));
});

app.get('/chatSensoriais', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "chats", "chatSensoriais.html"));
});

app.get('/chatNeuroDivergentes', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "chats", "chatNeuroDivergentes.html"));
});

// Função para carregar mensagens anteriores de uma tabela específica
const loadPreviousMessages = (socket, tableName) => {
  const selectMessagesQuery = `SELECT msg.id, msg.message, u.nome AS name FROM ${tableName} msg JOIN users u ON msg.user_id = u.id ORDER BY msg.id ASC`;
  db.query(selectMessagesQuery, (err, results) => {
    if (err) {
      console.error(`Erro ao buscar mensagens anteriores da tabela ${tableName}:`, err);
    } else {
      socket.emit('previousMessages', results);
    }
  });
};

// Função para inserir nova mensagem em uma tabela específica
const insertNewMessage = (socket, tableName, data, userId, userName) => {
  const { message } = data;
  const insertMessageQuery = `INSERT INTO ${tableName} (message, user_id) VALUES (?, ?)`;
  db.query(insertMessageQuery, [message, userId], (err, result) => {
    if (err) {
      console.error(`Erro ao adicionar mensagem na tabela ${tableName}:`, err);
    } else {
      const newMessage = { id: result.insertId, message, name: userName };
      io.to(socket.room).emit('newMessage', newMessage); // Envia a mensagem para todos os clientes na sala atual
    }
  });
};

// Função para verificar CPF e obter informações do usuário
const getUserByCpf = (cpf, callback) => {
  const query = 'SELECT * FROM users WHERE cpf = ?';
  db.query(query, [cpf], (err, results) => {
    if (err) {
      callback(err, null);
    } else if (results.length === 0) {
      callback(null, null);
    } else {
      callback(null, results[0]);
    }
  });
};

// Conexão do Socket.IO
io.on('connection', (socket) => {
  console.log('Usuário conectado');

  // Verificar CPF ao entrar no chat
  socket.on('joinChatFisicas', (cpf) => {
    getUserByCpf(cpf, (err, user) => {
      if (err) {
        console.error('Erro ao buscar CPF:', err);
        socket.emit('cpfInvalid');
      } else if (user) {
        socket.userId = user.id;
        socket.userName = user.nome;
        socket.room = 'msgfisicas'; // Adiciona a sala atual
        socket.join('msgfisicas'); // Entra na sala
        socket.emit('cpfValid', { name: user.nome });
        loadPreviousMessages(socket, 'msgfisicas');
      } else {
        socket.emit('cpfInvalid');
      }
    });
  });

  socket.on('joinChatIntelectuais', (cpf) => {
    getUserByCpf(cpf, (err, user) => {
      if (err) {
        console.error('Erro ao buscar CPF:', err);
        socket.emit('cpfInvalid');
      } else if (user) {
        socket.userId = user.id;
        socket.userName = user.nome;
        socket.room = 'msgintelectuais'; // Adiciona a sala atual
        socket.join('msgintelectuais'); // Entra na sala
        socket.emit('cpfValid', { name: user.nome });
        loadPreviousMessages(socket, 'msgintelectuais');
      } else {
        socket.emit('cpfInvalid');
      }
    });
  });

  socket.on('joinChatSensoriais', (cpf) => {
    getUserByCpf(cpf, (err, user) => {
      if (err) {
        console.error('Erro ao buscar CPF:', err);
        socket.emit('cpfInvalid');
      } else if (user) {
        socket.userId = user.id;
        socket.userName = user.nome;
        socket.room = 'msgsensoriais'; // Adiciona a sala atual
        socket.join('msgsensoriais'); // Entra na sala
        socket.emit('cpfValid', { name: user.nome });
        loadPreviousMessages(socket, 'msgsensoriais');
      } else {
        socket.emit('cpfInvalid');
      }
    });
  });

  socket.on('joinChatNeuroDivergentes', (cpf) => {
    getUserByCpf(cpf, (err, user) => {
      if (err) {
        console.error('Erro ao buscar CPF:', err);
        socket.emit('cpfInvalid');
      } else if (user) {
        socket.userId = user.id;
        socket.userName = user.nome;
        socket.room = 'msgneurodivergentes'; // Adiciona a sala atual
        socket.join('msgneurodivergentes'); // Entra na sala
        socket.emit('cpfValid', { name: user.nome });
        loadPreviousMessages(socket, 'msgneurodivergentes');
      } else {
        socket.emit('cpfInvalid');
      }
    });
  });

  // Receber nova mensagem e enviar para a sala correta
  socket.on('sendMessage', (data) => {
    if (socket.userId && socket.room) {
      insertNewMessage(socket, socket.room, data, socket.userId, socket.userName);
    }
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "index.html"));
});


app.get("/cad", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "cadastro" ,"index.html"));
});

app.get('/cadPost', (req, res) => {
  const nome = req.query.nome;
  const cpf = req.query.cpf;
  const idade = req.query.idade;

  const sql = `INSERT INTO users(nome, cpf, idade) VALUES(?, ?, ?)`;

  db.query(sql, [nome, cpf, idade], (erro) => {
    if(erro) {
      res.send("<h2>Falha ao realizar cadastro</h2>" + erro);
    } else {
      res.redirect("/");
    }
  });
});

// Outras rotas...

app.get('/fisica', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "fisica", "index.html"));
});

app.get('/fisica/amputacao', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "fisica", "amp.html"));
});

app.get('/fisica/nanismo', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "fisica", "nanismo.html"));
});

app.get('/fisica/plegia', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "fisica", "plegia.html"));
});

app.get('/fisica/poliomelite', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "fisica", "poli.html"));
});



app.get('/intelectual', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "intelectual", "index.html"));
});

app.get('/intelectual/angelman', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "intelectual", "angel.html"));
});

app.get('/intelectual/cri', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "intelectual", "cri.html"));
});

app.get('/intelectual/down', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "intelectual", "down.html"));
});

app.get('/intelectual/william', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "intelectual", "will.html"));
});




app.get('/neurodivergente', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "neurodivergente", "index.html"));
});

app.get('/neurodivergente/autismo', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "neurodivergente", "autismo.html"));
});

app.get('/neurodivergente/tdah', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "neurodivergente", "tdah.html"));
});

app.get('/neurodivergente/dislexia', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "neurodivergente", "dislexia.html"));
});

app.get('/sensorial', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "sensorial", "index.html"));
});

app.get('/sensorial/cegueira', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "sensorial", "cegueira.html"));
});

app.get('/sensorial/surdez', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "public", "sensorial", "surdez.html"));
});



// Iniciar o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});