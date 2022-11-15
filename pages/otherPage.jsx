import styles from "../styles/Other.module.css";
import Link from "next/link";
import Head from "next/head";

export async function getServerSideProps() {
  const req = await fetch("http://localhost:3000/api/hello");
  const data = await req.text();
  return {
    props: {
      data: data,
    },
  };
}

export default function otherPage(props) {
  return (
    <>
      <Head>
        <title>Other Page</title>
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li><Link href="/">Home</Link></li>
          </ul>
        </nav>
      </header>
      <center>
        <h1>{props.data}</h1>
      </center>
    </>
  );
}
