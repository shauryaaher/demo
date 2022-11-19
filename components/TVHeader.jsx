import styles from "../styles/TV.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
        <button
          className={styles.buy}
          onClick={() =>
            window.location.replace(
              "https://shauryaaher-expert-memory-5p6j44rjvrf4gp9-3000.preview.app.github.dev/api/stripe/"
            )
          }
        >
          Buy
        </button>
      </nav>
    </header>
  );
}
