import React, { useState, useEffect } from 'react';
import styles from './Cri.module.css'; // Importa o CSS Modules

const Cri = () => {

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
        <h1>SÍNDROME DO CRI</h1>
      </header>

      <main>
        <section className={styles.infoSection}>
          <article className={styles.box}>
            <h2>Síndrome do cri</h2>
            <p>
              A síndrome de Cri du Chat é uma condição genética rara causada pela perda parcial do cromossomo 5, que pode levar a desafios no desenvolvimento motor, cognitivo e na comunicação. Embora a condição apresente dificuldades, é importante lembrar que cada pessoa com síndrome de Cri du Chat possui seu próprio potencial e habilidades. Com o suporte adequado, como terapias e compreensão, é possível melhorar a qualidade de vida e alcançar conquistas significativas. O amor e a paciência de familiares e cuidadores são essenciais para ajudar cada indivíduo a prosperar. A aceitação e a inclusão são fundamentais para enfrentar os desafios e celebrar as vitórias únicas.
            </p>
          </article>

          <article className={styles.box}>
            <h2>O que é?</h2>
            <p>
              A síndrome de Cri du Chat é uma condição genética rara causada pela perda parcial do cromossomo 5. Caracteriza-se por um choro agudo similar ao de um gato, características faciais distintas, e pode envolver atrasos no desenvolvimento motor e cognitivo, além de problemas de saúde associados como defeitos cardíacos. Com intervenções precoces e suporte, incluindo terapias e educação adaptada, as pessoas com a síndrome podem desenvolver habilidades e ter uma vida plena. O apoio e a compreensão são essenciais para promover o bem-estar e a inclusão.
            </p>
          </article>
        </section>

        <div className={styles.container}>
          <div className={styles.square}>
            <div className={`${styles.face} ${styles.front}`}>
              <h3>
                Material 1
                <br />
                Síndrome de Cri Du
                <br />
                JORNAL USP
              </h3>
            </div>
            <a href="https://jornal.usp.br/atualidades/sindrome-de-cri-du-chat-deve-ser-investigada-nas-primeiras-horas-de-vida/#:~:text=A%20s%C3%ADndrome%20de%20cri%2Ddu,resulta%20em%20uma%20anomalia%20gen%C3%A9tica.&text=Conhecida%20como%20%E2%80%9Cmiado%20de%20gato,som%20do%20choro%20do%20beb%C3%AA">
              <div className={`${styles.face} ${styles.back1} ${styles.back}`}></div>
            </a>
          </div>

          <div className={styles.square}>
            <div className={`${styles.face} ${styles.front}`}>
              <h3>
                Material 2
                <br />
                Vídeo
                <br />
                Síndrome de Cri Du Chat - Síndrome do Miado de Gato
              </h3>
            </div>
            <a href="https://www.youtube.com/watch?v=OcCPc5g24wg">
              <div className={`${styles.face} ${styles.back2} ${styles.back}`}></div>
            </a>
          </div>

          <div className={styles.square}>
            <div className={`${styles.face} ${styles.front}`}>
              <h3>
                Material 3
                <br />
                Associação Brasileira da
                <br />
                Síndrome de Cri Du chat
              </h3>
            </div>
            <a href="https://criduchatbrasil.com/sobre-a-sindrome">
              <div className={`${styles.face} ${styles.back3} ${styles.back}`}></div>
            </a>
          </div>
        </div>
      </main>

      <div className={styles.botaoChat}>
        <div className={styles.typewriter}>
          <a href="/chat/intelectuais">
            <h1 id="text">{text}</h1>
          </a>
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

export default Cri;