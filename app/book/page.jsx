"use client";
import styles from "../Other.module.scss";
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
              src="/Magnum Opus.png"
              height={100}
              width={110}
              alt="Logo"
            />
          </Link>
        </nav>
      </header>
    </>
  );
}

function DivComponent(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>{props.children}</div>
      </div>
    </>
  );
}

export default function Book() {
  return (
    <>
      <Head>
        <title>Other Page</title>
      </Head>
      <div className={styles.main}>
        <Header />
        <center>
          <h1>Quick flights</h1>
        </center>

        <DivComponent>
          <h2>
            <strong>
              Chhatrapati Shivaji Maharaj International Airport to Dubai
              International Airport
            </strong>
          </h2>
          <p>
            <em>Time: 4.5 hours</em>
          </p>
          <button
            className={styles.buy}
            onClick={() => window.location.replace("/bom_to_dub")}
          >
            Book now
          </button>
        </DivComponent>
        <div className={styles.card}>
          <div className={styles.container}>
            <h2>
              <strong>
                Chhatrapati Shivaji Maharaj International Airport to Delhi
                Airport
              </strong>
            </h2>
            <p>
              <em>Time: 2.5 hours</em>
            </p>
            <button
              className={styles.buy}
              onClick={() => window.location.replace("/bom_to_del")}
            >
              Book now
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h2>
              <strong>
                Dubai International Airport to Chhatrapati Shivaji Maharaj
                International Airport
              </strong>
            </h2>
            <p>
              <em>Time: 4.5 hours</em>
            </p>
            <button
              className={styles.buy}
              onClick={() => window.location.replace("/dub_to_bom/")}
            >
              Book now
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h2>
              <strong>Dubai International Airport to Delhi Airport</strong>
            </h2>
            <p>
              <em>Time: 4 hours</em>
            </p>
            <button
              className={styles.buy}
              onClick={() => window.location.replace("/dub_to_del")}
            >
              Book now
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h2>
              <strong>Delhi Airport to Dubai International Airport</strong>
            </h2>
            <p>
              <em>Time: 4.5 hours</em>
            </p>
            <button
              className={styles.buy}
              onClick={() => window.location.replace("/del_to_dub")}
            >
              Book now
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h2>
              <strong>
                London Heathrow to Chhatrapati Shivaji Maharaj International
                Airport
              </strong>
            </h2>
            <p>
              <em>Time: 9 hours </em>
            </p>
            <button
              className={styles.buy}
              onClick={() => window.location.replace("/lon_to_bom")}
            >
              Book now
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h2>
              <strong>
                Chhatrapati Shivaji Maharaj International Airport to London
                Heathrow
              </strong>
            </h2>
            <p>
              <em>Time: 9.5 hours </em>
            </p>
            <button
              className={styles.buy}
              onClick={() => window.location.replace("/bom_to_lon")}
            >
              Book now
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h2>
              <strong>
                John F. Kennedy International Airport to London Heathrow
              </strong>
            </h2>
            <p>
              <em>Time: 7 hours</em>
            </p>
            <button
              className={styles.buy}
              onClick={() => window.location.replace("/ny_to_lon")}
            >
              Book now
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h2>
              <strong>
                John F. Kennedy International Airport to Chhatrapati Shivaji
                Maharaj International Airport
              </strong>
            </h2>
            <p>
              <em>Time: 14 hours</em>
            </p>
            <button
              className={styles.buy}
              onClick={() => window.location.replace("/ny_to_bom")}
            >
              Book now
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container}>
            <h2>
              <strong>
                Chhatrapati Shivaji Maharaj International Airport to Baghdad
                International Airport
              </strong>
            </h2>
            <p>
              <em>Time: 4 hours</em>
            </p>
            <button
              className={styles.buy}
              onClick={() => window.location.replace("/bom_to_bagh")}
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
