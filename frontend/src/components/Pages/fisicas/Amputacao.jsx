import React, { useState, useEffect } from 'react';
import styles from './Amputacao.module.css';

const Amputacao = () => {
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
  }, []); // Certifique-se de que o efeito seja executado apenas uma vez

  return (
    <div className={styles.principal}>
      <header className={styles.header}>
        <h1>AMPUTAÇÃO</h1>
      </header>

      <main>
        <section className={styles.infoSection}>
          <article className={styles.box}>
            <h2>Amputação</h2>
            <p>
              A amputação é uma jornada desafiadora, mas não define quem você é. 
              É um processo de adaptação física, emocional e espiritual, onde encontrar apoio 
              e aceitar ajuda são essenciais. Cada passo diante é uma vitória, fortalecendo sua 
              determinação e revelando novas perspectivas de vida.
            </p>
          </article>

          <article className={styles.box}>
            <h2>O que é?</h2>
            <p>
              Amputação é a remoção cirúrgica parcial ou total de um membro do corpo humano 
              devido a condições médicas como lesões traumáticas graves, doenças vasculares avançadas, 
              infecções ou tumores. O objetivo é melhorar a qualidade de vida, aliviar a dor e prevenir 
              complicações sérias.
            </p>
          </article>
        </section>

        <div className={styles.container}>
          <div className={styles.square}>
            <div className={`${styles.face} ${styles.front}`}>
              <h3>
                Material 1
                <br/>
                Tipos de Amputações: 
                <br />
                Causas e Níveis de Amputação
              </h3>
            </div>
            <a href="https://bionicenter.com.br/2020/10/09/tipos-de-amputacoes-causas-e-niveis-de-amputacao/#:~:text=A%20amputa%C3%A7%C3%A3o%20%C3%A9%20a%20remo%C3%A7%C3%A3o,cirurgia%20preventiva%20para%20esses%20problemas.">
              <div className={`${styles.face} ${styles.back1} ${styles.back}`}></div>
            </a>
          </div>

          <div className={styles.square}>
            <div className={`${styles.face} ${styles.front}`}>
              <h3>
                Material 2
                <br/>
                Guia de orientações
                <br />
                ao paciente amputado
              </h3>
            </div>
            <a href="https://www.hcfmb.unesp.br/wp-content/uploads/2019/06/Amputado-1.pdf">
              <div className={`${styles.face} ${styles.back2} ${styles.back}`}></div>
            </a>
          </div>
          
          <div className={styles.square}>
            <div className={`${styles.face} ${styles.front}`}>
              <h3>
                Material 3
                <br/>
                Material de apoio
                <br />
                Deficiência Física
              </h3>
            </div>
            <a href="https://repositorio.londrina.pr.gov.br/index.php/menu-educacao/educacao-e-a-covid-19/inclusao/31471-material-apoio-deficiencia-fisica/file">
              <div className={`${styles.face} ${styles.back3} ${styles.back}`}></div>
            </a>
          </div>
        </div>
      </main>

      <div className={styles.botaoChat}>
        <div className={styles.typewriter}>
          <a href="/chat/fisicas">
            <h1>{text}</h1>
          </a>
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

export default Amputacao;