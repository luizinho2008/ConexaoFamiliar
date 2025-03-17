import React, { useState, useEffect } from 'react';
import styles from './Surdez.module.css';

const Surdez = () => {
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
        <h1>SURDEZ</h1>
      </header>

      <main>
        <section className={styles.infoSection}>
          <article className={styles.box}>
            <h2>Surdez</h2>
            <p>
              A surdez afeta a capacidade de ouvir e pode variar de perda parcial a total. A adaptação envolve o uso de aparelhos auditivos, implantes cocleares e aprendizado de linguagem de sinais. O apoio emocional e a integração social são fundamentais. Apesar das dificuldades, muitas pessoas surdas descobrem novas habilidades e oportunidades, encontrando uma vida rica e significativa. Cada jornada é única, marcada por força e resiliência.
            </p>
          </article>

          <article className={styles.box}>
            <h2>O que é?</h2>
            <p>
              Surdez é a diminuição da capacidade de ouvir, levando-se em consideração os níveis definidos como normais. Ela pode ser leve, moderada ou grave.
              A Organização Mundial de Saúde (OMS) afirma que pelo menos 800 milhões de pessoas no mundo sofrem alguma perda auditiva. Entre os 20 e 40 anos de idade, a surdez atinge 15% das pessoas. Já acima dos 70 anos, a prevalência pode chegar a 50%.
              De acordo com a Sociedade Brasileira de Otologia (SBO), de cada mil crianças nascidas no Brasil, cerca de três a cinco já nascem com deficiência auditiva. Estima-se que, aproximadamente, 5,8 milhões de brasileiros tenham algum grau de surdez.
              A surdez pode ter diferentes graus, tipos, ser congênita ou adquirida e afetar pessoas de qualquer idade sob variadas formas. Seus prejuízos são diversos e, comumente, provoca alterações na comunicação com grande impacto na saúde e qualidade de vida, no desenvolvimento acadêmico e nas relações de trabalho.                    
            </p>
          </article>
        </section>

        <div className={styles.container}>
          <div className={styles.square}>
            <div className={styles.face + " " + styles.front}>
              <h3>
                Material 1
                <br />
                10/11 – Dia Nacional de Prevenção e Combate à Surdez
                <br />
              </h3>
            </div>
            <a href="https://bvsms.saude.gov.br/10-11-dia-nacional-de-prevencao-e-combate-a-surdez-3/#:~:text=Surdez%20%C3%A9%20a%20diminui%C3%A7%C3%A3o%20da,mundo%20sofrem%20alguma%20perda%20auditiva.">
              <div className={styles.face + " " + styles.back1 + " " + styles.back}></div>
            </a>
          </div>

          <div className={styles.square}>
            <div className={styles.face + " " + styles.front}>
              <h3>
                Material 2
                <br />
                Surdez:
                <br />
                o que é, sintomas, causas, tipos e tratamento
              </h3>
            </div>
            <a href="https://www.tuasaude.com/causas-da-surdez/">
              <div className={styles.face + " " + styles.back2 + " " + styles.back}></div>
            </a>
          </div>

          <div className={styles.square}>
            <div className={styles.face + " " + styles.front}>
              <h3>
                Material 3
                <br />
                Surdez
              </h3>
            </div>
            <a href="https://bvsms.saude.gov.br/surdez-3/">
              <div className={styles.face + " " + styles.back3 + " " + styles.back}></div>
            </a>
          </div>
        </div>
      </main>

      <div className={styles.botaoChat}>
        <div className={styles.typewriter}>
          <a href="/chat/sensoriais">
            <h1 id="text">{text}</h1>
          </a>
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

export default Surdez;