import Link from "next/link";

const Research = ({ cta }) => {
  return (
    <section className="main_apple_background">
      <div className="container py-5">
        <div className="heading heading-border heading-middle-border heading-middle-border-center">
          <h1 className="font-weight-bold">RESEARCH IS IN VIDEO</h1>
        </div>
        <div className="mt-5 text-center">
          <h3 className="font-weight-normal mb-1">
            <a>
              <i className="icon-check icons mr-3 mt-2" />
            </a>
            <strong className="font-weight-extra-bold">Landing pages </strong>
            with video lead to 64-300% more conversions
          </h3>
          <p>-FunnelScience</p>
        </div>
        <hr className="dashed tall" />
        <div className="m-0 text-center">
          <h3 className="font-weight-normal mb-1">
            <a>
              <i className="icon-check icons mr-3" />
            </a>
            <strong className="font-weight-extra-bold">88% of Visitors </strong>
            stay longer on a site with prominent video displayed
          </h3>
          <p className="mb-0">-MistMedia</p>
        </div>
        <hr className="dashed tall" />
        <div className="mt-3 text-center">
          <h3 className="font-weight-normal mb-1">
            <a>
              <i className="icon-check icons mr-3 mt-2" />
            </a>
            <strong className="font-weight-extra-bold">Viewers are 64% </strong>
            more likely to purchase after viewing a single product video
          </h3>
          <p>-comScore</p>
        </div>
        <hr className="dashed tall" />
        <div className="mt-3 text-center">
          <h3 className="font-weight-normal mb-1">
            <a>
              <i className="icon-check icons mr-3 mt-2" />
            </a>
            <strong className="font-weight-extra-bold">90% of shoppers</strong>{" "}
            found that video was helpful while making buying decisions online
          </h3>
          <p>-comScore</p>
        </div>
        <hr className="dashed tall" />
        <div className="mt-3 text-center">
          <h3 className="font-weight-normal mb-1">
            <a>
              <i className="icon-check icons mr-3 mt-2" />
            </a>
            <strong className="font-weight-extra-bold">The chance </strong>
            of a page one listing on Google increases by 53 times with a video
          </h3>
          <p>-Forrester Research</p>
        </div>
        <hr className="dashed tall" />
        <div className="mt-3 text-center">
          <h3 className="font-weight-normal mb-1">
            <a>
              <i className="icon-check icons mr-3 mt-2" />
            </a>
            <strong className="font-weight-extra-bold">
              Video in email marketing
            </strong>{" "}
            campaigns increased clickthrough-rates by 96%
          </h3>
          <p>-Implix</p>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col text-center">
              <Link href={cta}>
                <a className="btn btn-modern text-3 btn-primary">
                  Get Started Today
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
