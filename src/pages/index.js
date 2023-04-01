import Head from "next/head";
import Image from "next/image";
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
          <div className={styles.card}> a</div>
        </div>
      </div>
    </>
  );
}
