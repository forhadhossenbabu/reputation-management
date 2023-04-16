import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import StanderdExample from "./Example";
import InvoiceDetails from "../../InvoiceDetails";

const options = [
  {
    value: { price: 598, length: 30, package: "Whiteboard" },
    label: "30 Seconds $598.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 1196, length: 60, package: "Whiteboard" },
    label: "60 Seconds $1,196.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 1794, length: 90, package: "Whiteboard" },
    label: "90 Seconds $1,794.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 2392, length: 120, package: "Whiteboard" },
    label: "120 Seconds $2,392.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 2990, length: 150, package: "Whiteboard" },
    label: "150 Seconds $2,990.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 3588, length: 180, package: "Whiteboard" },
    label: "180 Seconds $3,588.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 4187, length: 210, package: "Whiteboard" },
    label: "210 Seconds $4,187.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 4786, length: 240, package: "Whiteboard" },
    label: "240 Seconds $4,786.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 5385, length: 270, package: "Whiteboard" },
    label: "270 Seconds $5,385.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 5984, length: 300, package: "Whiteboard" },
    label: "300 Seconds $5,984.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
];

const StanderdPackages = ({ stripePromise }) => {
  const [checkoutInfo, setCheckoutInfo] = useState(options[0]);

  return (
    <div className="col-lg-4 col-md-6">
      <div className="pricing-item">
        <div className="pricing-header">
          <h3 className="pricing-title">
            <b>Whiteboard</b>
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
            <StanderdExample />
          </div>
          <ul className="list">
            <li className="active">​Music & SFX</li>
            <li className="active">​​2 X Revisions</li>
            <li className="active">​Project Advisor</li>
            <li className="">Custom Graphics</li>
            <li className="active">3+ Weeks Delivery</li>
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

export default StanderdPackages;
