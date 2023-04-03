import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Autopcomplit from "../components/autocomplit/index";
import TextField from "../components/textfield/index";
import styles from "@/styles/Login.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.templeat}>
          <div className={styles.background} >
            <div className={styles.div} >
              <h1 className={styles.titulo} >Lorem ipsum <span className={styles.colorpalavra}>dolar</span></h1>
              <h2 className={styles.subtitulo} >Entre apenas com seu numero de telefone</h2>
            </div>
          </div>
        </div>
        <div className={styles.login}>
          <div className={styles.card}> 
          <div>
            <h1>Lorem ipsum</h1>
            <div className={styles.display}>
            <Autopcomplit/>
            <TextField/>
            </div>
            <button className={styles.button}>Acessar</button>
            <div>
            <Button variant="text">Sou profissional da area!</Button>
            </div>

          </div>
          </div>
        </div>
      </div>
    </>
  );
}
