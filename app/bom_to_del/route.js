import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51Kv2S3SJMBnIhuo7iZ3paAmDthweFE9Qqop8C9tpQclh4lSCWxKBUCiB349UpHwI5yS9F9QLOPrQHKjD1i88D4p1004pOkrlMR"
);

export async function GET(req, res) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1M67lnSJMBnIhuo7Y3y8oID7",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://demo-five-ashy.vercel.app/success/",
    cancel_url: "http://demo-five-ashy.vercel.app/failure",
    submit_type: "book",
  });
  return NextResponse.redirect(session.url, 302);
}
