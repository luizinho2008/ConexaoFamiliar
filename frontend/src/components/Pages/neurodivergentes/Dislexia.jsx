import React, { useState, useEffect } from 'react';
import styles from './Dislexia.module.css';

const Dislexia = () => {
    const [text, setText] = useState('');
    const targetText = "Clique aqui para entrar no fórum!";

    useEffect(() => {
        let index = 0;
        const typeText = () => {
            if (index < targetText.length) {
                setText(targetText.substring(0, index + 1));
                index++;
                setTimeout(typeText, 100);
            }
        };
        typeText();
    }, []);

    return (
        <div className={styles.principal}>
            <header className={styles.header}>
                <h1>DISLEXIA</h1>
            </header>

            <main>
                <section className={styles.infoSection}>
                    <article className={styles.box}>
                        <h2>Dislexia</h2>
                        <p>
                            A dislexia é uma condição que afeta a leitura e a escrita, mas não define a capacidade ou o valor de uma pessoa. Embora possa apresentar desafios, é importante reconhecer que a dislexia não reflete a inteligência ou o potencial individual.
                            Cada indivíduo com dislexia possui um conjunto especial de habilidades e talentos que podem brilhar de maneiras únicas. Com compreensão e apoio adequados, é possível superar desafios e explorar plenamente essas habilidades.
                        </p>
                    </article>

                    <article className={styles.box}>
                        <h2>O que é?</h2>
                        <p>
                            A dislexia é uma dificuldade de aprendizagem que afeta a leitura e a escrita. O cérebro de quem tem dislexia funciona de forma diferente para interpretar letras e sons, tornando mais difícil juntar as letras e organizar as palavras na mente. Isso pode causar problemas para ler com precisão e fluência. A dislexia geralmente é percebida na infância, e o tratamento inclui apoio especializado na escola e outras intervenções que ajudam a melhorar a leitura.
                        </p>
                    </article>
                </section>

                <div className={styles.container}>
                    {[1, 2, 3].map((num) => (
                        <div key={num} className={styles.square}>
                            <a href={
                                num === 1 ? "https://www.dislexia.org.br/o-que-e-dislexia/" :
                                num === 2 ? "https://www.youtube.com/watch?v=0nZF65Ei6PQ" :
                                "https://www.amazon.com.br/Supere-dislexia-exerc%C3%ADcios-dificuldades-leitura/dp/6556162183"
                            }>
                                <div className={`${styles.face} ${styles.front}`}>
                                    <h3>
                                        {`Material ${num}`}
                                        <br />
                                        {num === 1 ? "Associação Brasileira de Dislexia" :
                                         num === 2 ? "Vídeo: Entenda as variações da dislexia e como elas são apresentadas" :
                                         "Supere a dislexia: 100 cartas com exercícios"}
                                    </h3>
                                </div>
                                <div className={`${styles.face} ${styles[`back${num}`]} ${styles.back}`}></div>
                            </a>
                        </div>
                    ))}
                </div>
            </main>

            <div className={styles.botaoChat}>
                <div className={styles.typewriter}>
                    <a href="/chat/neurodivergentes">
                        <h1>{text}</h1>
                    </a>
                </div>
            </div>
            <div className={styles.sairContainer}>
                <button className={styles.sairBotao} onClick={() => location.href = '/neurodivergente'}>
                    Sair
                </button>
            </div>
        </div>
    );
}

export default Dislexia;