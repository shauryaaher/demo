const stripe = require("stripe")(
  "sk_test_51Kv2S3SJMBnIhuo7JdDr3etypqNXsCHjWHospB7HgaNmkWi7gX9Y2w4guVEfhqitgpA1CUwpspQenhD2tFPXBz0z00IB8pNHBM"
);

export default async function handlePayment(req, res) {
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
  });
  res.redirect(session.url, 301);
}
