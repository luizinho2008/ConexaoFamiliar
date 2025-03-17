import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import cegueiraImg from '../imagens/cegueira.png';
import surdezImg from '../imagens/surdez.png';
import downImg from '../imagens/down.png';
import criDuChatImg from '../imagens/cri.png';
import angelmanImg from '../imagens/angelman.png';
import williamsImg from '../imagens/williams.png';
import tdahImg from '../imagens/tdah.png';
import autismoImg from '../imagens/autismo.png';
import dislexiaImg from '../imagens/dislexia.png';
import amputacaoImg from '../imagens/amp.png';
import nanismoImg from '../imagens/nanismo.png';
import plegiaImg from '../imagens/plegia.png';
import poliomeliteImg from '../imagens/poli.png';

const deficienciasData = {
    sensorial: {
        titulo: "CEGUEIRA E SURDEZ",
        cor: "#ff6600",
        rota: "sensorial",
        opcoes: [
            { nome: "CEGUEIRA", imagem: cegueiraImg },
            { nome: "SURDEZ", imagem: surdezImg }
        ]
    },
    intelectual: {
        titulo: "DEFICIÊNCIAS INTELECTUAIS",
        cor: "#8000ff",
        rota: "intelectual", // Alterado para "intelectual"
        opcoes: [
            { nome: "DOWN", imagem: downImg },
            { nome: "CRI", imagem: criDuChatImg },
            { nome: "ANGELMAN", imagem: angelmanImg },
            { nome: "WILLIAMS", imagem: williamsImg }
        ]
    },
    neurodivergente: {
        titulo: "DEFICIÊNCIAS NEURODIVERGENTES",
        cor: "#ff0099",
        rota: "neurodivergente", // Alterado para "neurodivergente"
        opcoes: [
            { nome: "TDAH", imagem: tdahImg },
            { nome: "AUTISMO", imagem: autismoImg },
            { nome: "DISLEXIA", imagem: dislexiaImg }
        ]
    },
    fisica: {
        titulo: "DEFICIÊNCIAS FÍSICAS",
        cor: "#0099ff",
        rota: "fisica", // Alterado para "fisica"
        opcoes: [
            { nome: "AMPUTAÇÃO", imagem: amputacaoImg },
            { nome: "NANISMO", imagem: nanismoImg },
            { nome: "PLEGIA", imagem: plegiaImg },
            { nome: "POLIOMELITE", imagem: poliomeliteImg }
        ]
    }
};

const DeficienciaPage = () => {
    const { tipo } = useParams();
    const data = deficienciasData[tipo];
    const navigate = useNavigate();
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div style={{ 
            backgroundColor: data.cor + "20", 
            padding: "0px", 
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "100vw",
            overflowX: "hidden" 
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "15px 20px",
                backgroundColor: data.cor,
                color: "#fff",
                position: "relative"
            }}>
                <h1 style={{
                    margin: "0 auto",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    flex: "1"
                }}>
                    {data.titulo}
                </h1>
                <button 
                    onClick={() => navigate("/")} 
                    style={{
                        backgroundColor: "#fff",
                        color: data.cor,
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        transition: "0.3s",
                        position: "absolute",
                        right: "20px",
                        marginRight: "10px"
                    }}
                >
                    Voltar
                </button>
            </div>

            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: "30px", 
                padding: "40px",
                flexWrap: "wrap",
                width: "100%",
                maxWidth: "1200px" 
            }}>
                {data.opcoes.map((item, index) => {
                    // Formatando o nome para uma URL amigável
                    
                    const formattedName = item.nome
                    .normalize("NFD") // Separa acentos dos caracteres
                    .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
                    .toLowerCase()
                    .replace(/\s+/g, '-') // Substitui espaços por hífen
                    .replace(/[^\w-]/g, ''); // Remove caracteres não alfanuméricos


                    return (
                        <div 
                            key={index} 
                            style={{ 
                                padding: "20px", 
                                backgroundColor: "#fff", 
                                borderRadius: "20px", 
                                textAlign: "center",
                                width: "100%",
                                maxWidth: "300px",
                                transition: "0.3s",
                                cursor: "pointer",
                                transform: hoverIndex === index ? 'scale(1.1)' : 'scale(1)',
                                boxShadow: hoverIndex === index 
                                    ? '5px 5px 25px rgba(0, 0, 0, 0.3)' 
                                    : '5px 5px 15px rgba(0, 0, 0, 0.2)'
                            }}
                            onMouseEnter={() => setHoverIndex(index)} 
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <img src={item.imagem} alt={item.nome} style={{ width: "100px", height: "100px", borderRadius: "10px" }} />
                            <h2 style={{ color: data.cor, fontSize: "20px", marginTop: "10px" }}>{item.nome}</h2>
                            <button 
                                onClick={() => navigate(`/${data.rota}/${formattedName}`)}
                                style={{
                                    backgroundColor: hoverIndex === index ? '#fff' : data.cor,
                                    color: hoverIndex === index ? data.cor : "#fff",
                                    border: "none",
                                    padding: "8px 15px",
                                    borderRadius: "10px",
                                    marginTop: "10px",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    transition: "0.3s"
                                }}
                            >
                                Clique e saiba mais
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DeficienciaPage;