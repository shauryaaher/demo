import styles from "../styles/TV.module.scss";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.default}>
      <nav className={styles.navigator}>
        <Link href="/">
          <Image
            className={styles.logoo}
            src="/logo.png"
            height={60}
            width={110}
            alt="Logo"
          />
        </Link>

        <ul className={styles.nav_links}>
          <li>
            <Link className={styles.navcontent} href="/general-electronics">
              General electronics
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Price() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>Price</strong>
          </h4>
          <p>
            <em>Starting at INR. 20,000</em>
          </p>
          <Image
            style={{
              paddingBottom: "130px",
              paddingLeft: "40px",
              paddingRight: "5px",
            }}
            src="/tv.jpg"
            alt="television"
            height={335}
            width={340}
          />
          <p id="sliderVal"></p>
        </div>
      </div>
    </>
  );
}

function Size() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>Size</strong>
          </h4>
          <p>
            <em>Starting at 30-inches</em>
          </p>
          <ul className={styles.list} style={{paddingLeft: "150px"}}>
            <li>30-inch</li>
            <li>50-inch</li>
            <li>80-inch</li>
            <li>120-inch</li>
            <li>200-inch</li>
          </ul>
        </div>
      </div>
    </>
  )
}

function Features() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>Features</strong>
          </h4>
          <p>
            <em>Advanced features availible</em>
          </p>
          <ul className={styles.list}>
            <li>Home control.</li>
            <li>High-quality graphics.</li>
            <li>Magnificient 4K display.</li>
            <li>Vivid colors.</li>
            <li>Advanced security.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default function TV() {
  return (
    <div className={styles.main}>
      <Header />
      <Price />
      <Size />
      <Features />
    </div>
  );
}
