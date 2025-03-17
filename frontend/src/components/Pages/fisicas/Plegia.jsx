import React, { useState, useEffect } from 'react';
import styles from './Plegia.module.css';

const Plegia = () => {
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
                <h1>PLEGIA</h1>
            </header>

            <main>
                <section className={styles.infoSection}>
                    <article className={styles.box}>
                        <h2>Plegia</h2>
                        <p>
                            A plegia transforma profundamente a vida de alguém, exigindo uma adaptação física, emocional e espiritual. 
                            Inicialmente, o impacto pode ser devastador, mas a jornada de recuperação é uma prova da resiliência humana. 
                            A reabilitação e o apoio emocional de amigos, familiares e profissionais de saúde são essenciais.
                            Cada pequeno progresso é uma vitória que fortalece a determinação. Muitos descobrem novas paixões e interesses, 
                            encontrando um senso renovado de propósito. A força e a determinação de quem vive com plegia são inspiradoras, 
                            demonstrando uma capacidade incrível de adaptação e superação.
                        </p>
                    </article>

                    <article className={styles.box}>
                        <h2>O que é?</h2>
                        <p>
                            A plegia, também conhecida como paralisia, é uma condição médica caracterizada pela incapacidade total ou parcial de movimentar 
                            um ou mais membros do corpo. Isso ocorre devido a uma fraqueza tão intensa que os músculos não conseguem se contrair, 
                            resultando na perda completa dos movimentos. As causas da plegia podem variar, incluindo lesões na medula espinhal, 
                            acidentes vasculares cerebrais (AVCs) ou outras condições neurológicas. Além disso, as lesões podem ocorrer nas vias motoras, 
                            piramidal ou extrapiramidal, levando a um déficit completo de todos os movimentos.
                        </p>
                    </article>
                </section>

                <div className={styles.container}>
                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 1
                                <br/>
                                O que é: Plegia
                                <br/>
                            </h3>
                        </div>
                        <a href="https://sensisaude.com.br/glossario/o-que-e-plegia/">
                            <div className={`${styles.face} ${styles.back1} ${styles.back}`}></div>
                        </a>
                    </div>

                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 2
                                <br/>
                                Vídeo
                                <br/>
                                PARESIA X PARESTESIA X PLEGIA
                            </h3>
                        </div>
                        <a href="https://www.youtube.com/watch?v=WijxYWRue2c">
                            <div className={`${styles.face} ${styles.back2} ${styles.back}`}></div>
                        </a>
                    </div>

                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 3
                                <br/>
                                Perda de força, 
                                <br/>
                                Plegias e Paresias
                            </h3>
                        </div>
                        <a href="https://victorbarboza.com.br/perda-de-forca-plegias-e-paresias/">
                            <div className={`${styles.face} ${styles.back3} ${styles.back}`}></div>
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

export default Plegia;