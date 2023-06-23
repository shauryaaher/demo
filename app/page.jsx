import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.main}>
        <header className={styles.default}>
          <nav className={styles.navigator}>
            <Image
              className={styles.logoo}
              src="/Magnum Opus.png"
              height={100}
              width={100}
              alt="Logo"
            />
            <ul className={styles.nav_links} style={{ paddingTop: "20px" }}>
              <li>
                <Link href="/book" className={styles.link}>Book flights</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Link href="/book">
          <div className={styles.card}>
            <div className={styles.container}>
              <center>
                <h1>
                  <strong>Welcome to Magnum Opus!</strong>
                </h1>
                <p>Click here to check the quick flights.</p>
                <Image
                  src="/plane.jpg"
                  height={500}
                  width={500}
                  alt="emirates-plane"
                  className={styles.img}
                />
              </center>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
