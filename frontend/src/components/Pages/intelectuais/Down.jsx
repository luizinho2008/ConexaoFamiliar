import React, { useState, useEffect } from 'react';
import styles from './Down.module.css';

const Down = () => {
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
                <h1>SÍNDROME DE DOWN</h1>
            </header>

            <main>
                <section className={styles.infoSection}>
                    <article className={styles.box}>
                        <h2>Síndrome de Down</h2>
                        <p>
                        A síndrome de Down é uma condição genética que traz desafios únicos, mas não define o potencial de uma pessoa. Cada indivíduo com síndrome de Down possui qualidades e habilidades especiais. Com apoio, compreensão e inclusão, eles podem alcançar grandes conquistas e viver vidas plenas. A aceitação e o respeito são essenciais para criar um ambiente onde todos se sintam valorizados. Lembre-se: cada progresso é uma vitória e reflete o esforço coletivo. A síndrome de Down é apenas uma parte de uma vida rica e cheia de potencial. Com empatia e suporte, podemos celebrar e apoiar cada pessoa em sua jornada.
                        </p>
                    </article>
                    
                    <article className={styles.box}>
                        <h2>O que é?</h2>
                        <p>
                        A síndrome de Down é uma condição genética causada pela presença extra do cromossomo 21, resultando em 47 cromossomos em vez de 46. Isso pode levar a características físicas específicas e a atrasos cognitivos variados. Além disso, pessoas com síndrome de Down podem ter problemas de saúde associados, como condições cardíacas e dificuldades auditivas.

Intervenções precoces, terapias e uma educação inclusiva são importantes para apoiar o desenvolvimento e a integração social. Com o devido suporte, indivíduos com síndrome de Down podem alcançar uma vida plena e satisfatória. A aceitação e o respeito são fundamentais para ajudar cada pessoa a atingir seu potencial máximo.
                        </p>
                    </article>
                </section>

                <div className={styles.container}>
                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 1<br/>
                                21/3 Dia Mundial e Nacional da Síndrome de Down<br/>
                                “O que significa inclusão?”
                            </h3>
                        </div>
                        <a href="https://bvsms.saude.gov.br/21-3-dia-mundial-e-dia-nacional-da-sindrome-de-down-o-que-significa-inclusao/">
                            <div className={`${styles.face} ${styles.back1} ${styles.back}`} ></div>
                        </a>
                    </div>

                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 2<br/>
                                Livro<br/>
                                Síndrome de Down e As Práticas Pedagógicas
                            </h3>
                        </div>
                        <a href="https://www.amazon.com.br/S%C3%ADndrome-Down-as-pr%C3%A1ticas-pedag%C3%B3gicas/dp/8532651895">
                            <div className={`${styles.face} ${styles.back2} ${styles.back}`}></div>
                        </a>
                    </div>
                    
                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 3<br/>
                                O que é Síndrome de Down?
                            </h3>
                        </div>
                        <a href="https://www.movimentodown.org.br/sindrome-de-down/o-que-e/">
                            <div className={`${styles.face} ${styles.back3} ${styles.back}`}></div>
                        </a>
                    </div>
                </div>
            </main>

            <div className={styles.botaoChat}>
                <div className={styles.typewriter}>
                    <a href="/chat/intelectuais"><h1 id="text">{text}</h1></a>
                </div>
            </div>
            <div className={styles.sairContainer}>
                <button className={styles.sairBotao} onClick={() => location.href = '/intelectual'}>
                    Sair
                </button>
            </div>
        </div>
    );
}

export default Down;