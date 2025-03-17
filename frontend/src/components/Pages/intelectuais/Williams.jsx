import React, { useState, useEffect } from 'react';
import styles from './Williams.module.css';

const Williams = () => {
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
                <h1>SÍNDROME DE WILLIAMS</h1>
            </header>

            <main>
                <section className={styles.infoSection}>
                    <article className={styles.box}>
                        <h2>Síndrome de Williams</h2>
                        <p>
                            Cuidar de alguém com síndrome de Williams é uma jornada desafiante e preciosa. Os cuidadores, com amor e dedicação, celebram cada pequena conquista. Crianças com a síndrome são afetuosas e sociáveis com os outros, trazendo alegria. O apoio de familiares, amigos e profissionais é vital. Cada progresso reflete o cuidado investido. Apesar dos desafios, essa jornada é cheia de momentos de alegria, destacando a importância da empatia e da diversidade.
                        </p>
                    </article>

                    <article className={styles.box}>
                        <h2>O que é?</h2>
                        <p>
                            A síndrome de Williams é uma doença caracterizada por "face de gnomo ou fadinha”, nariz pequeno e empinado, cabelos encaracolados, lábios cheios, dentes pequenos e sorriso frequente. Estas crianças normalmente têm problemas de coordenação e equilíbrio, apresentando um atraso psicomotor. Seu comportamento é sociável e comunicativo, utilizando expressões faciais, contatos visuais e gestos na comunicação.
                        </p>
                    </article>
                </section>

                <div className={styles.container}>
                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 1
                                <br />
                                Manejo comportamental
                            </h3>
                        </div>
                        <a href="https://www.mackenzie.br/fileadmin/ARQUIVOS/Public/6-pos-graduacao/upm-higienopolis/mestrado-doutorado/disturbios_desenvolvimento/2018/periodicos/Manejo_comportamental_de_crian%C3%A7as_e_adolescentes_com_S%C3%ADndrome_de_Williams.pdf">
                            <div className={`${styles.face} ${styles.back1} ${styles.back}`}></div>
                        </a>
                    </div>

                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 2
                                <br />
                                Associação Brasileira da Síndrome de Williams
                            </h3>
                        </div>
                        <a href="https://www.swbrasil.org.br/">
                            <div className={`${styles.face} ${styles.back2} ${styles.back}`}></div>
                        </a>
                    </div>

                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 3
                                <br />
                                Síndrome de Williams
                                <br />
                                FIOCRUZ
                            </h3>
                        </div>
                        <a href="https://www.fiocruz.br/biosseguranca/Bis/infantil/sindrome-willians.htm">
                            <div className={`${styles.face} ${styles.back3} ${styles.back}`}></div>
                        </a>
                    </div>
                </div>
            </main>

            <div className={styles.botaoChat}>
                <div className={styles.typewriter}>
                    <a href="/chat/intelectuais"><h1>{text}</h1></a>
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

export default Williams;