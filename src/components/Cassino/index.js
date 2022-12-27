import React, { useState } from "react";
import styles from "./style.module.css";


export default function Cassino(){

    const [numberUser, setNumberUser] = useState(null);
    const [numberSorteio, setNumberSorteio] = useState(null);

    function gerarNumbero(){
        setNumberUser(Math.floor(Math.random() * 10))
        gerarNumeroSorteio()
    }

    function gerarNumeroSorteio(){
        setNumberSorteio(Math.floor(Math.random() * 10))
    }

    return(
        <section className={styles.geradorOn}>
            <h2>Gere um número</h2>
            <div className={styles.cassino}>
                <div className={styles.gerador}>
                    <h2>Seu número</h2>
                    <span>{numberUser}</span>
                </div>
                <div className={styles.resultado}>
                    <h2>Resultado final</h2>
                    <span>{numberSorteio}</span>
                </div>
            </div>
            <button onClick={gerarNumbero}>Gerar</button>
            {numberUser === numberSorteio ? <h1>Oba! Você ganhou</h1> : <h1>Poxa. Você perdeu </h1>}
        </section>
    )
}