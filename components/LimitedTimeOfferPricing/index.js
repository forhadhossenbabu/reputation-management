import StanderdPackages from "./StanderdPackages";
import AdvancedPackages from "./AdvancedPackages";
import PremiumPackages from "./PremiumPackages";

const Pricing = ({ publishableKey, stripePromise }) => {
  return (
    <section className="py-5" id="OfferPackages">
      <div className="mb-5 container">
        <div className="heading heading-border heading-middle-border heading-middle-border-center">
          <h1 className="font-weight-normal">OUR PACKAGES</h1>
        </div>
        <p className="text-center text-5 mt-2">
          Select Your Desire Package Below
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
