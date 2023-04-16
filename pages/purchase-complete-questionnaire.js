import GlobalLayout from "../components/GlobalLayout";
import UniversalHeader from "../components/UniversalHeader";
import { useEffect } from "react";
import { runFireworks } from "../lib/utils";

const PurchaseComplete = () => {
  useEffect(() => {
    runFireworks();
  }, []);
  return (
    <GlobalLayout contactForm={true}>
      <UniversalHeader
        title="Purchase Completed."
        btn={false}
        subTitle="Thank you. Your transaction has been completed, and a receipt for your purchase has been emailed to you."
      />

      <div className="container py-5 text-center">
        <h2
          className="font-weight-normal text-6 mb-3"
          style={{ textTransform: "uppercase" }}
        >
          <b> Whats Next?</b>
        </h2>
        <h4>
          Our onboarding email has been sent to you. The next step is to
          complete the questionnaire then we will get started on your script and
          your project manager will be in touch with you throughout the process.
        </h4>

        <a
          className="btn btn-primary text-5 mb-3"
          href="https://explaino.pro/Explaino-Questionnaire-INSERT-PROJECT-NAME-HERE.docx"
          target="_blank"
        >
          <b>Downlaod Questionnaire</b>
        </a>
        <br />
        <p className="text-danger">
          You can download the questionnaire from this page and we also attached
          the questionnaire at the bottom of the onboarding email.
        </p>
      </div>
    </GlobalLayout>
  );
};

export default PurchaseComplete;
