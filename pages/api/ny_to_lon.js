const stripe = require("stripe")(
  "sk_test_51Kv2S3SJMBnIhuo7JdDr3etypqNXsCHjWHospB7HgaNmkWi7gX9Y2w4guVEfhqitgpA1CUwpspQenhD2tFPXBz0z00IB8pNHBM"
);

export default async function handlePayments(req, res) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1M68A1SJMBnIhuo7Rp4JJrRR",
        adjustable_quantity: { enabled: true, minimum: 1, maximum: 9 },
        quantity: 1,
      },
    ],
    mode: "payment",
    allow_promotion_codes: true,
    success_url: "https://demo-five-ashy.vercel.app/success",
    cancel_url: "http://demo-five-ashy.vercel.app/failure",
  });
  res.redirect(301, session.url);
}
