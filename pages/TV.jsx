import styles from "../styles/TV.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
          <ul className={styles.list} style={{ paddingLeft: "150px" }}>
            <li>30-inch</li>
            <li>50-inch</li>
            <li>80-inch</li>
            <li>120-inch</li>
            <li>200-inch</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function ResolutionList() {
  return (
    <>
      <input className={styles.checkbox} type="checkbox" id="4K" />
      <label htmlFor="4K"> 4K</label>
      <br />
      <input className={styles.checkbox} type="checkbox" id="OLED" />
      <label htmlFor="OLED"> OLED</label>
      <br />
      <input className={styles.checkbox} type="checkbox" id="1080p" />
      <label htmlFor="1080p"> 1080p</label>
      <br />
      <input type="checkbox" className={styles.checkbox} id="QLED" />
      <label htmlFor="QLED"> QLED</label>
      <br />
      <input type="checkbox" className={styles.checkbox} id="720p" />
      <label htmlFor="720p"> 720p</label>
      <br />
    </>
  );
}

function TVOSList() {
  return (
    <>
      <input type="checkbox" className={styles.checkbox} id="android" />
      <label htmlFor="android">Android</label>
      <br />
      <input type="checkbox" className={styles.checkbox} id="web-os" />
      <label htmlFor="web-os">WebOS</label>
      <br />
      <input type="checkbox" className={styles.checkbox} id="tizen" />
      <label htmlFor="tizen">Tizen</label>
      <br />
    </>
  );
}

function MountTypeList() {
  return (
    <>
      <input type="checkbox" className={styles.checkbox} id="table" />
      <label htmlFor="table">Table mount</label>
      <br />
      <input type="checkbox" className={styles.checkbox} id="wall" />
      <label htmlFor="wall">Wall mount</label>
      <br />
    </>
  );
}

function ConnectivityTechList() {
  return (
    <>
      <input type="checkbox" className={styles.checkbox} id="bt" />
      <label htmlFor="bt">Bluetooth</label>
      <br />
      <input type="checkbox" className={styles.checkbox} id="wifi" />
      <label htmlFor="wifi">Wi-Fi</label>
      <br />
      <input type="checkbox" className={styles.checkbox} id="usb" />
      <label htmlFor="usb">USB</label>
      <br />
      <input type="checkbox" className={styles.checkbox} id="HDMI" />
      <label htmlFor="HDMI">HDMI</label>
      <br />
      <input type="checkbox" className={styles.checkbox} id="ethernet" />
      <label htmlFor="ethernet">Ethernet</label>
    </>
  );
}

function Features() {
  const [didClick, setDidClick] = useState(false);
  if (didClick === true) {
    return (
      <>
        <div
          className={styles.card}
          style={{ height: "100px" }}
          onClick={() => setDidClick(!didClick)}
        >
          <div className={styles.container}>
            <h4>
              <strong>Features</strong>
            </h4>
          </div>
        </div>
        <div className={styles.card} style={{ height: "500px" }}>
          <div className={styles.container}>
            <h4>
              <ResolutionList />
              <br />
              <TVOSList />
              <br />
              <MountTypeList />
              <br />
              <ConnectivityTechList />
            </h4>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={styles.card}
          style={{ height: "330px" }}
          onClick={() => setDidClick(!didClick)}
        >
          <div className={styles.container}>
            <h4>
              <strong>Features</strong>
            </h4>
            <p>
              <em>Click to see more</em>
            </p>
            <Image
              src="/features.png"
              alt="tv-features"
              height={200}
              width={330}
              style={{ paddingLeft: "30px" }}
            />
          </div>
        </div>
      </>
    );
  }
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
