import { Fragment } from "react";
import Popup from "reactjs-popup";

const VideoModal = () => {
  return (
    <Popup
      trigger={
        <a
          className="video-open lightbox d-block text-color-light"
          style={{
            cursor: "pointer",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          <div className="video-open-icon" style={{ color: "green" }} />
          {/* What video can do for you? */}
          {/* HOW EXPLAINO WORKS */}
          {/* EXAMPLE EXPLAINER VIDEO */}
          {/* SUCCESSFUL EXPLAINER EXAMPLE */}
          THE BEST COMMUNICATION TOOL
        </a>
      }
      position="center"
      modal
    >
      {(close) => (
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/606681054?h=d1764bf28e&badge=0&autopause=0&player_id=0&app_id=58479"
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
      )}
    </Popup>
  );
};

export default VideoModal;
