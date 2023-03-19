import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Login.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.templeat}>HOME</div>
        <div className={styles.login}> login</div>
      </div>
    </>
  );
}
