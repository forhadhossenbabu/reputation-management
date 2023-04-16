import { Fragment } from "react";
import Popup from "reactjs-popup";

const ExplainerPackages = () => {
  return (
    <Fragment>
      <div className="div-no-mobile">
        <Popup
          trigger={
            <img
              src="/portfolio/InnovationMinds.png"
              style={{ cursor: "pointer" }}
              className="img-fluid"
            />
          }
          position="center"
          modal
        >
          {(close) => (
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/786656142?h=6691149781&color=c9ff23&title=0&byline=0&portrait=0"
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
                title="Innovation Minds"
              />
            </div>
          )}
        </Popup>
      </div>
      <div className="div-only-mobile">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/786656142?h=6691149781&color=c9ff23&title=0&byline=0&portrait=0"
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
            title="Innovation Minds"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ExplainerPackages;
