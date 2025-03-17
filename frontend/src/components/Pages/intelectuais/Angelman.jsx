import React, { useState, useEffect } from 'react';
import styles from './Angelman.module.css'; // Importa o CSS Modules

const Angelman = () => {

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
        <h1>SÍNDROME DE ANGELMAN</h1>
      </header>

      <main>
        <section className={styles.infoSection}>
          <article className={styles.box}>
            <h2>Síndrome de Angelman</h2>
            <p>
              Cuidar de uma criança com Síndrome de Angelman exige uma força e um amor extraordinários. Vocês enfrentam desafios diários, como convulsões e dificuldades de movimento, com uma paciência e dedicação admiráveis. Embora a jornada possa parecer solitária, lembrem-se de que há uma comunidade pronta para apoiar e oferecer compreensão. Cada pequena conquista é uma vitória significativa, e o amor incondicional de vocês faz uma enorme diferença na vida de sua criança. Saibam que estamos ao seu lado, oferecendo nosso apoio e torcendo por cada progresso.
            </p>
          </article>

          <article className={styles.box}>
            <h2>O que é?</h2>
            <p>
              A Síndrome de Angelman é uma condição genética rara que afeta o desenvolvimento cerebral, causando atraso intelectual grave, ausência de fala, risos frequentes, convulsões e dificuldades motoras. É causada por uma mutação ou ausência do cromossomo 15 herdado da mãe. O tratamento envolve medicamentos e terapias, como hidroterapia, musicoterapia e terapia ocupacional, para ajudar a melhorar a comunicação, a coordenação motora e a qualidade de vida.
            </p>
          </article>
        </section>
        
        <div className={styles.container}>
          <div className={styles.square}>
            <div className={`${styles.face} ${styles.front}`}>
              <h3>
                Material 1
                <br/>
                Sobre a síndrome de Angelman
              </h3>
            </div>
            <a href="https://angelmanbrasil.org.br/sobre/">
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
                Síndrome de Angelman: você conhece?
              </h3>
            </div>
            <a href="https://www.youtube.com/watch?v=FZaZ67QcB70">
              <div className={`${styles.face} ${styles.back2} ${styles.back}`}></div>
            </a>
          </div>
          
          <div className={styles.square}>
            <div className={`${styles.face} ${styles.front}`}>
              <h3>
                Material 3
                <br/>
                Síndrome de Angelman
              </h3>
            </div>
            <a href="https://www.draanagabrielascuoghi.com.br/materia/sindrome-de-angelman">
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

export default Angelman;