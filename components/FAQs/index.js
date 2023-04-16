import { Fragment } from "react";
import MiniProcess from "../OurProcess/MiniProcess";

const FAQs = () => {
  return (
    <Fragment>
      <div id="FAQS" className="container py-2 mt-5">
        <div className="row">
          <div className="col">
            <h3 className="pt-3 mb-3">Q: How Do I Get Started?</h3>
            <p className="text-left">
              Once you know which style and length you'd like to start with,
              click the 'Checkout Now' button of your selection. You will then
              be directed to our payment processing page to use Visa,
              Mastercard, or American Express. After purchase you will be asked
              to download our production guiding questionnaire, email that to
              hello@explino.pro and off we go!
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h3 className="pt-3 mb-3">Q: How Does It Work?</h3>
            <p className="text-left">
              Once you've placed your order and completed our questionnaire
              we'll move through script, voice-over, storyboard and animation in
              an average period of 2 or 8 weeks depending on the package. We'll
              assign a project manager to your video, who will guide you through
              the process in a ‘done-for-you’ manner for explainer/whiteboard
              packages and a 'done-with-you' manner for premium videos.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h3 className="pt-3 mb-3">
              Q: Is It Limited To One Video Per Customer?
            </h3>
            <p className="text-left">
              No, you can order as many as you like. You can also combine
              multiple orders to get a longer video, so if you order 4 X 30
              second packages, you may produce 1 X 120 second video or 4 x 30
              second videos for example. Just let us know in the questionnaire.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h3 className="pt-3 mb-3">Q: Can I Get A Longer Video?</h3>
            <p className="text-left">
              Yes, you can order multiple 30 second packages, and can combine
              them into 1 video OR spread those seconds across multiple videos.
              Just be sure to mention it in the questionnaire how your would
              like to use your seconds e.g one long video or multiple short
              videos etc.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h3 className="pt-3 mb-3">Q: What If I Don't Like The Video?</h3>
            <p className="text-left">
              Once we deliver your first video preview, you will be able to make
              2 rounds of animation changes free of charge. If after that you
              are still unhappy you can request a refund.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h3 className="pt-3 mb-3">
              Q: How Much Content Can Fit In 30 Seconds?
            </h3>
            <p className="text-left">
              A 30 second script is 75 words, so we can usually fit the
              following sections: Problem Definition, Solution, Call To Action.
              But don’t worry, if you want to make your video longer during
              production, we can expand the length and budget with your
              approval.
            </p>
          </div>
        </div>
        <hr />
        <div className="row mb-4">
          <div className="col">
            <h3 className="pt-3 mb-3">Q: I Want To Talk To Someone First!</h3>
            <p className="text-left">
              Of course! Email at forhad@explaino.pro and we will answer any
              questions you may have or Send direct message from our website. We
              are available 24/6. You can fill out our contact form and someone
              from our team will reach you as soon as possible.
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <h3 className="pt-3 mb-3">
              Q: Do you provide other languages besides English?
            </h3>
            <p className="text-left">
              Yes, we have voice over artists from all over the world so we can
              provide a wide range of languages and accents. We work with
              Spanish, Russian, German and French voiceover artists. Please
              contact us about that and We will guide you from there.
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <h3 className="pt-3 mb-3">
              Q: I have a limited budget. Can you still make an awesome video
              for me?
            </h3>
            <p className="text-left">
              Don't worry. Feel free to share your budget with us and we will do
              our best to create an awesome explainer video that fit's your
              budget. Contact us.
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <h3 className="pt-3 mb-3">
              Q: I need my video faster can you help me?
            </h3>
            <p className="text-left">
              We can produce a video in as little as 10 days for a small fee, so
              you don't have to miss that deadline looming.
            </p>
          </div>
        </div>
      </div>
      <MiniProcess />
    </Fragment>
  );
};

export default FAQs;
