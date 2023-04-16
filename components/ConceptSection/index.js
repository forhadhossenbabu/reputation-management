import Link from "next/link";

export default function ConceptSection() {
  return (
    <section
      className="main_apple_background section-concept section-no-border section-dark section-angled section-angled-reverse m-0 mb-0"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem 0",
      }}
    >
      <div className="section-angled-layer-bottom" />
      <div className="container pt-5 mt-5">
        <div className="row align-items-center pt-3">
          <div className="col-lg-5 mb-5">
            <h3 className="font-weight-bold text-10 line-height-5">
              NEED QUALITY VIDEO PRODUCTION AT AN AFFORDABLE PRICE?
            </h3>
            <p className="text-5">
              <b>
                Find a Better Price and We Will Beat It By 15% at the Same Level
                of Quality
              </b>
            </p>
            <Link href="/#Packages">
              <a className="btn btn-modern text-3 btn-primary">
                Get Started Now
              </a>
            </Link>
            {/* <button
              onClick={async () => {
                const responses = await sendEmail(
                  "fhossen@idare.io",
                  "Dylan Sigley"
                );
                console.log(responses);
              }}
            >
              Send Email
            </button> */}
          </div>
          <div className="col-lg-6 offset-lg-1 mb-5">
            <div
              className="position-relative border-width-5 border-color-light clearfix border border-radius"
              style={{ minHeight: "0px" }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/759651834?h=c54b19e5b6&color=c9ff23&title=0&byline=0&portrait=0"
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="Best-Communication-Tool.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
