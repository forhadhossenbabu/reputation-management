import StanderdPackages from "./StanderdPackages";
import AdvancedPackages from "./AdvancedPackages";
import PremiumPackages from "./PremiumPackages";

const Pricing = ({ stripePromise }) => {
  return (
    <section className="py-5" id="Packages">
      <div className="mb-5 container">
        <div className="heading heading-border heading-middle-border heading-middle-border-center">
          <h1 className="font-weight-bold">OUR PACKAGES</h1>
        </div>
        <p className="text-center text-5 mt-2">
          Once you purchase your desired package it will take you to our questionnaire page where you can download your questionnaire. This drives production so we need you to complete this. Our team will handle the rest, making this as ‘Done-For-You’ as you like.
        </p>
      </div>
      <div className="top" />
      <div className="container mt-2">
        <div className="row">
          <StanderdPackages stripePromise={stripePromise} />
          <AdvancedPackages stripePromise={stripePromise} />
          <PremiumPackages stripePromise={stripePromise} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
