import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { motion } from "framer-motion";
import styles from "./Chat.module.css";

const socket = io("http://localhost:5000", { autoConnect: false });

const Chat = () => {
    const { tipo } = useParams();
    const navigate = useNavigate();
    const messagesEndRef = useRef(null);

    const [cpf, setCpf] = useState("");
    const [isCpfValid, setIsCpfValid] = useState(true);
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userName, setUserName] = useState("");
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const validTypes = ["fisicas", "intelectuais", "neurodivergentes", "sensoriais"];
        if (!validTypes.includes(tipo)) {
            navigate("/");
            return;
        }

        socket.connect();

        socket.on("cpfValid", (data) => {
            setUserName(data.name);
            setShowChat(true);
        });

        socket.on("cpfInvalid", () => {
            setIsCpfValid(false);
        });

        socket.on("previousMessages", (msgs) => {
            setMessages(msgs);
        });

        socket.on("newMessage", (msg) => {
            setMessages((prevMessages) => {
                if (!prevMessages.some((message) => message.message === msg.message && message.name === msg.name)) {
                    return [...prevMessages, msg];
                }
                return prevMessages;
            });
        });

        return () => {
            socket.disconnect();
        };
    }, [tipo]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleCpfSubmit = (e) => {
        e.preventDefault();
        if (!cpf.match(/^\d{11}$/)) {
            setIsCpfValid(false);
            return;
        }
        socket.emit("joinChat", { tipo, cpf });
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() === "") return;

        if (socket.connected) {
            socket.emit("sendMessage", { message: newMessage, tipo });
            setNewMessage("");
        } else {
            console.error("Socket não está conectado.");
        }
    };

    const handleBack = () => {
        setCpf("");
        navigate("/");
    };

    const handleReload = () => {
        window.location.reload();
    };

    const getRandomColor = (name) => {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const color = `#${((hash >> 8) & 0x00FFFFFF).toString(16).padStart(6, "0")}`;
        return color;
    };

    return (
        <div className={styles.chatContainer}>
            {!showChat ? (
                <form className={styles.cpfForm} onSubmit={handleCpfSubmit}>
                    <h1>Para entrar no Fórum sobre deficiências {tipo}</h1>
                    <input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="Digite seu CPF"
                        autoComplete="off"
                    />
                    <button type="submit">Entrar</button>
                    {!isCpfValid && <h2 className={styles.errorMessage}>CPF inválido ou não encontrado.</h2>}
                    <br /> <br />
                    <button type="button" className={styles.backButton} onClick={handleBack}>Voltar</button>
                </form>
            ) : (
                <div className={styles.chatBox}>
                    <h2>Bem-vindo, {userName}!</h2> <br />
                    <div className={styles.messages}>
                        {messages.length === 0 ? (
                            <p className={styles.noMessages}>Nenhuma mensagem ainda. Envie a primeira!</p>
                        ) : (
                            messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`${styles.message} ${msg.name === userName || msg.nome === userName ? styles.myMessage : styles.otherMessage}`}
                                    style={msg.name !== userName && msg.nome !== userName ? { backgroundColor: getRandomColor(msg.name || msg.nome) } : {}}
                                >
                                    <strong>{msg.nome || msg.name}</strong> <br /> <br /> {msg.message}
                                </motion.div>
                            ))
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form className={styles.messageForm} onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Digite sua mensagem..."
                        />
                        <button type="submit">Enviar</button>
                        <button type="button" onClick={handleReload}>Voltar</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chat;