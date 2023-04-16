const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://explaino.pro";

  const transformedItem = {
    price_data: {
      currency: "usd",
      product_data: {
        images: [req.body.image],
        name: `${req.body.value.package} ${req.body.value.length} Seconds Video`,
      },
      unit_amount: req.body.value.price * 100,
    },
    description: req.body.features,
    quantity: 1,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [transformedItem],
    mode: "payment",
    success_url:
      redirectURL + "/purchase-complete-questionnaire?status=success",
    cancel_url: redirectURL + "?status=cancel",
    metadata: {
      images: req.body.image,
    },
  });

  res.json({ id: session.id, session });
}

export default CreateStripeSession;
