import { Fragment } from "react";

const DrawerToggleButton = ({ click }) => {
  return (
    <div style={{ display: "flex" }}>
      <button className="toggle-button" onClick={click}>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
      </button>
      <a
        // className="btn btn-primary"
        href="tel:+3024405820"
        style={{
          marginLeft: "30px",
          fontSize: "22px",
        }}
      >
        <i className="fa fa-phone"></i>
      </a>
    </div>
  );
};

export default DrawerToggleButton;
