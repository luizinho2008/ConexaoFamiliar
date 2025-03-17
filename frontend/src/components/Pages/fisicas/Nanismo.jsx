import React, { useState, useEffect } from 'react';
import styles from './Nanismo.module.css'; // Importação do módulo CSS

const Nanismo = () => {
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
                <h1>NANISMO</h1>
            </header>

            <main>
                <section className={styles['info-section']}>
                    <article className={styles.box}>
                        <h2>Nanismo</h2>
                        <p>
                            O nanismo é uma condição que resulta em estatura significativamente abaixo da média, mas não define o potencial ou a dignidade de alguém. 
                            Cada indivíduo é único e valioso, com habilidades, sonhos e contribuições únicas para oferecer ao mundo. 
                            A verdadeira grandeza está na maneira como abraçamos nossa singularidade e inspiramos os outros com nosso espírito resiliente e determinação inabalável. 
                        </p>
                    </article>

                    <article className={styles.box}>
                        <h2>O que é?</h2>
                        <p>
                            O nanismo é uma condição genética ou médica caracterizada por um crescimento significativamente abaixo da média esperada para a idade e sexo de uma pessoa. 
                            Pode resultar de diversas causas, afetando principalmente o desenvolvimento ósseo e, ocasionalmente, outros aspectos do corpo. 
                            Embora tenha impactos físicos, o nanismo não define a capacidade intelectual, emocional ou o valor de uma pessoa.
                        </p>
                    </article>
                </section>

                <div className={styles.container}>
                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 1
                                <br />
                                Pessoas com Nanismo 
                                <br />
                                e seus direitos
                            </h3>
                        </div>
                        <a href="https://www.gov.br/mdh/pt-br/navegue-por-temas/crianca-e-adolescente/acoes-e-programas/PESSOASCOMNANISMOESEUSDIREITOS.pdf">
                            <div className={`${styles.face} ${styles.back1} ${styles.back}`}></div>
                        </a>
                    </div>

                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 2
                                <br />
                                Instagram
                                <br />
                                ANNABRA - Associação Nanismo Brasil
                            </h3>
                        </div>
                        <a href="https://www.instagram.com/annabra_nanismo/">
                            <div className={`${styles.face} ${styles.back2} ${styles.back}`}></div>
                        </a>
                    </div>
                    
                    <div className={styles.square}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <h3>
                                Material 3
                                <br />
                                Ambientes acessíveis e
                                <br />
                                a pessoa com Nanismo
                            </h3>
                        </div>
                        <a href="https://www.gov.br/mdh/pt-br/navegue-por-temas/crianca-e-adolescente/acoes-e-programas/AMBIENTESACESSVEISEAPESSOACOMNANISMO.pdf">
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
}

export default Nanismo;