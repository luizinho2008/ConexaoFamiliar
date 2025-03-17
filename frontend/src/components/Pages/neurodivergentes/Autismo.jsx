import React, { useState, useEffect } from 'react';
import styles from './Autismo.module.css';

const Autismo = () => {

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
                <h1>AUTISMO</h1>
            </header>

            <main>
                <section className={styles.infoSection}>
                    <article className={styles.box}>
                        <h2>Autismo</h2>
                        <p>Receber um diagnóstico de autismo pode despertar uma variedade de emoções, mas lembre-se de que isso é apenas uma parte do seu filho, não a definição de seu futuro. Com apoio, carinho e compreensão, ele tem o potencial de se desenvolver de maneiras únicas e surpreendentes.
                        Cada progresso é uma vitória que reflete o amor e o compromisso de vocês. A jornada pode ter desafios, mas também é repleta de momentos especiais que seu filho trará e cuidem de si mesmos, pois seu bem-estar é essencial para o crescimento do mesmo.</p>
                    </article>

                    <article className={styles.box}>
                        <h2>O que é?</h2>
                        <p>O autismo, ou Transtorno do Espectro Autista (TEA), é uma condição neurológica que afeta a forma como uma pessoa percebe e interage com o mundo. Caracteriza-se por dificuldades na comunicação e nas interações sociais, comportamentos repetitivos e sensibilidades sensoriais variadas.
                        Como o TEA é um espectro, suas manifestações variam amplamente entre os indivíduos. O diagnóstico é feito por profissionais de saúde e pode ser apoiado por intervenções precoces e terapias. Embora o autismo apresente desafios, muitas pessoas com TEA têm habilidades únicas e podem viver vidas plenas, especialmente quando recebem compreensão e suporte adequados.</p>
                    </article>
                </section>

                <div className={styles.container}>
                    {[1, 2, 3].map((num) => (
                        <div key={num} className={styles.square}>
                            <a href={
                                num === 1 ? "https://www.scielo.br/j/pee/a/NwnK5kF4zM9m9XRynr53nwF" :
                                num === 2 ? "https://www.abraac.org/" :
                                "https://www.youtube.com/watch?v=OvCyEbY7Mog"
                            }>
                                <div className={`${styles.face} ${styles.front}`}>
                                    <h3>
                                        {`Material ${num}`}
                                        <br />
                                        {num === 1 ? "Inclusão escolar e autismo" :
                                         num === 2 ? "ABRAAC - Associação Brasileira de Autismo" :
                                         "Dr. Rodrigo responde: o que é autismo?"}
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

export default Autismo;