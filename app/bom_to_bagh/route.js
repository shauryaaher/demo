import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51Kv2S3SJMBnIhuo7iZ3paAmDthweFE9Qqop8C9tpQclh4lSCWxKBUCiB349UpHwI5yS9F9QLOPrQHKjD1i88D4p1004pOkrlMR"
);

export async function GET(req, res) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1NecJRSJMBnIhuo72JdffXoQ",
        quantity: 1,
        adjustable_quantity: { enabled: true, minimum: 1, maximum: 7 },
      },
    ],
    allow_promotion_codes: true,
    submit_type: "book",
    mode: "payment",
    success_url: "https://demo-five-ashy.vercel.app/success",
    cancel_url: "https://demo-five-ashy.vercel.app/failure",
  });
  return NextResponse.redirect(session.url, 302);
}
