import Popup from "reactjs-popup";
import { Fragment } from "react";

const WhiteboardExample = () => {
  return (
    <Fragment>
      <div className="div-no-mobile">
        <Popup
          trigger={
            <img
              src="/portfolio/WhiteboardExample.png"
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
                src="https://player.vimeo.com/video/786655127?&color=c9ff23&title=0&byline=0&portrait=0badge=0&autopause=0&player_id=0&h=4f59cd28f7"
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
                title="Paradise Dental"
              />
            </div>
          )}
        </Popup>
      </div>
      <div className="div-only-mobile">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/786655127?&color=c9ff23&title=0&byline=0&portrait=0badge=0&autopause=0&player_id=0&h=4f59cd28f7"
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
            title="Paradise Dental"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default WhiteboardExample;
