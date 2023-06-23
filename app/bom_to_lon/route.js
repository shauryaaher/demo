const stripe = require("stripe")(
    "sk_test_51Kv2S3SJMBnIhuo7iZ3paAmDthweFE9Qqop8C9tpQclh4lSCWxKBUCiB349UpHwI5yS9F9QLOPrQHKjD1i88D4p1004pOkrlMR"
  );
  
  export default async function GET(req, res) {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1M687cSJMBnIhuo7PF0tCqAE",
          quantity: 1,
          adjustable_quantity: { enabled: true, minimum: 1, maximum: 6 },
        },
      ],
      allow_promotion_codes: true,
      submit_type: "book",
      mode: "payment",
      success_url: "https://demo-five-ashy.vercel.app/success",
      cancel_url: "http://demo-five-ashy.vercel.app/failure",
    });
    res.redirect(301, session.url);
  }
  