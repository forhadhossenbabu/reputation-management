import { Fragment } from "react";
import Link from "next/link";

const PricePackageCTA = ({ title, sub }) => {
  return (
    <div className="text-center">
      <div className="container py-5">
        <div className="mb-0">
          <h2 className="font-weight-normal text-6 mb-3">
            <b>SPEND YOUR MARKETING DOLLARS IN THE RIGHT PLACE</b>
          </h2>
          <p className="text-4 m-0 mb-4">
            Explainer videos are perfect if you want to communicate your core message in a way that resonates and engages your audience's attention, increasing your website's conversion rate and Explain, Inform, Train, and Advertise Effortlessly without boring text or tired presentations. It also helps you improve your SEO ranking and lower your bounce rate. You can put it on your website, social media, email campaigns ad infinitum! Fancy Agencies charge up to $5000-$10,000/min for a lesser quality. Look at our pricing and quality below. So, If you need a consultation before placing an order feel free to book a call with our team. Always Buy With confidence!! We will provide revisions until you are satisfied!
          </p>
          <Link href="/#Packages" style={{ marginTop: "15px" }}>
            <a className="btn btn-modern text-3 btn-primary">
              Tired Of Waiting? View Our Packages & Prices
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricePackageCTA;
