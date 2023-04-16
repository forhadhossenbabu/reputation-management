import { useState } from "react";
import Select from "react-select";
import PremiumExample from "./Example";
import axios from "axios";

const options = [
  {
    value: { price: 1998, length: 30, package: "Premium" },
    label: "30 Seconds $1,998.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 3996, length: 60, package: "Premium" },
    label: "60 Seconds $3,996.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 5994, length: 90, package: "Premium" },
    label: "90 Seconds $5,994.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 7992, length: 120, package: "Premium" },
    label: "120 Seconds $7,992.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 9990, length: 150, package: "Premium" },
    label: "150 Seconds $9,990.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 11988, length: 180, package: "Premium" },
    label: "180 Seconds $11,988.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 13986, length: 210, package: "Premium" },
    label: "210 Seconds $13,986.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 15984, length: 240, package: "Premium" },
    label: "240 Seconds $15,984.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 17982, length: 270, package: "Premium" },
    label: "270 Seconds $17,982.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 19980, length: 300, package: "Premium" },
    label: "300 Seconds $19,980.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
];

const PremiumPackages = ({ stripePromise }) => {
  const [checkoutInfo, setCheckoutInfo] = useState(options[0]);
  return (
    <div className="col-lg-4 col-md-6">
      <div className="pricing-item">
        <div className="pricing-header">
          <h3 className="pricing-title">
            <b>PREMIUM</b>
            <br />
            <span
              style={{
                color: "#000",
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              👇 Example Below 👇
            </span>
          </h3>
        </div>
        <div className="pricing-body">
          <div className="price-wrapper">
            <PremiumExample />
          </div>
          <ul className="list">
            <li className="active">​Music & SFX</li>
            <li className="active">​​2 X Revisions</li>
            <li className="active">​Project Advisor</li>
            <li className="active">Custom Graphics</li>
            <li className="active">8+ Weeks Delivery</li>
            <li className="active">Engaging Animation</li>
            <li className="active">​Powerful Voice-Over</li>
            <li className="active">High Converting Script</li>
            <li className="active">Premium Animation Team</li>
          </ul>
        </div>
        <div style={{ width: "80%", margin: "auto" }}>
          <Select
            options={options}
            defaultValue={options[0]}
            onChange={(data) => {
              setCheckoutInfo(data);
            }}
            menuContainerStyle={{ zIndex: 999 }}
          />
        </div>
        <div className="pricing-footer mt-4 mb-4">
          <div className="form-row">
            <div className="form-group col">
              <button
                className="btn btn-primary btn-modern text-4"
                onClick={async () => {
                  const stripe = await stripePromise;
                  const checkoutSession = await axios.post(
                    "/api/create-stripe-session",
                    {
                      ...checkoutInfo,
                      features: `Once you complete the payment it will take you to our questionnaire page where you can download your questionnaire. This drives production so we need you to complete this. Our team will handle the rest, making this as ‘Done-For-You’ as you like. We will be ecstatic if we could help you to become the best you can be in your field by crafting an explainer video that even a child can understand and getting people to sign up, request a demo, and contact you.`,
                    }
                  );
                  const result = await stripe.redirectToCheckout({
                    sessionId: checkoutSession.data.id,
                  });
                  if (result.error) {
                    alert(result.error.message);
                  }
                }}
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPackages;
