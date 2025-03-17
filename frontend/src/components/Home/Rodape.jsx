import React from 'react';
import styles from "./Rodape.module.css";

import Instagram from '../imagens/instagram.png';

const Rodape = () => {
    return (
        <div style={{backgroundColor: "#fff7d7"}}>
            <div className={`${styles["contato-container"]} ${styles.contato}`}>
                <h1 className={styles.margem}>CONTATO</h1>
                <p style={{color: "black"}}>Tem alguma dúvida? Entre em contato conosco.</p>
    
                <div className={styles["contato-box"]}>
                    <div className={styles["email-section"]}>
                        <h2>E-mail:</h2>
                        <a href="mailto:conexaofamiliar.cf@gmail.com">conexaofamiliar.cf@gmail.com</a>
                    </div>
    
                    <div className={styles["instagram-section"]}>
                        <h2>Instagram</h2>
                        <div className={styles["instagram-icon"]}>
                            <a href="https://www.instagram.com/conexaofamiliar.cf/" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} alt="Instagram Icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className={styles["footer-container"]}>
                    <div className={styles["footer-links"]}>
                        <p>desenvolvido por</p>
                        <a href="https://www.instagram.com/anapaulahsx/" target="_blank" rel="noopener noreferrer">Ana Paula do Prado Oliveira</a>
                        <a href="https://www.instagram.com/babi.icc/" target="_blank" rel="noopener noreferrer">Bárbara de Camargo Inácio</a>
                        <a href="https://www.instagram.com/luizmoreira2008/" target="_blank" rel="noopener noreferrer">Luiz Henrique Moreira de Paula</a>
                    </div>
                    <p>&copy; 2024 Conexão Familiar. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

export default Rodape;