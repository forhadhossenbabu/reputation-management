import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="container py-5" id="TESTMONIALS">
      <div className="heading heading-border heading-middle-border heading-middle-border-center">
        <h1 className="font-weight-bold">WHAT OUR CLIENTS SAY</h1>
      </div>
      <div className="testimonial testimonial-style-3 mt-5">
        <blockquote>
          <p className="mb-0" style={{ color: "#fff" }}>
            Explaino team brought everything I envisioned in my head to life and
            more! I was very impressed with the constant communication back and
            forth. And at no time did I feel like I was left "hung out to dry".
            Not only did I feel the video I got went above expectations, They
            came in significantly cheaper than most other companies and with
            better quality too.
          </p>
        </blockquote>
        <div className="testimonial-arrow-down" />
        <div className="testimonial-author">
          <div className="testimonial-author-thumbnail">
            <img
              src="/testimonials/1638456527922.jpg"
              className="img-fluid rounded-circle"
              alt="Client Image"
            />
          </div>
          <p>
            <strong className="font-weight-extra-bold">Thomas Gut</strong>
            <span>Founder at Gründer Gut Werbung</span>
          </p>
        </div>
      </div>
      <div className="testimonial testimonial-style-3">
        <blockquote>
          <p className="mb-0" style={{ color: "#fff" }}>
            Highly recommended! I found Explaino when i was looking for a
            company, who could help me out with an explainer video. The first
            contact was very smooth, direct and friendly. We discussed the frame
            of the Project and Forhad's team started to work directly
            afterwards. The Communication was very good, i got answers so fast.
            When it comes to the Video Animation their team took my ideas and
            made them even better with smooth animations. Every Revision was
            directly fulfilled (And it was only 2 details). The result was so
            cool, that we had a big time watching the result as a whole team. I
            would highly recommend to work with Forhad and will definietly buy
            again for more Projects!
          </p>
        </blockquote>
        <div className="testimonial-arrow-down" />
        <div className="testimonial-author">
          <div className="testimonial-author-thumbnail">
            <img
              src="/testimonials/1609234497549.jpg"
              className="img-fluid rounded-circle"
              alt="Client Image"
            />
          </div>
          <p>
            <strong className="font-weight-extra-bold">Johannes Peter</strong>
            <span>Founder & CEO at TomoDomo Coliving</span>
          </p>
        </div>
      </div>
      <div className="testimonial testimonial-style-3">
        <blockquote>
          <p className="mb-0" style={{ color: "#fff" }}>
            Forhad was extremely responsive, making the entire process smooth
            and easy! He took all of our feedback seriously and made all the
            adjustments we requested above and beyond our expectations. Let the
            quality of work speak for itself, because the finished project will
            exceed expectations and if not, it's possible to have changes made.
            It really goes beyond the point of excellent customer service. We
            love the result of our project and so does our team. We would
            definitely work with his team again if need be.
          </p>
        </blockquote>
        <div className="testimonial-arrow-down" />
        <div className="testimonial-author">
          <div className="testimonial-author-thumbnail">
            <img
              src="/testimonials/1516202438700.jpg"
              className="img-fluid rounded-circle"
              alt="Client Image"
            />
          </div>
          <p>
            <strong className="font-weight-extra-bold">Alfred Berger</strong>
            <span>Founder at Avintis SA</span>
          </p>
        </div>
      </div>
      {/* <div className="testimonial testimonial-style-4">
        <blockquote>
          <p className="mb-0">
            Thanks to the guys from AudiencyArmy we are able to offer users an
            outstanding video. In only 90 seconds the complexity of our platform
            is explained... It took only a few weeks to script, animate and
            finalize.
          </p>
        </blockquote>
        <div className="testimonial-arrow-down" />
        <div className="testimonial-author">
          <div className="testimonial-author-thumbnail">
            <img
              src="/testimonials/Marco-Neubert.jpeg"
              className="img-fluid rounded-circle"
              alt="Client Image"
            />
          </div>
          <p>
            <strong className="font-weight-extra-bold">
              Marco Neubert, Director
            </strong>
            <span>Football &amp; Stars</span>
          </p>
        </div>
      </div> */}
      {/* <div className="testimonial testimonial-style-4">
        <blockquote>
          <p className="mb-0">
            We were able to make edits and changes up until the last minute...
            The attention the guys paid to our project and the desired results
            was much appreciated. I can't wait to see what difference this will
            make for us.
          </p>
        </blockquote>
        <div className="testimonial-arrow-down" />
        <div className="testimonial-author">
          <div className="testimonial-author-thumbnail">
            <img
              src="/testimonials/Hana-Laurenzo.jpeg"
              className="img-fluid rounded-circle"
              alt="Client Image"
            />
          </div>
          <p>
            <strong className="font-weight-extra-bold">Hana Laurenzo</strong>
            <span>CEO &amp; Teneo Linguistics</span>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Testimonials;
