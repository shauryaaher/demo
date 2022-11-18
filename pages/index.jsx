import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Fridge() {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h4>
          <strong>Chef d&apos;oeuvre</strong>
        </h4>
        <p>
          <em>The same as its name.</em>
        </p>
        <Image src="/fridge.jpg" alt="refridgerator" height={250} width={320} />
      </div>
    </div>
  );
}

function WashingMachine() {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h4>
          <strong>Spinner</strong>
        </h4>
        <p>
          <em>
            An IoT-based machine that you can control from another country.
          </em>
        </p>
        <Image
          style={{ paddingLeft: "30px", paddingRight: "10px" }}
          src="/washing-machine.jpg"
          alt="washing-machine"
          height={250}
          width={300}
        />
      </div>
    </div>
  );
}

function TV() {
  return (
    <Link href="/TV">
      <div className={styles.card} style={{ width: "380px" }}>
        <div className={styles.container}>
          <h4>
            <strong>Neptune</strong>
          </h4>
          <p>
            <em>Brilliant colors.</em>
          </p>

          <Image src="/tv.jpg" alt="television" height={250} width={350} />
        </div>
      </div>
    </Link>
  );
}

export async function getServerSideProps() {
  const req = await fetch("https://demo-five-ashy.vercel.app/api/hello");
  const data = await req.text();
  return {
    props: {
      heading: data,
    },
  };
}

export default function Home(props) {
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
              <Link className={styles.navcontent} href="/general-electronics">
                General electronics
              </Link>
              <Link href="/TV">Neptune</Link>
            </li>
          </ul>
        </nav>
      </header>
      <center>
        <h1>{props.heading}</h1>
      </center>
      <div className={styles.main}>
        <TV />
        <Fridge />
        <WashingMachine />
      </div>
    </>
  );
}
