import { useState } from "react";
import Select from "react-select";
// import InvoiceDetails from "../../InvoiceDetails";
import AdvancedExample from "./Example";
import axios from "axios";

const options = [
  {
    value: { price: 599, length: 30, package: "Explainer" },
    label: "30 Seconds $599.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 1198, length: 60, package: "Explainer" },
    label: "60 Seconds $1,198.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 1797, length: 90, package: "Explainer" },
    label: "90 Seconds $1,797.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 2396, length: 120, package: "Explainer" },
    label: "120 Seconds $2,396.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 2995, length: 150, package: "Explainer" },
    label: "150 Seconds $2,995.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 3594, length: 180, package: "Explainer" },
    label: "180 Seconds $3,594.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 4193, length: 210, package: "Explainer" },
    label: "210 Seconds $4,193.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 4792, length: 240, package: "Explainer" },
    label: "240 Seconds $4,792.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 5391, length: 270, package: "Explainer" },
    label: "270 Seconds $5,391.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  {
    value: { price: 5990, length: 300, package: "Explainer" },
    label: "300 Seconds $5,990.00 USD",
    image: "https://explaino.pro/8.55.54AM.png",
  },
  // {
  //   value: { price: 1, length: 300, package: "Explainer" },
  //   label: "300 Seconds $5,990.00 USD",
  //   image: "https://explaino.pro/8.55.54AM.png",
  // },
];

const AdvancedPackages = ({ publishableKey, stripePromise }) => {
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
        <div
          className="main_apple_background"
          style={{
            textAlign: "center",
            marginBottom: "30px",
            padding: "15px 15px 1px 15px",
          }}
        >
          <ul>
            <li>
              <h3 style={{ margin: "0 0 10px 0px", color: "#fff" }}>
                <b>30 Seconds - $599</b>
              </h3>{" "}
            </li>
            <li>
              <h5
                style={{
                  margin: "0 0 10px 0px",
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                Usually <s>$1,198</s>
              </h5>
            </li>
            <li>
              <h6
                style={{
                  margin: "0",
                  color: "red",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                You Save $599
              </h6>
            </li>
          </ul>
        </div>
        <h3 className="text-center mb-3">
          <b>50% Discount Sale</b>
        </h3>
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
        {/* <InvoiceDetails checkoutInfo={checkoutInfo.value} discounted={true} /> */}
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

export default AdvancedPackages;
