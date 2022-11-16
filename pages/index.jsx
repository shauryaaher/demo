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
                The other page
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className={styles.content}>Hello world.</h1>
      <div className={styles.content}>Please visit the other page.</div>
    </>
  );
}
