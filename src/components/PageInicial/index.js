import React from "react";
import styles from "./style.module.css";

import ftFalcao from "../../assets/img/falcao.png";

export default function PageInicial(){
    return (
        <section className={styles.inicial}>
            <div className={styles.textPrincipal}>
                <h1> <span>F12.bet</span>, sua <span>melhor</span> jogada</h1>
            </div>
            <div className={styles.imgInicial}>
                <img src={ftFalcao} alt="Falcão, futsal"/>
            </div>
        </section>
    );
}