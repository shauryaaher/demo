import styles from "../styles/Other.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">
            <Image
              className={styles.logoo}
              src="/logo.png"
              height={60}
              width={110}
              alt="Logo"
            />
          </Link>
          <ul className={styles.list}>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default function otherPage() {
  return (
    <>
      <Head>
        <title>Other Page</title>
      </Head>
      <Header />
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.container}>
            <h4>
              <strong>Yowza!</strong>
            </h4>
            <em>
              <p>Secure. Strong. Easy to use.</p>
            </em>
            <Image
              style={{ paddingRight: "20px" }}
              src="/phone.jpg"
              alt="phone"
              height={280}
              width={300}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h4>
              <strong>Big yowza!</strong>
            </h4>
            <p>
              <em>
                Everything you need on a bigger screen and extra features.
              </em>
            </p>
          </div>
          <Image
            style={{ paddingRight: "10px" }}
            src="/tablet.jpg"
            alt="tablet-electronic"
            height={260}
            width={310}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h4>
              <strong>Mirabile!</strong>
            </h4>
            <p>
              <em>Powerful with a a long battery life.</em>
            </p>
            <Image
              style={{ paddingRight: "50px" }}
              src="/laptop.jpg"
              alt="laptop"
              height={280}
              width={320}
            />
          </div>
        </div>
      </div>
    </>
  );
}
