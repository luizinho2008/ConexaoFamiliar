import React, { useState, useEffect } from 'react';
import styles from './Poliomelite.module.css';

const Poliomelite = () => {
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
                <h1>POLIOMELITE</h1>
            </header>

            <main>
                <section className={styles.infoSection}>
                    <article className={styles.box}>
                        <h2>Poliomielite</h2>
                        <p>
                            A poliomielite, uma doença viral que pode causar paralisia, transforma vidas profundamente.
                            A recuperação exige reabilitação intensa e fisioterapia, com cada progresso sendo uma vitória.
                            O apoio emocional de amigos, familiares e profissionais é crucial.
                            Muitos encontram novas paixões e propósito, demonstrando resiliência e força.
                            Cada jornada é única, marcada por desafios e superação, inspirando pela capacidade de adaptação
                            e vivendo vidas significativas apesar das adversidades.
                        </p>
                    </article>

                    <article className={styles.box}>
                        <h2>O que é?</h2>
                        <p>
                            A poliomielite, também chamada de pólio ou paralisia infantil, é uma doença contagiosa aguda causada
                            por um vírus que vive no intestino, chamado poliovírus, que pode infectar crianças e adultos por meio do
                            contato direto com fezes ou com secreções eliminadas pela boca das pessoas infectadas e provocar ou não paralisia.
                            Nos casos graves, em que acontecem as paralisias musculares, os membros inferiores são os mais atingidos.
                        </p>
                    </article>
                </section>

                <div className={styles.container}>
                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 1
                                <br />
                                Poliomielite
                                <br />
                                (paralisia infantil)
                            </h3>
                        </div>
                        <a href="https://bvsms.saude.gov.br/poliomielite-paralisia-infantil/">
                            <div className={`${styles.face} ${styles.back} ${styles.back1}`}></div>
                        </a>
                    </div>

                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 2
                                <br />
                                Vídeo
                                <br />
                                Poliomielite: saiba o que é
                            </h3>
                        </div>
                        <a href="https://www.youtube.com/watch?v=O8Km8hyS8Uc">
                            <div className={`${styles.face} ${styles.back} ${styles.back2}`}></div>
                        </a>
                    </div>

                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 3
                                <br />
                                Doenças no Portal Fiocruz:
                                <br />
                                Poliomielite
                            </h3>
                        </div>
                        <a href="https://portal.fiocruz.br/doenca/poliomielite">
                            <div className={`${styles.face} ${styles.back} ${styles.back3}`}></div>
                        </a>
                    </div>
                </div>
            </main>

            <div className={styles.botaoChat}>
                <div className={styles.typewriter}>
                    <a href="/chat/fisicas"><h1 id="text">{text}</h1></a>
                </div>
            </div>
            <div className={styles.sairContainer}>
        <button className={styles.sairBotao} onClick={() => location.href = '/fisica'}>
          Sair
        </button>
      </div>
        </div>
    );
};

export default Poliomelite;