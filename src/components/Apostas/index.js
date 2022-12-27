import React from "react";
import styles from "./style.module.css";

export default function Apostas(){
    return(
        <section className={styles.apostas}>
            <div>
                <h1>Suas apostas</h1>
                <table >
                    <thead>
                        <tr>
                            <th>ID da aposta</th>
                            <th>Status</th>
                            <th>Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00054420</td>
                            <td>Em aberto</td>
                            <td><button>Abrir</button></td>
                        </tr>
                        <tr>
                            <td>00054420</td>
                            <td>Em aberto</td>
                            <td><button>Abrir</button></td>
                        </tr>
                        <tr>
                            <td>00054420</td>
                            <td>Em aberto</td>
                            <td><button>Abrir</button></td>
                        </tr>
                        <tr>
                            <td>00054420</td>
                            <td>Em aberto</td>
                            <td><button>Abrir</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}