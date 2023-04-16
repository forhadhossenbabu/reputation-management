import Link from "next/link";
import { Fragment } from "react";
import DrawerToggleButton from "../DrawerToggleButton";

const Toolbar = ({ sideDrawerHandler, salesPage, partnershipPage, path }) => {
  const uri = path;
  return (
    <Fragment>
      <header className="toolbar" id="Toolbar">
        <nav className="toolbar__navigation container">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={sideDrawerHandler} />
          </div>
          <div className="toolbar__logo">
            <Link href="/">
              <img src="/Logo-Explaino.png" height="58px" />
            </Link>
          </div>
          <div className="spacer" />
          <div className="toolbar__navigation-items">
            <ul>
              <li>
                {salesPage ? (
                  <Link href="/about-us">ABOUT US</Link>
                ) : (
                  <Link href="/about-us">ABOUT US</Link>
                )}
              </li>
              <li>
                {salesPage ? (
                  <Link href={`/${uri}/#FAQS`}>FAQ's</Link>
                ) : (
                  <Link href="/faqs">FAQ's</Link>
                )}
              </li>
              <li>
                {salesPage ? (
                  <Link href={`/${uri}/#Process`}>PROCESS</Link>
                ) : (
                  <Link href="/#Process">PROCESS</Link>
                )}
              </li>
              <li>
                {salesPage ? (
                  <Link href={`/${uri}/#OfferPackages`}>PACKAGES</Link>
                ) : (
                  <Link href="/#Packages">PACKAGES</Link>
                )}
              </li>
              <li>
                {salesPage ? (
                  <Link href={`/${uri}/#samplePortfolio`}>PORTFOLIO</Link>
                ) : (
                  <Link href="/#samplePortfolio">PORTFOLIO</Link>
                )}
              </li>
              <li>
                {salesPage ? (
                  <Link href={`/${uri}/#TESTMONIALS`}>TESTIMONIALS</Link>
                ) : (
                  <Link href="/#TESTMONIALS">TESTIMONIALS</Link>
                )}
              </li>
              <Link href="/video-strategy-session">
                <button className="btn btn-primary">
                  <b style={{ cursor: "pointer" }}>SCHEDULE A CALL</b>
                </button>
              </Link>
              <a
                className="btn btn-primary"
                href="tel:+3024405820"
                style={{ marginLeft: "10px", fontSize: "16px" }}
              >
                <i class="fa fa-phone"></i>
              </a>

              {/* <a
                className="btn btn-primary"
                href="https://vimeo.com/user150113388"
                style={{ marginLeft: "10px", fontSize: "16px" }}
              >
                <i className="fab fa-vimeo"></i>
              </a> */}
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Toolbar;
