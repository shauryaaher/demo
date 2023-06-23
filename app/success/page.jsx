import Link from "next/link";
import styles from "../Redirect.module.scss";

export default function success() {
  return (
    <>
      <div className={styles.container}>
        <center>
          <h1>
            You have successfully booked your flight. You will soon receive an
            email with your ticket.
          </h1>
        </center>
        <center>
          <Link href="/">Go to homepage</Link>
        </center>
      </div>
    </>
  );
}
