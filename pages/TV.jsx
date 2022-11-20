import styles from "../styles/TV.module.scss";
import Image from "next/image";
import { lazy, useState, Suspense } from "react";
import Head from "next/head";
const Header = lazy(() => import("../components/TVHeader.jsx"));

function Price() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <h4>
            <strong>Price</strong>
          </h4>
          <p>
            <em>INR. 100,000.</em>
          </p>
          <Image
            style={{
              paddingBottom: "130px",
              paddingLeft: "40px",
              paddingRight: "5px",
            }}
            src="/money.png"
            alt="money-icon"
            height={335}
            width={310}
          />
        </div>
      </div>
    </>
  );
}

function SizeBoxes() {
  return (
    <>
      <input type="checkbox" className={styles.checkbox} id="120" />
      <label htmlFor="120">120-inch</label>
      <br />
      <input type="checkbox" className={styles.checkbox} id="150" />
      <label htmlFor="150">150-inch</label>
      <br />
    </>
  );
}

function Size() {
  const [clicked, setClicked] = useState(false);
  if (clicked === false) {
    return (
      <>
        <div className={styles.card} onClick={() => setClicked(!clicked)}>
          <div className={styles.container}>
            <h4>
              <strong>Sizes</strong>
            </h4>
            <p>
              <em>Starting at 30-inches. Click to see more.</em>
            </p>
            <Image
              style={{ paddingRight: "30px" }}
              src="/tv-dimensions.jpg"
              alt="television-dimensions"
              height={176}
              width={390}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={styles.card}
          onClick={() => setClicked(!clicked)}
          style={{ height: "60px" }}
        >
          <div className={styles.container}>
            <h4>
              <strong>Sizes</strong>
            </h4>
          </div>
        </div>
        <div className={styles.card} style={{height: "100px"}}>
          <div className={styles.container}>
            <SizeBoxes />
          </div>
        </div>
      </>
    );
  }
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
        <div className={styles.card} onClick={() => setDidClick(!didClick)}>
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
    <>
      <Head>
        <title>Neptune</title>
      </Head>
      <div className={styles.main}>
        <Suspense fallback={<span>Loading...</span>}>
          <Header />
        </Suspense>
        <Price />
        <Size />
        <Features />
        <br />
      </div>
    </>
  );
}
