import styles from "../styles/Other.module.scss";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function Header() {
  return (
    <>
      <header className={styles.header} style={{ height: "70px" }}>
        <nav className={styles.nav}>
          <Link href="/">
            <Image
              className={styles.logoo}
              src="/emirates.png"
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

export default function Book() {
  return (
    <>
      <Head>
        <title>Other Page</title>
      </Head>
      <Header />
      <center>
        <h1>Quick flights</h1>
      </center>

      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>
              Chhatrapati Shivaji Maharaj International Airport to Dubai
              International Airport
            </strong>
          </h4>
          <p>
            <em>Time: 4.5 hours</em>
          </p>
          <button
            className={styles.buy}
            onClick={() =>
              window.location.replace(
                "https://demo-five-ashy.vercel.app/api/bom_to_dub"
              )
            }
          >
            Book now
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>
              Chhatrapati Shivaji Maharaj International Airport to Delhi Airport
            </strong>
          </h4>
          <p>
            <em>Time: 2.5 hours</em>
          </p>
          <button
            className={styles.buy}
            onClick={() =>
              window.location.replace(
                "https://demo-five-ashy.vercel.app/api/bom_to_del"
              )
            }
          >
            Book now
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>
              Dubai International Airport to Chhatrapati Shivaji Maharaj
              International Airport
            </strong>
          </h4>
          <p>
            <em>Time: 4.5 hours</em>
          </p>
          <button
            className={styles.buy}
            onClick={() =>
              window.location.replace(
                "https://demo-five-ashy.vercel.app/api/dub_to_bom/"
              )
            }
          >
            Book now
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>Dubai International Airport to Delhi Airport</strong>
          </h4>
          <p>
            <em>Time: 4 hours</em>
          </p>
          <button
            className={styles.buy}
            onClick={() =>
              window.location.replace(
                "https://demo-five-ashy.vercel.app/api/dub_to_del/"
              )
            }
          >
            Book now
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>Delhi Airport to Dubai International Airport</strong>
          </h4>
          <p>
            <em>Time: 4.5 hours</em>
          </p>
          <button
            className={styles.buy}
            onClick={() =>
              window.location.replace(
                "https://demo-five-ashy.vercel.app/api/del_to_dub"
              )
            }
          >
            Book now
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>
              London Heathrow to Chhatrapati Shivaji Maharaj International
              Airport
            </strong>
          </h4>
          <p>
            <em>Time: 9 hours </em>
          </p>
          <button
            className={styles.buy}
            onClick={() =>
              window.location.replace(
                "https://demo-five-ashy.vercel.app/api/lon_to_bom/"
              )
            }
          >
            Book now
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>
              Chhatrapati Shivaji Maharaj International Airport to London
              Heathrow
            </strong>
          </h4>
          <p>
            <em>Time: 9.5 hours </em>
          </p>
          <button
            className={styles.buy}
            onClick={() =>
              window.location.replace(
                "https://demo-five-ashy.vercel.app/api/bom_to_lon/"
              )
            }
          >
            Book now
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>
              John F. Kennedy International Airport to London Heathrow
            </strong>
          </h4>
          <p>
            <em>Time: 7 hours</em>
          </p>
          <button
            className={styles.buy}
            onClick={() =>
              window.location.replace(
                "https://demo-five-ashy.vercel.app/api/ny_to_lon/"
              )
            }
          >
            Book now
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>
              John F. Kennedy International Airport to Chhatrapati Shivaji
              Maharaj International Airport
            </strong>
          </h4>
          <p>
            <em>Time: 14 hours</em>
          </p>
          <button
            className={styles.buy}
            onClick={() =>
              window.location.replace(
                "http://demo-five-ashy.vercel.app/api/ny_to_bom/"
              )
            }
          >
            Book now
          </button>
        </div>
      </div>
    </>
  );
}
