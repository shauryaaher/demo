const stripe = require("stripe")(
  "sk_test_51Kv2S3SJMBnIhuo7iZ3paAmDthweFE9Qqop8C9tpQclh4lSCWxKBUCiB349UpHwI5yS9F9QLOPrQHKjD1i88D4p1004pOkrlMR"
);

export default async function handlePayments(req, res) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1MJDcSSJMBnIhuo7KD29vYe6",
        adjustable_quantity: { enabled: true, minimum: 1, maximum: 3 },
        quantity: 1
      },
    ],
    submit_type: "book",
    mode: "payment",
    allow_promotion_codes: true,
    success_url: "https://demo-five-ashy.vercel.app/success",
    cancel_url: "http://demo-five-ashy.vercel.app/failure",
  });
  res.redirect(301, session.url);
}
