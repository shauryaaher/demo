import Link from "next/link";

export default function success() {
  return (
    <>
      <center>
        <h1>
          You have successfully booked your flight. You will soon receive an
          email with your ticket.
        </h1>
      </center>
      <center>
        <Link href="/">Go to homepage</Link>
      </center>
    </>
  );
}
