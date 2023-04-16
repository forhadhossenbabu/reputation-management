import { Fragment } from "react";
import Popup from "reactjs-popup";

const WhiteboardExample = () => {
  return (
    <Fragment>
      <div className="div-no-mobile">
        <Popup
          trigger={
            <img
              src="/portfolio/Reproductive-Health.png"
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
                src="https://player.vimeo.com/video/786657516?h=6bbbf01467&color=c9ff23&title=0&byline=0&portrait=0"
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
                title="California Center for Reproductive Health"
              />
            </div>
          )}
        </Popup>
      </div>
      <div className="div-only-mobile">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/786657516?badge=0&autopause=0&player_id=0&app_id=58479&h=6bbbf01467"
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
            title="California Center for Reproductive Health"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default WhiteboardExample;
