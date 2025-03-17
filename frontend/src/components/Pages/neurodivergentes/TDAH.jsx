import React, { useState, useEffect } from 'react';
import styles from './TDAH.module.css';

const TDAH = () => {
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

    const materials = [
        {
            id: 1,
            title: "Material 1",
            description: "TDAH: a importância do tratamento durante a infância e a vida adulta",
            link: "https://drauziovarella.uol.com.br/videos/coluna/tdah-a-importancia-do-tratamento-durante-a-infancia-e-a-vida-adulta/",
        },
        {
            id: 2,
            title: "Material 2",
            description: "Livro: Mentes inquietas - TDAH – Desatenção, hiperatividade e impulsividade",
            link: "https://draanabeatriz.com.br/mentes-inquietas-tdah-desatencao-hiperatividade-e-impulsividade/",
        },
        {
            id: 3,
            title: "Material 3",
            description: "TDAH (transtorno do déficit de atenção com hiperatividade)",
            link: "https://drauziovarella.uol.com.br/pediatria/tdah-transtorno-do-deficit-de-atencao-com-hiperatividade/",
        }
    ];

    return (
        <div className={styles.principal}>
            <header className={styles.header}>
                <h1>TDAH</h1>
            </header>

            <main>
                <section className={styles['info-section']}>
                    <article className={styles.box}>
                        <h2>TDAH</h2>
                        <p>
                            Entendemos que o diagnóstico de TDAH pode ser um momento desafiador e cheio de dúvidas, mas queremos lembrá-los de que isso não define o futuro do seu filho. TDAH é apenas uma parte de quem ele é, e com compreensão e apoio, ele pode desenvolver suas habilidades e potencial.
                            Busquem informações e apoio, e lembrem-se de cuidar de vocês mesmos também. Vocês não estão sozinhos nessa jornada, e o amor e a paciência de vocês são fundamentais para ajudar seu filho a prosperar.
                        </p>
                    </article>

                    <article className={styles.box}>
                        <h2>O que é?</h2>
                        <p>
                            O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é um transtorno neurobiológico que afeta a capacidade de uma pessoa de manter a atenção, controlar impulsos e regular a hiperatividade.
                        </p>
                    </article>
                </section>

                <div className={styles.container}>
                    {materials.map((material) => (
                        <div key={material.id} className={styles.square}>
                            <a href={material.link}>
                                <div className={`${styles.face} ${styles.front}`}>
                                    <h3>
                                        {material.title}
                                        <br />
                                        {material.description}
                                    </h3>
                                </div>
                                <div className={`${styles.face} ${styles[`back${material.id}`]} ${styles.back}`}></div>
                            </a>
                        </div>
                    ))}
                </div>
            </main>

            <div className={styles.botaoChat}>
                <div className={styles.typewriter}>
                    <a href="/chat/neurodivergentes"><h1 id="text">{text}</h1></a>
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

export default TDAH;