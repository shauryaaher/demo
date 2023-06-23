import Link from "next/link";
import styles from "../Redirect.module.scss";

export default function failure() {
  return (
    <>
      <div className={styles.container}>
        <center>
          <h1>
            There was an issue while processing the payment. Please try again.
          </h1>
        </center>
        <center>
          <Link href="/">Go to homepage</Link>
        </center>
      </div>
    </>
  );
}
