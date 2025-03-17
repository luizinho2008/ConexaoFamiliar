import React, { useState, useEffect } from 'react';
import styles from './Cegueira.module.css';

const Cegueira = () => {
    const [text, setText] = useState('');
      const targetText = "Clique aqui para entrar no fórum!";
    
      useEffect(() => {
        let index = 0;
        const typeText = () => {
          if (index < targetText.length) {
            setText(targetText.substring(0, index + 1)); // Atualiza apenas a parte do texto até o índice atual
            index++;
            setTimeout(typeText, 100); // Ajuste para controlar a velocidade
          }
        };
    
        typeText();
      }, []);

    return (
        <div className={styles.principal}>
            <header className={styles.header}>
                <h1>CEGUEIRA</h1>
            </header>

            <main>
                <section className={styles.infoSection}>
                    <article className={styles.box}>
                        <h2>Cegueira</h2>
                        <p>
                            A cegueira altera profundamente a vida, exigindo adaptação física, emocional e prática. A reabilitação e o uso de tecnologias assistivas são essenciais para recuperar a independência.
                            O apoio emocional de amigos, familiares e profissionais é crucial para enfrentar as mudanças. Apesar dos desafios, muitas pessoas encontram novas paixões e propósito, demonstrando grande resiliência e capacidade de adaptação.
                            Cada jornada é única, marcada por desafios e superações pessoais, inspirando pela força e determinação.
                        </p>
                    </article>

                    <article className={styles.box}>
                        <h2>O que é?</h2>
                        <p>
                            A cegueira é a ausência de percepção visual devido a problemas oculares ou neurológicos, sendo legalmente definida quando a visão do melhor olho é inferior a 1/10 ou o campo visual é menor que 10º.
                            O número de pessoas cegas está aumentando, especialmente entre os mais velhos e em países pobres. Em 2020, havia cerca de 75 milhões de pessoas cegas globalmente. A cegueira infantil afeta aproximadamente 1,4 milhões de crianças, principalmente em regiões carentes.
                            A cegueira pode ser congênita, precoce ou adquirida. A cegueira congênita não permite referências visuais, enquanto a adquirida preserva a capacidade de representação visual com base em experiências anteriores.
                            A cegueira parcial inclui pessoas que podem ver apenas vultos ou contar dedos de perto, enquanto a cegueira total implica perda completa da visão.
                        </p>
                    </article>
                </section>

                <div className={styles.container}>
                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 1<br/>
                                Cegueira
                            </h3>
                        </div>
                        <a href="https://www.cuf.pt/saude-a-z/cegueira">
                            <div className={`${styles.face} ${styles.back1} ${styles.back}`}></div>
                        </a>
                    </div>

                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 2<br/>
                                Cegueira<br/>
                                Causas, sintomas e prevenção
                            </h3>
                        </div>
                        <a href="https://www.unimed.coop.br/viver-bem/saude-em-pauta/cegueira">
                            <div className={`${styles.face} ${styles.back2} ${styles.back}`}></div>
                        </a>
                    </div>
                    
                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 3<br/>
                                Quais doenças podem levar a cegueira?
                            </h3>
                        </div>
                        <a href="https://www.cedoj.com.br/quais-doencas-podem-levar-a-cegueira">
                            <div className={`${styles.face} ${styles.back3} ${styles.back}`}></div>
                        </a>
                    </div>
                </div>
            </main>

            <div className={styles.botaoChat}>
                <div className={styles.typewriter}>
                    <a href="/chat/sensoriais"><h1 id="text">{text}</h1></a>
                </div>
            </div>
            <div className={styles.sairContainer}>
        <button className={styles.sairBotao} onClick={() => location.href = '/sensorial'}>
          Sair
        </button>
      </div>
        </div>
    );
}

export default Cegueira;