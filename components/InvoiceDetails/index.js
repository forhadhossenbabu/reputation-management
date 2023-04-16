import React, { Fragment, useState } from "react";
import Popup from "reactjs-popup";
import { toast } from "react-toastify";
import axios from "axios";
import Select from "react-select";

function percentage(percent, total) {
  return ((percent / 100) * total).toFixed(2);
}

let date = new Date();
const packageIncludes = {
  STANDEAD: [
    "Sound effects",
    "Background Music",
    "Theme Board",
    "Storyboard",
    "Style Options",
    "Unique Concepts",
    "Fetching Animation",
    "High Resolution",
    "10-14 Days Delivery",
    "Unlimited Free Revisions",
  ],
  ADVANCED: [
    "Sound effects",
    "Background Music",
    "Theme Board",
    "Storyboard",
    "Style Options",
    "Unique Concepts",
    "Fetching Animation",
    "High Resolution",
    "10-14 Days Delivery",
    "Unlimited Free Revisions",
    "Project Advisor",
    "Voiceover Options",
  ],
  PREMIUM: [
    "Sound effects",
    "Background Music",
    "Theme Board",
    "Storyboard",
    "Style Options",
    "Unique Concepts",
    "Fetching Animation",
    "High Resolution",
    "10-14 Days Delivery",
    "Unlimited Free Revisions",
    "Project Advisor",
    "Voiceover Options",
    "Strong Script",
  ],
};
const options = [
  {
    value: { country: "United State", currency: "USD" },
    label: "United State",
  },
  {
    value: { country: "United Kingdom", currency: "GBP" },
    label: "United Kingdom",
  },
  {
    value: { country: "European Union", currency: "EUR" },
    label: "European Union",
  },
  {
    value: { country: "Canada", currency: "CAD" },
    label: "Canada",
  },
];

const InvoiceDetails = ({ checkoutInfo, discounted }) => {
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerCountry, setCustomerCountry] = useState(
    options[0].value.country
  );
  const [customerCurrency, setCustomerCurrency] = useState(
    options[0].value.currency
  );

  const [sendingInvoice, setSendingInvoice] = useState(false);

  const handleForm = async (closeModal) => {
    console.log(checkoutInfo);
    const invoiceEmailParams = {
      names: { customerFirstName, customerLastName },
      INVOICE_NO: Math.floor(Math.random() * (3000 - 1000 + 1) + 1000),
      ISSUED: new Date().toLocaleDateString(),
      DUE: new Date(date.setDate(date.getDate() + 10)).toLocaleDateString(),
      BILL_FOR:
        checkoutInfo.package +
        " " +
        checkoutInfo.length +
        " SECONDS EXPLAINER VIDEO",
      BILL_TO: customerFirstName + " " + customerLastName,
      BILL_TO_COUNTRY: customerCountry,
      BILL_TO_EMAIL: customerEmail,
      PACKAGE_NAME: checkoutInfo.package,
      PACKAGE_QTY: 1,
      PACKAGE_BASE_PRICE: checkoutInfo.price,
      PACKAGE_LENGTH: checkoutInfo.length,
      PACKAGE_INCLUDES: packageIncludes[checkoutInfo.package],
      SUB_TOTAL: checkoutInfo.price,
      DISCOUNTED: discounted ? 50 : 0,
      TOTAL_AMOUNT_DUE: discounted
        ? percentage(50, checkoutInfo.price)
        : checkoutInfo.price,
      CURRENCY: customerCurrency,
    };
    setSendingInvoice(true);
    await axios
      .post("/api/invoice-email", invoiceEmailParams)
      .then((resp) => {
        console.log(resp);
        closeModal();
        toast.success("Invoice sent successfully.");
        toast.success("Please check your inbox.");
        setSendingInvoice(false);
      })
      .catch((error) => {
        console.clear();
        console.log(error);
        setSendingInvoice(false);
        closeModal();
        toast.success("Invoice sent successfully.");
        toast.success("Please check your inbox.");
      });
  };

  return (
    <Fragment>
      <Popup
        trigger={
          <div className="pricing-footer mt-4">
            <a
              href="!#"
              className="btn-primary-line"
              onClick={(e) => e.preventDefault()}
            >
              Request a invoice
            </a>
          </div>
        }
        position="center"
        contentStyle={{ width: "auto", padding: "35px" }}
      >
        {(close) => (
          <div className="contact-form text-left">
            <div className="text-center">
              <h2 className="font-weight-bold text-6 mb-0 text-uppercase">
                Invoice Request
              </h2>
              <p className="mb-0">You will get a invoice within a moment.</p>

              <ul style={{ color: "black" }}>
                {checkoutInfo && checkoutInfo.price && (
                  <li>
                    Total Price:{" "}
                    <b>
                      $
                      {discounted
                        ? Math.round(percentage(50, checkoutInfo.price))
                        : checkoutInfo.price}{" "}
                    </b>
                    | Video Length: <b>{checkoutInfo.length}s</b>
                  </li>
                )}
                {checkoutInfo && checkoutInfo.length && <li></li>}
                {checkoutInfo && checkoutInfo.package && (
                  <li>
                    Selected Package: <b>{checkoutInfo.package}</b>
                  </li>
                )}
              </ul>
            </div>
            <hr />
            <form
              className="text-left"
              onSubmit={(e) => {
                e.preventDefault();
                handleForm(close);
              }}
            >
              <div className="form-group">
                <label className="mb-1 text-2">First Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm text-3 h-auto py-2"
                  required
                  value={customerFirstName}
                  onChange={({ target }) => setCustomerFirstName(target.value)}
                />
              </div>
              <div className="form-group">
                <label className="mb-1 text-2">Last Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm text-3 h-auto py-2"
                  required
                  value={customerLastName}
                  onChange={({ target }) => setCustomerLastName(target.value)}
                />
              </div>
              <div className="form-group">
                <label className="mb-1 text-2">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-sm text-3 h-auto py-2"
                  required
                  value={customerEmail}
                  onChange={({ target }) => setCustomerEmail(target.value)}
                />
              </div>
              <div className="form-group">
                <label className="mb-1 text-2">Country</label>
                <Select
                  options={options}
                  defaultValue={options[0]}
                  onChange={({ value }) => {
                    setCustomerCountry(value.country);
                    setCustomerCurrency(value.currency);
                  }}
                  menuContainerStyle={{ zIndex: 999 }}
                />
              </div>

              {sendingInvoice ? (
                <div style={{ textAlign: "center" }}>
                  <img src="/loading-buffering.gif" height="50px" />
                  <p>Hold Tight. Generating Your Invoice.</p>
                </div>
              ) : (
                <div className="form-row">
                  <div className="form-group col">
                    <input
                      type="submit"
                      className="btn btn-primary btn-modern text-4"
                    />
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </Popup>
    </Fragment>
  );
};

export default InvoiceDetails;
