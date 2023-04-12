import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Autopcomplit from "../components/autocomplit/index";
import TextField from "../components/textfield/index";
import styles from "@/styles/pages/Login.module.scss";

export default function Login() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.templeat}>
          <div className={styles.background}>
            <div className={styles.div}>
              <h1 className={styles.titulo}>
                Lorem ipsum <span className={styles.colorpalavra}>dolar</span>
              </h1>
              <h2 className={styles.subtitulo}>
                Entre apenas com seu numero de telefone
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.login}>
          <div className={styles.card}>
            <div className={styles.a}>
              <h1>Lorem ipsum</h1>
            </div>
            <div className={styles.b}>
              <Autopcomplit />
              <TextField />
            </div>
            <div className={styles.c}>
              <button className={styles.btn}>Acessar</button>
            </div>
            <div className={styles.d}>
              <button className={styles.btn_link}>
                <a className={styles.txt}>Sou profissional da area!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
