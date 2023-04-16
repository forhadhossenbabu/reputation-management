import { Fragment } from "react";
import MiniProcess from "./MiniProcess";
import Link from "next/link";

const OurProcess = () => {
  return (
    <Fragment>
      <section id="Process" className="mt-5">
        <div className="container">
          <div className="heading heading-border heading-middle-border heading-middle-border-center mb-5">
            <h1 className="font-weight-bold">OUR SIMPLE PROCESS</h1>
          </div>
    <p class="text-center text-5 mt-2">Once you purchase your desired package it will take you to our questionnaire page where you can download your questionnaire.</p>
          <div className="process process-vertical">
            <div className="process-step appear-animation animated fadeInUpShorter appear-animation-visible">
              <div className="process-step-circle">
                <strong className="process-step-circle-content">1</strong>
              </div>
              <div className="process-step-content">
                <h4 className="mb-1 text-4 font-weight-bold">Questionnaire</h4>
                <p className="mb-0">
                  We will gather as much information as we can through our
                  questionnaire, any content you provide, and a kick-off call
                  with your project manager. Don’t be shy, book a free discovery
                  call with us today!
                </p>
              </div>
            </div>

            <div className="process-step appear-animation animated fadeInUpShorter appear-animation-visible">
              <div className="process-step-circle">
                <strong className="process-step-circle-content">2</strong>
              </div>
              <div className="process-step-content">
                <h4 className="mb-1 text-4 font-weight-bold">
                  Scripting (3-5 days)
                </h4>
                <p className="mb-0">
                  You will decide on your own script or our expert copywriters
                  will produce a potent script that communicates your message
                  perfectly.
                </p>
              </div>
            </div>
            <div className="process-step appear-animation animated fadeInUpShorter appear-animation-visible">
              <div className="process-step-circle">
                <strong className="process-step-circle-content">3</strong>
              </div>
              <div className="process-step-content">
                <h4 className="mb-1 text-4 font-weight-bold">
                  Voiceover (3-5 days)
                </h4>
                <p className="mb-0">
                  It's time to choose the voiceover for your video. You will
                  choose between male or female voiceover artist options and any
                  accent you desire will be provided in this step then our
                  professional voice-over artists bring your script to life
                  grabbing your audience's attention.
                </p>
              </div>
            </div>
            <div className="process-step appear-animation animated fadeInUpShorter appear-animation-visible">
              <div className="process-step-circle">
                <strong className="process-step-circle-content">4</strong>
              </div>
              <div className="process-step-content">
                <h4 className="mb-1 text-4 font-weight-bold">
                  Animation (5-7 days)
                </h4>
                <p className="mb-0">
                  Now we bring the whole thing together through the magic of
                  animation and bam! We will reveal the style by delivering a
                  theme board including all the character styles and color
                  palettes. When you are all satisfied, Our veteran animators
                  vivify your voice over to resonate and engage your audience
                  for enhanced message absorption.
                </p>
              </div>
            </div>
            <div className="process-step appear-animation animated fadeInUpShorter appear-animation-visible">
              <div className="process-step-circle">
                <strong className="process-step-circle-content">5</strong>
              </div>
              <div className="process-step-content">
                <h4 className="mb-1 text-4 font-weight-bold">Delivery</h4>
                <p className="mb-0">
                  Say hello to your brand new marketing asset, a rendered
                  high-definition video file ready for you to use however and
                  where you like. Receive your custom animated video and ask for
                  eventual revisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MiniProcess />
    </Fragment>
  );
};

export default OurProcess;
