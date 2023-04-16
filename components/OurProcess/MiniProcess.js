import Link from "next/link";
const MiniProcess = () => {
  return (
    <section className="mb-5">
      <div className="text-center partner__call">
        <h4
          style={{
            marginBottom: "20px",
            color: "#000",
            textTransform: "uppercase",
          }}
        >
          <h3>
            <b style={{ textTransform: "uppercase", color: "#000" }}>
              Let us take your
            </b>
          </h3>
          long-winning sales pitch or static text-only ads and craft a custom
          animated explainer that sales
        </h4>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-4 col-lg-3 mb-lg-0">
            <div className="card border-radius-0 bg-color-light border-0 box-shadow-1">
              <div className="card-body">
                <i className="icon-notebook icons"></i>
                <h4 className="card-title mb-1 text-4 font-weight-bold">
                  Potent Script Writing
                </h4>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 ">
            <div className="card border-radius-0 bg-color-light border-0 box-shadow-1">
              <div className="card-body">
                <i className="icon-microphone icons"></i>
                <h4 className="card-title mb-1 text-4 font-weight-bold">
                  Engaging Voiceovers
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mb-lg-0 ">
            <div className="card border-radius-0 bg-color-light border-0 box-shadow-1">
              <div className="card-body">
                <i className="icon-film icons"></i>
                <h4 className="card-title mb-1 text-4 font-weight-bold">
                  High Quality Animation
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 ">
            <div className="card border-radius-0 bg-color-light border-0 box-shadow-1">
              <div className="card-body">
                <i className="icon-control-play icons"></i>
                <h4 className="card-title mb-1 text-4 font-weight-bold">
                  Final Video
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="call-to-action mt-4 button-centered"
        style={{ padding: "0px 55px" }}
      >
        <div className="call-to-action-btn" style={{ margin: "20px auto 0px" }}>
          <Link href="/video-strategy-session">
            <a className="btn btn-modern text-3 btn-primary">
              I want to talk to someone first
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniProcess;
