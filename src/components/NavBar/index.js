import React from "react";
import styles from "./style.module.css";

export default function NavBar(){
    return (
        <header>
            <nav className={styles.navBarUl}>
                <img src='https://avatars.githubusercontent.com/u/87824330?s=280&v=4' alt='logo-gds' width="60px"/>
                <ul className={styles.listaNav}>
                    <li>Início</li>
                    <li>Apostas</li>
                    <li>Cassino</li>
                    <li>Prêmios</li>
                </ul>
                <button>Login</button>
            </nav>
        </header>
    );
}
