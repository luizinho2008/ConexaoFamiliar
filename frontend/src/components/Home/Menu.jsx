import React from 'react';
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import Logo from '../imagens/cf.png';

const Menu = () => {
    return (
        <div className={styles.cabecalho}>
            <div className={styles.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Sobre">Sobre o projeto</a></li>
                    <li><a href="#Secoes">Seções</a></li>
                    <li><a href="#Contato">Contato</a></li>
                    <li><Link to="/termo">Faça cadastro para utilizar o fórum</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;