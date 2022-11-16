import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <header className={styles.default}>
        <nav className={styles.navigator}>
          <Image
            className={styles.logoo}
            src="/logo.png"
            height={60}
            width={110}
            alt="Logo"
          />
          <ul className={styles.nav_links}>
            <li>
              <Link className={styles.navcontent} href="/otherPage">
                General electronics
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.container}>
            <h4>
              <strong>Chef d&apos;oeuvre</strong>
            </h4>
            <p>
              <em>The same as its name.</em>
            </p>
            <Image
              src="/fridge.jpg"
              alt="refridgerator"
              height={250}
              width={320}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h4>
              <strong>Lock-duck</strong>
            </h4>
            <p>
              <em>Safe. Simple. Reliable.</em>
            </p>
            <Image
              style={{paddingLeft: "30px", paddingRight: "10px"}}
              src="/washing-machine.jpg"
              alt="washing-machine"
              height={250}
              width={300}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h4>
              <strong>Neptune</strong>
            </h4>
            <p>
              <em>Brilliant colors.</em>
            </p>
            <Image
              style={{ paddingLeft: "40px", paddingRight: "70px" }}
              src="/tv.jpg"
              alt="television"
              height={250}
              width={350}
            />
          </div>
        </div>
      </div>
    </>
  );
}
