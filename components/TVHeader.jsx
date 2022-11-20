import styles from "../styles/TV.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.default} style={{ height: "70px" }}>
      <nav className={styles.navigator}>
        <Image
          className={styles.logoo}
          src="/emirates.png"
          height={170}
          width={120}
          alt="Logo"
        />

        <ul className={styles.nav_links}></ul>
      </nav>
    </header>
  );
}
