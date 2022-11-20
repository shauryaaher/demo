import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

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
            src="/emirates.png"
            height={100}
            width={110}
            alt="Logo"
          />
          <ul className={styles.nav_links} style={{ paddingTop: "20px" }}>
            <li>
              <Link href="/book">Book a flight</Link>
            </li>
          </ul>
        </nav>
      </header>

      <center>
        <h1>{props.heading}</h1>
      </center>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>Special offer</strong>
          </h4>
          <p>
            <em>
              Fly with Emirates and get 2 nights at the prestigious Burj Al Arab
              hotel in Dubai and a tour @ INR. 100,000.
            </em>
            <Image
              src="/hotel.jpg"
              alt="burj-al-arab"
              height={270}
              width={320}
              style={{ borderRadius: "7px" }}
            />
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>Special offer</strong>
          </h4>
          <p>
            <em>
              Apply for the Emirates Platinum Card and get extra meals and
              upgrades on your next flight.
            </em>
          </p>
          <Image
            src="/food.jpg"
            alt="fried-rice"
            height={300}
            width={320}
            style={{ borderRadius: "7px" }}
          />
        </div>
      </div>
      <Link href="/book">
        <div className={styles.card} style={{ cursor: "pointer" }}>
          <div className={styles.container}>
            <h4>Quick flights</h4>
          </div>
          <p style={{ paddingLeft: "13px" }}>
            <em>Check out the quick flight bookings.</em>
          </p>
          <Image
            src="/plane.jpg"
            alt="airplane-emirates"
            height={200}
            width={349}
            style={{ borderRadius: "7px" }}
          />
        </div>
      </Link>
    </>
  );
}
