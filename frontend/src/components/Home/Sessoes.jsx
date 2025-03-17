import React from 'react';
import styles from "./Sessoes.module.css";

import Fisica from "../imagens/fisica.png";
import Sensorial from "../imagens/sensorial.png";
import Intelectual from "../imagens/intelectual.png";
import NeuroDivergente from "../imagens/neurodivergente.png";

const deficiencias = [
    { nome: "FÍSICAS", imagem: Fisica, link: "/fisica", classe: styles.fisicas },
    { nome: "SENSORIAIS", imagem: Sensorial, link: "/sensorial", classe: styles.sensoriais },
    { nome: "INTELECTUAIS", imagem: Intelectual, link: "/intelectual", classe: styles.intelectuais },
    { nome: "NEURODIVERGENTES", imagem: NeuroDivergente, link: "/neurodivergente", classe: styles.neurodivergentes }
];

const Sessoes = () => {
    return (
        <div style={{ backgroundColor: "#e8faff" }} className={styles.container} id="Secoes">
            <h1 style={{ textAlign: "center" }}>DEFICIÊNCIAS</h1>
            <div className={styles.grid}>
                {deficiencias.map((def, index) => (
                    <div key={index} className={`${styles.card} ${def.classe}`}>
                        <h2>{def.nome}</h2>
                        <a href={def.link}>
                            <img src={def.imagem} alt={def.nome} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sessoes;