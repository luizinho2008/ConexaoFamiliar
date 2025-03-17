import React from 'react';
import styles from "./Info.module.css";
import Foto from '../imagens/infos.png'

const Info = () => {
    return (
        <div>
            <div>
                <img src={Foto} alt="intro" />
            </div>
        </div>
    );
}

export default Info;