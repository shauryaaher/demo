import Link from "next/link";

export default function failure() {
  return (
    <>
      <center>
        <h1>There was an issue while processing the payment. Please try again.</h1>
      </center>
      <center>
        <Link href="/">Go to homepage</Link>
      </center>
    </>
  );
}
