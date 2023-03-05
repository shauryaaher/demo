import {
  Elements,
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Kv2S3SJMBnIhuo7ZOG6xqKBXOmNNl6DEJVywiIkMeB6mO6ssxTfelcgcMwmulBWX2ERHodVgjNJVb0B6j9z9nzN00hjxXdBxE"
);

function Stripe() {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
  useEffect(() => {
    if (stripe) {
      const payment_request = stripe.paymentRequest({
        country: "IN",
        currency: "inr",
        total: {
          label: "Flight",
          amount: 99999900,
        },
      });
      payment_request.canMakePayment().then((result) => {
        if (result === true) {
          setPaymentRequest(payment_request);
        }
      });
    }
  }, [stripe]);
  if (paymentRequest) {
    return <PaymentRequestButtonElement options={{ paymentRequest }} />;
  }
  
    
}

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <Stripe />
    </Elements>
  );
}
