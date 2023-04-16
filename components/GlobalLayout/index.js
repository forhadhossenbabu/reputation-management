import React from "react";
import { Fragment, useEffect, useState, useCallback } from "react";
import CookieBanner from "react-cookie-banner";

import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer";
import Backdrop from "../Backdrop";
import GlobalForm from "../GlobalForm";
import Footer from "../Footer";

const cookieBarStyles = {
  banner: {
    height: "40px",
    background: "#000 url(/cookie.png) 20px 50% no-repeat",
    backgroundSize: "30px 30px",
    fontSize: "15px",
    fontWeight: 600,
    position: "fixed",
    bottom: "0",
    cursor: "pointer",
  },
  button: {
    display: "none",
  },
  message: {
    display: "block",
    padding: "9px 67px",
    lineHeight: 1.3,
    textAlign: "left",
    marginRight: 244,
    color: "white",
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
  },
};

const GlobalLayout = ({ children, salesPage, contactForm, path }) => {
  const [sideDrawerOpen, setSideDrawer] = useState(false);

  useCallback(() => connectDatabase());

  return (
    <Fragment>
      <div className="body">
        <Toolbar
          salesPage={salesPage}
          sideDrawerHandler={() => setSideDrawer(!sideDrawerOpen)}
          path={path}
        />
        {sideDrawerOpen ? (
          <Fragment>
            <SideDrawer />
            <Backdrop closeBackDrop={() => setSideDrawer(false)} />
          </Fragment>
        ) : null}
        <div role="main" className="main">
          {children}
        </div>
      </div>

      {contactForm === true ? null : <GlobalForm />}
      <Footer />

      <CookieBanner
        styles={cookieBarStyles}
        message="This website uses cookies to enhance the user experience. AGREE || DECLINE"
        dismissOnScroll={false}
        dismissOnClick={true}
        onAccept={() => {}}
      />
    </Fragment>
  );
};

export default GlobalLayout;
