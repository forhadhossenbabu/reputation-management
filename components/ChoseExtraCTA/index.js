import Link from "next/link";
const ChoseExtraCTA = () => {
  return (
    <section className="mini__process py-5">
      <div className="container">
        <div className="col-12">
          <div className="call-to-action-content">
            <div className="heading heading-border heading-middle-border heading-middle-border-center">
              <h1 className="font-weight-bold">SCHEDULE A 15 MINUTES CALL</h1>
            </div>
            <p
              className="mb-4"
              style={{ fontSize: "18px", color: "#fff", textAlign: "center" }}
            >
              Explainer videos are perfect if you want to communicate your core message in a way that resonates and engages your audience's attention, increasing your website's conversion rate and Explain, Inform, Train, and Advertise Effortlessly without boring text or tired presentations. It also helps you improve your SEO ranking and lower your bounce rate. You can put it on your website, social media, email campaigns ad infinitum! Fancy Agencies charge up to $5000-$10,000/min for a lesser quality. Look at our pricing and quality below. So, If you need a consultation before placing an order feel free to book a call with our team. Always Buy With confidence!! We will provide revisions until you are satisfied!
            </p>
          </div>
        </div>
        <div className="col-12 text-center">
          <div className="call-to-action-btn">
            <Link href="/video-strategy-session">
              <a className="btn btn-modern text-3 btn-primary">
                SELECT YOUR PERFECT TIME
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoseExtraCTA;
