import React from 'react';
import styles from "./Intro.module.css";
import Foto from '../imagens/intro.png'

const Intro = () => {
    return (
        <div>
            <div className={styles.fotointro}>
                <img src={Foto} alt="intro" />
            </div>
        </div>
    );
}

export default Intro;