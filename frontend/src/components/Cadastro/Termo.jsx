import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Termo.module.css";

const Termo = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      navigate('/cad');
    } else {
      alert('Você precisa concordar com os termos e a política de privacidade.');
    }
  };

  return (
    <div className={styles.termoContainer}>
      <h1 className={styles.termoTitle}>Termo de Responsabilidade - Fórum do Conexão Familiar</h1>
      <p className={styles.termoText}><strong>IMPORTANTE:</strong> Ao acessar ou utilizar o Fórum do Projeto Conexão Familiar, você está concordando com os termos e condições descritos abaixo. Este site é destinado exclusivamente a maiores de 18 anos. Ao continuar, você confirma que tem 18 anos ou mais.</p>

      <h2 className={styles.termoSubTitle}>1. OBJETIVO DO FÓRUM</h2>
      <p className={styles.termoText}>Reconheço que o Fórum do Conexão Familiar é um espaço voltado para a troca de experiências e apoio mútuo entre cuidadores e familiares de pessoas atípicas, sendo meu objetivo compartilhar informações e buscar auxílio de forma construtiva e respeitosa.</p>

      <h2 className={styles.termoSubTitle}>2. USO RESPONSÁVEL</h2>
      <p className={styles.termoText}>Comprometo-me a utilizar este Fórum de maneira ética, responsável e conforme a legislação vigente, comprometendo-me a não praticar quaisquer atos que possam causar danos ao Fórum, ao Projeto Conexão Familiar ou a terceiros. Comprometo-me, ainda, a não divulgar, compartilhar ou publicar conteúdo que seja ilegal, ofensivo, discriminatório, difamatório, ou que viole direitos de propriedade intelectual de terceiros.</p>

      <h2 className={styles.termoSubTitle}>3. RESPONSABILIDADE PELO CONTEÚDO PUBLICADO</h2>
      <p className={styles.termoText}>Assumo total responsabilidade por todo o conteúdo que publicar ou compartilhar no Fórum, incluindo textos, imagens, vídeos ou qualquer outro formato. Reconheço que sou o único responsável pelo que escrevo e pelas informações que compartilho, e que estas devem respeitar a ética, os direitos de terceiros e as leis aplicáveis. Comprometo-me a não postar informações falsas ou prejudiciais aos demais usuários.</p>

      <h2 className={styles.termoSubTitle}>4. ISENÇÃO DE RESPONSABILIDADE</h2>
      <p className={styles.termoText}>Eu isento o Projeto Conexão Familiar de qualquer responsabilidade por danos diretos ou indiretos que possam ocorrer em decorrência do uso indevido do Fórum, seja por mim ou por terceiros que venham a utilizar meu acesso. O Projeto Conexão Familiar não se responsabiliza pelo conteúdo publicado pelos usuários, que são os únicos responsáveis pelas informações compartilhadas.</p>

      <h2 className={styles.termoSubTitle}>5. POLÍTICA DE PRIVACIDADE</h2>
      <p className={styles.termoText}>A coleta e o tratamento de informações dos usuários são feitos conforme descrito na Política de Privacidade do Projeto Conexão Familiar. Ao utilizar o Fórum, você concorda com a coleta e o uso de dados conforme as diretrizes estabelecidas na Política de Privacidade do site.</p>

      <h1 className={styles.termoTitle}>Política de Privacidade - Conexão Familiar</h1>
      <p className={styles.termoText}>O Projeto Conexão Familiar valoriza a sua privacidade e se compromete a proteger seus dados pessoais. Ao utilizar nosso site e Fórum, você concorda com os termos abaixo.</p>

      <h2 className={styles.termoSubTitle}>1. INFORMAÇÕES COLETADAS</h2>
      <p className={styles.termoText}>Coletamos as seguintes informações:</p>
      <ul className={styles.termoList}>
        <li className={styles.termoListItem}>Informações fornecidas por você: Nome, CPF, Data de Nascimento e outros dados pessoais fornecidos ao se cadastrar no site ou ao interagir no Fórum.</li>
      </ul>

      <h2 className={styles.termoSubTitle}>2. USO DAS INFORMAÇÕES</h2>
      <p className={styles.termoText}>Utilizamos seus dados para:</p>
      <ul className={styles.termoList}>
        <li className={styles.termoListItem}>Melhorar a navegação e experiência no site.</li>
        <li className={styles.termoListItem}>Cumprir exigências legais.</li>
      </ul>

      <h2 className={styles.termoSubTitle}>3. COMPARTILHAMENTO DE INFORMAÇÕES</h2>
      <p className={styles.termoText}>Não compartilhamos seus dados pessoais com terceiros, exceto:</p>
      <ul className={styles.termoList}>
        <li className={styles.termoListItem}>Com fornecedores de serviços que ajudam a operar o site (como hospedagem de dados).</li>
        <li className={styles.termoListItem}>Para cumprir obrigações legais.</li>
      </ul>

      <h2 className={styles.termoSubTitle}>4. CONTATO</h2>
      <p className={styles.termoText}>Se tiver dúvidas sobre a nossa Política de Privacidade, entre em contato conosco pelo e-mail: <a href="mailto:conexaofamiliar.cf@gmail.com" className={styles.termoLink}>conexaofamiliar.cf@gmail.com</a></p>

      <div className={styles.buttonContainer}>
        <form id="termoForm" onSubmit={handleSubmit}>
          <label className={styles.termoCheckboxLabel}>
            <input 
              type="checkbox" 
              id="termoCheckbox" 
              className={styles.termoCheckbox} 
              checked={isChecked} 
              onChange={handleCheckboxChange}
            /> 
            Eu li e concordo com os Termos e a Política de Privacidade
          </label>
          <br /><br />
          <button type="submit" className={styles.termoButton}>Continuar</button>
        </form>
      </div>
    </div>
  );
}

export default Termo;