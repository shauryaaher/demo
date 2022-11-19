const stripe = require("stripe")(
  "sk_test_51Kv2S3SJMBnIhuo7JdDr3etypqNXsCHjWHospB7HgaNmkWi7gX9Y2w4guVEfhqitgpA1CUwpspQenhD2tFPXBz0z00IB8pNHBM"
);

export default async function handlePayments(req, res) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1M5q45SJMBnIhuo7pKLB8cyX",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url:
      "https://demo-five-ashy.vercel.app/",
    cancel_url:
      "https://demo-five-ashy.vercel.app/TV",
  });
  res.redirect(302, session.url);
}
