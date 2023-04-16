import { useState } from "react";
import Select from "react-select";
import AdvancedExample from "./Example";
import axios from "axios";

const options = [
  {
    value: { price: 1198, length: 30, package: "Explainer" },
    label: "30 Seconds $1,198.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 2396, length: 60, package: "Explainer" },
    label: "60 Seconds $2,396.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 3594, length: 90, package: "Explainer" },
    label: "90 Seconds $3,594.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 4792, length: 120, package: "Explainer" },
    label: "120 Seconds $4,792.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 5990, length: 150, package: "Explainer" },
    label: "150 Seconds $5,990.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 7188, length: 180, package: "Explainer" },
    label: "180 Seconds $7,188.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 8386, length: 210, package: "Explainer" },
    label: "210 Seconds $8,386.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 9584, length: 240, package: "Explainer" },
    label: "240 Seconds $9,584.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 10782, length: 270, package: "Explainer" },
    label: "270 Seconds $10,782.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 11980, length: 300, package: "Explainer" },
    label: "300 Seconds $11,980.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
];

const AdvancePackages = ({ stripePromise }) => {
  const [checkoutInfo, setCheckoutInfo] = useState(options[0]);
  return (
    <div className="col-lg-4 col-md-6">
      <div className="pricing-item">
        <div className="pricing-header">
          <h3 className="pricing-title">
            <b>Explainer</b>
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
            <AdvancedExample />
          </div>
          <ul className="list">
            <li className="active">​Music & SFX</li>
            <li className="active">​​2 X Revisions</li>
            <li className="active">​Project Advisor</li>
            <li className="">Custom Graphics</li>
            <li className="active">4+ Weeks Delivery</li>
            <li className="active">Engaging Animation</li>
            <li className="active">​Powerful Voice-Over</li>
            <li className="active">High Converting Script</li>
            <li className="">Premium Animation Team</li>
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

export default AdvancePackages;
