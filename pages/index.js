import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const IndexPage = () => {
  const [publishableKey, setPublishableKey] = useState("");

  useEffect(() => {
    fetch("/api/keys", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setPublishableKey(data.publishableKey);
      })
      .catch((err) => {
        toast.error("Please refresh");
        setPublishableKey(null);
      });
  });
  const stripePromise = loadStripe(publishableKey);
  return (
    <div className="home page-template page-template-full-width page-template-full-width-php page page-id-11 mkd-core-1.2.1 cortex-ver-1.5  mkdf-smooth-page-transitions mkdf-mimic-ajax mkdf-grid-1300 mkdf-blog-installed mkdf-header-standard mkdf-sticky-header-on-scroll-down-up mkdf-default-mobile-header mkdf-sticky-up-mobile-header mkdf-dropdown-animate-height mkdf-search-covers-header mkdf-side-menu-slide-from-right wpb-js-composer js-comp-ver-6.0.3 vc_responsive">
      <section className="mkdf-side-menu right">
        <div className="mkdf-close-side-menu-holder">
          <div className="mkdf-close-side-menu-holder-inner">
            <a href="#" target="_self" className="mkdf-close-side-menu">
              <span aria-hidden="true" className="ion-close" />
            </a>
          </div>
        </div>
        <div id="text-2" className="widget mkdf-sidearea widget_text">
          <div className="textwidget">
            <p>
              <img
                decoding="async"
                loading="lazy"
                className="aligncenter wp-image-13040"
                src="images/Social-Portrait-2022-Light-Transparent-1024x1024.png"
                alt="Giraffe Dots Logo"
                width={50}
                height={50}
                srcSet="images/Social-Portrait-2022-Light-Transparent-1024x1024.png 1024w, images/Social-Portrait-2022-Light-Transparent-300x300.png 300w, images/Social-Portrait-2022-Light-Transparent-150x150.png 150w, images/Social-Portrait-2022-Light-Transparent-768x768.png 768w, images/Social-Portrait-2022-Light-Transparent-550x550.png 550w, images/Social-Portrait-2022-Light-Transparent-1100x1100.png 1100w, images/Social-Portrait-2022-Light-Transparent.png 1500w"
                sizes="(max-width: 50px) 100vw, 50px"
              />
              <br />
            </p>
            <div className="vc_empty_space" style={{ height: 0 }}>
              <span className="vc_empty_space_inner" />
            </div>
            We provide… Social Media Management, Influencer Marketing, Content
            Creation, Facebook Advertising, Instagram Advertising, LinkedIn
            Advertising and more.
            <p />
            <p>
              Our mission is to help clients reach their objectives by
              delivering our specialist and constantly evolving service.
            </p>
            <div className="vc_empty_space" style={{ height: 0 }}>
              <span className="vc_empty_space_inner" />
            </div>
            <p />
            <div style={{ fontStyle: "italic", fontSize: 14 }}>
              <p>Telephone: +44 (0)23 9281 9051</p>
              <p>
                Address: Cell Block Studios College Road, H M Naval Base,
                Portsmouth, Hampshire, England, PO1 3LJ.
              </p>
            </div>
            <div style={{ fontStyle: "italic", fontSize: 14 }}>
              <a href="mailto:hello@giraffesocialmedia.co.uk?subject=Giraffe Website - Proposal Request">
                hello@giraffesocialmedia.co.uk
              </a>
            </div>
          </div>
        </div>
        <div className="widget mkdf-raw-html-widget  ">
          <div style={{ textAlign: "center" }}>
            <span
              className="mkdf-icon-shortcode normal"
              style={{ margin: "0 12px 0 0px" }}
              data-hover-color="#F8C9D2"
              data-color="#ffffff"
            >
              <a
                href="https://twitter.com/giraffesm"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="mkdf-icon-font-awesome fa fa-twitter mkdf-icon-element"
                  style={{ color: "#ffffff", fontSize: 26 }}
                />
              </a>
            </span>
            <span
              className="mkdf-icon-shortcode normal"
              style={{ margin: "0 12px 0 0" }}
              data-hover-color="#F8C9D2"
              data-color="#ffffff"
            >
              <a
                href="https://www.facebook.com/GiraffeSocialMedia/"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="mkdf-icon-font-awesome fa fa-facebook mkdf-icon-element"
                  style={{ color: "#ffffff", fontSize: 26 }}
                />
              </a>
            </span>
            <span
              className="mkdf-icon-shortcode normal"
              style={{ margin: "0 12px 0 0" }}
              data-hover-color="#F8C9D2"
              data-color="#ffffff"
            >
              <a
                href="https://www.instagram.com/giraffesm/"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="mkdf-icon-font-awesome fa fa-instagram mkdf-icon-element"
                  style={{ color: "#ffffff", fontSize: 26 }}
                />
              </a>
            </span>
          </div>
        </div>
      </section>
      <div className="mkdf-wrapper">
        <div className="mkdf-wrapper-inner">
          <header className="mkdf-page-header">
            <div className="mkdf-menu-area mkdf-menu-right">
              <div className="mkdf-grid">
                <div className="mkdf-vertical-align-containers">
                  <div className="mkdf-position-left">
                    <div className="mkdf-position-left-inner">
                      <div className="mkdf-logo-wrapper">
                        <a
                          href="https://www.giraffesocialmedia.co.uk/"
                          style={{ height: 73 }}
                        >
                          <img
                            className="mkdf-normal-logo"
                            src="images/Giraffe-Social-Media-Wordmark-Dark-Margin-@400px.png"
                            alt="logo"
                          />
                          <img
                            className="mkdf-dark-logo"
                            src="images/Giraffe-Social-Media-Wordmark-Dark-Margin-@400px.png"
                            alt="dark logoo"
                          />{" "}
                          <img
                            className="mkdf-light-logo"
                            src="images/Giraffe-Social-Media-Wordmark-Dark-Margin-@400px.png"
                            alt="light logo"
                          />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mkdf-position-right">
                    <div className="mkdf-position-right-inner">
                      <nav className="mkdf-main-menu mkdf-drop-down mkdf-default-nav">
                        <ul id="menu-top-main-menu" className="clearfix">
                          <li
                            id="nav-menu-item-10039"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item mkdf-menu-narrow mkdf-wide-background anchor-item"
                          >
                            <a
                              href="https://www.giraffesocialmedia.co.uk/#services"
                              className="current"
                            >
                              <span className="mkdf-item-outer">
                                <span className="mkdf-item-inner">
                                  <span className="mkdf-item-text">
                                    Services
                                  </span>
                                </span>
                                <span className="plus" />
                              </span>
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-10180"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item mkdf-menu-narrow mkdf-wide-background anchor-item"
                          >
                            <a
                              href="https://www.giraffesocialmedia.co.uk/#pricing"
                              className="current"
                            >
                              <span className="mkdf-item-outer">
                                <span className="mkdf-item-inner">
                                  <span className="mkdf-item-text">
                                    Pricing
                                  </span>
                                </span>
                                <span className="plus" />
                              </span>
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-10042"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item mkdf-menu-narrow mkdf-wide-background anchor-item"
                          >
                            <a
                              href="https://www.giraffesocialmedia.co.uk/#portfolio"
                              className="current"
                            >
                              <span className="mkdf-item-outer">
                                <span className="mkdf-item-inner">
                                  <span className="mkdf-item-text">
                                    Portfolio
                                  </span>
                                </span>
                                <span className="plus" />
                              </span>
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-10050"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item mkdf-menu-narrow mkdf-wide-background anchor-item"
                          >
                            <a
                              href="https://www.giraffesocialmedia.co.uk/#team"
                              className="current"
                            >
                              <span className="mkdf-item-outer">
                                <span className="mkdf-item-inner">
                                  <span className="mkdf-item-text">Team</span>
                                </span>
                                <span className="plus" />
                              </span>
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-13512"
                            className="menu-item menu-item-type-post_type menu-item-object-page mkdf-menu-narrow mkdf-wide-background"
                          >
                            <a href="https://www.giraffesocialmedia.co.uk/social-media-test/">
                              <span className="mkdf-item-outer">
                                <span className="mkdf-item-inner">
                                  <span className="mkdf-item-text">
                                    Test Your Social
                                  </span>
                                </span>
                                <span className="plus" />
                              </span>
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-10200"
                            className="menu-item menu-item-type-post_type menu-item-object-page mkdf-menu-narrow mkdf-wide-background"
                          >
                            <a href="https://www.giraffesocialmedia.co.uk/blog/">
                              <span className="mkdf-item-outer">
                                <span className="mkdf-item-inner">
                                  <span className="mkdf-item-text">Blog</span>
                                </span>
                                <span className="plus" />
                              </span>
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-10045"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item mkdf-menu-narrow mkdf-wide-background anchor-item"
                          >
                            <a
                              href="https://www.giraffesocialmedia.co.uk/#contact"
                              className="current"
                            >
                              <span className="mkdf-item-outer">
                                <span className="mkdf-item-inner">
                                  <span className="mkdf-item-text">
                                    Contact
                                  </span>
                                </span>
                                <span className="plus" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <a
                        className="mkdf-side-menu-button-opener normal"
                        style={{ color: "#fdaa56" }}
                        href="javascript:void(0)"
                      >
                        <span
                          aria-hidden="true"
                          className="mkdf-icon-font-elegant icon_menu "
                        />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mkdf-sticky-header">
              <div className="mkdf-sticky-holder mkdf-sticky-menu-right">
                <div className="mkdf-grid">
                  <div className=" mkdf-vertical-align-containers">
                    <div className="mkdf-position-left">
                      <div className="mkdf-position-left-inner">
                        <div className="mkdf-logo-wrapper">
                          <a
                            href="https://www.giraffesocialmedia.co.uk/"
                            style={{ height: 73 }}
                          >
                            <img
                              className="mkdf-normal-logo"
                              src="images/Giraffe-Social-Media-Wordmark-Dark-Margin-@400px.png"
                              alt="logo"
                            />
                            <img
                              className="mkdf-dark-logo"
                              src="images/Giraffe-Social-Media-Wordmark-Dark-Margin-@400px.png"
                              alt="dark logoo"
                            />{" "}
                            <img
                              className="mkdf-light-logo"
                              src="images/Giraffe-Social-Media-Wordmark-Dark-Margin-@400px.png"
                              alt="light logo"
                            />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mkdf-position-right">
                      <div className="mkdf-position-right-inner">
                        <nav className="mkdf-main-menu mkdf-drop-down mkdf-sticky-nav">
                          <ul id="menu-top-main-menu-1" className="clearfix">
                            <li
                              id="sticky-nav-menu-item-10039"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item mkdf-menu-narrow mkdf-wide-background anchor-item"
                            >
                              <a
                                href="https://www.giraffesocialmedia.co.uk/#services"
                                className="current"
                              >
                                <span className="mkdf-item-outer">
                                  <span className="mkdf-item-inner">
                                    <span className="mkdf-item-text">
                                      Services
                                    </span>
                                  </span>
                                  <span className="plus" />
                                </span>
                              </a>
                            </li>
                            <li
                              id="sticky-nav-menu-item-10180"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item mkdf-menu-narrow mkdf-wide-background anchor-item"
                            >
                              <a
                                href="https://www.giraffesocialmedia.co.uk/#pricing"
                                className="current"
                              >
                                <span className="mkdf-item-outer">
                                  <span className="mkdf-item-inner">
                                    <span className="mkdf-item-text">
                                      Pricing
                                    </span>
                                  </span>
                                  <span className="plus" />
                                </span>
                              </a>
                            </li>
                            <li
                              id="sticky-nav-menu-item-10042"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item mkdf-menu-narrow mkdf-wide-background anchor-item"
                            >
                              <a
                                href="https://www.giraffesocialmedia.co.uk/#portfolio"
                                className="current"
                              >
                                <span className="mkdf-item-outer">
                                  <span className="mkdf-item-inner">
                                    <span className="mkdf-item-text">
                                      Portfolio
                                    </span>
                                  </span>
                                  <span className="plus" />
                                </span>
                              </a>
                            </li>
                            <li
                              id="sticky-nav-menu-item-10050"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item mkdf-menu-narrow mkdf-wide-background anchor-item"
                            >
                              <a
                                href="https://www.giraffesocialmedia.co.uk/#team"
                                className="current"
                              >
                                <span className="mkdf-item-outer">
                                  <span className="mkdf-item-inner">
                                    <span className="mkdf-item-text">Team</span>
                                  </span>
                                  <span className="plus" />
                                </span>
                              </a>
                            </li>
                            <li
                              id="sticky-nav-menu-item-13512"
                              className="menu-item menu-item-type-post_type menu-item-object-page mkdf-menu-narrow mkdf-wide-background"
                            >
                              <a href="https://www.giraffesocialmedia.co.uk/social-media-test/">
                                <span className="mkdf-item-outer">
                                  <span className="mkdf-item-inner">
                                    <span className="mkdf-item-text">
                                      Test Your Social
                                    </span>
                                  </span>
                                  <span className="plus" />
                                </span>
                              </a>
                            </li>
                            <li
                              id="sticky-nav-menu-item-10200"
                              className="menu-item menu-item-type-post_type menu-item-object-page mkdf-menu-narrow mkdf-wide-background"
                            >
                              <a href="https://www.giraffesocialmedia.co.uk/blog/">
                                <span className="mkdf-item-outer">
                                  <span className="mkdf-item-inner">
                                    <span className="mkdf-item-text">Blog</span>
                                  </span>
                                  <span className="plus" />
                                </span>
                              </a>
                            </li>
                            <li
                              id="sticky-nav-menu-item-10045"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item mkdf-menu-narrow mkdf-wide-background anchor-item"
                            >
                              <a
                                href="https://www.giraffesocialmedia.co.uk/#contact"
                                className="current"
                              >
                                <span className="mkdf-item-outer">
                                  <span className="mkdf-item-inner">
                                    <span className="mkdf-item-text">
                                      Contact
                                    </span>
                                  </span>
                                  <span className="plus" />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <a
                          className="mkdf-side-menu-button-opener normal"
                          style={{ color: "#fdaa56" }}
                          href="javascript:void(0)"
                        >
                          <span
                            aria-hidden="true"
                            className="mkdf-icon-font-elegant icon_menu "
                          />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <header className="mkdf-mobile-header">
            <div className="mkdf-mobile-header-inner">
              <div className="mkdf-mobile-header-holder">
                <div className="mkdf-grid">
                  <div className="mkdf-vertical-align-containers">
                    <div className="mkdf-mobile-menu-opener">
                      <a href="javascript:void(0)">
                        <span className="mkdf-mobile-opener-icon-holder">
                          <i className="mkdf-icon-font-awesome fa fa-bars " />{" "}
                        </span>
                      </a>
                    </div>
                    <div className="mkdf-position-center">
                      <div className="mkdf-position-center-inner">
                        <div className="mkdf-mobile-logo-wrapper">
                          <a
                            href="https://www.giraffesocialmedia.co.uk/"
                            style={{ height: 73 }}
                          >
                            <img
                              src="images/Giraffe-Social-Media-Wordmark-Dark-Margin-@400px.png"
                              alt="mobile logo"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mkdf-position-right">
                      <div className="mkdf-position-right-inner"></div>
                    </div>
                  </div>
                  {/* close .mkdf-vertical-align-containers */}
                </div>
              </div>
              <nav
                className="mkdf-mobile-nav"
                role="navigation"
                aria-label="Mobile Menu"
              >
                <div className="mkdf-grid">
                  <ul id="menu-top-main-menu-2" className>
                    <li
                      id="mobile-menu-item-10039"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item "
                    >
                      <a
                        href="https://www.giraffesocialmedia.co.uk/#services"
                        className=" current "
                      >
                        <span>Services</span>
                      </a>
                    </li>
                    <li
                      id="mobile-menu-item-10180"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item "
                    >
                      <a
                        href="https://www.giraffesocialmedia.co.uk/#pricing"
                        className=" current "
                      >
                        <span>Pricing</span>
                      </a>
                    </li>
                    <li
                      id="mobile-menu-item-10042"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item "
                    >
                      <a
                        href="https://www.giraffesocialmedia.co.uk/#portfolio"
                        className=" current "
                      >
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li
                      id="mobile-menu-item-10050"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item "
                    >
                      <a
                        href="https://www.giraffesocialmedia.co.uk/#team"
                        className=" current "
                      >
                        <span>Team</span>
                      </a>
                    </li>
                    <li
                      id="mobile-menu-item-13512"
                      className="menu-item menu-item-type-post_type menu-item-object-page "
                    >
                      <a
                        href="https://www.giraffesocialmedia.co.uk/social-media-test/"
                        className
                      >
                        <span>Test Your Social</span>
                      </a>
                    </li>
                    <li
                      id="mobile-menu-item-10200"
                      className="menu-item menu-item-type-post_type menu-item-object-page "
                    >
                      <a
                        href="https://www.giraffesocialmedia.co.uk/blog/"
                        className
                      >
                        <span>Blog</span>
                      </a>
                    </li>
                    <li
                      id="mobile-menu-item-10045"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item "
                    >
                      <a
                        href="https://www.giraffesocialmedia.co.uk/#contact"
                        className=" current "
                      >
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          {/* close .mkdf-mobile-header */}
          <div className="mkdf-content">
            <div className="mkdf-content-inner">
              <div className="mkdf-full-width">
                <div className="mkdf-full-width-inner">
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1648803121946 mkdf-content-aligment-center"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="wpb_revslider_element wpb_content_element">
                              {/* START Social Media Management 3 REVOLUTION SLIDER 6.0.3 */}
                              <p className="rs-p-wp-fix" />
                              <rs-module-wrap
                                id="rev_slider_4_1_wrapper"
                                data-source="gallery"
                                style={{
                                  background: "transparent",
                                  padding: 0,
                                }}
                              >
                                <rs-module
                                  id="rev_slider_4_1"
                                  style={{ display: "none" }}
                                  data-version="6.0.3"
                                >
                                  <rs-slides>
                                    <rs-slide
                                      data-key="rs-6"
                                      data-title="Slide"
                                      data-anim="ei:d;eo:d;s:600;r:0;t:fade;sl:d;"
                                    >
                                      <img
                                        src="images/transparent.png"
                                        title="Home"
                                        data-bg="c:#ffffff;"
                                        data-parallax="off"
                                        className="rev-slidebg"
                                        data-no-retina
                                      />
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-3"
                                        data-type="image"
                                        data-xy="x:c;xo:3px,0,-14px,-12px;y:m;yo:-60px,-57px,44px,-52px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:563px,441px,563px,522px;h:545px,427px,545px,505px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="sX:0.8;sY:0.8;tp:600;"
                                        data-frame_1="tp:600;e:Elastic.easeOut;st:600;sp:500;sR:600;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7900;"
                                        style={{
                                          zIndex: 9,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/h1-revolution-img-6.png"
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-5"
                                        data-type="image"
                                        data-xy="x:c;xo:0,1px,-3px,1px;y:b;yo:141px,70px,10px,11px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:50px,25px,34px,34px;h:50px,41px,56px,56px;"
                                        data-actions="o:click;a:scrollbelow;offset:20;sp:700;e:Power2.easeOut;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="y:top;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:250;sp:800;sR:250;"
                                        data-frame_999="o:0;tp:600;st:w;sR:7950;"
                                        data-loop_0="y:20;"
                                        data-loop_999="sp:3000;e:Power1.easeOut;yym:t;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 10,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Double-Down-Arrow.png"
                                          width={100}
                                          height={100}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-6"
                                        className="rs-pxl-1"
                                        data-type="image"
                                        data-xy="xo:352px,100px,100px,53px;yo:108px,150px,150px,85px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:40px,51px,51px,51px;h:40px,50px,50px,50px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:left;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:1400;sp:700;sR:1400;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:6900;"
                                        data-loop_0="xR:10;yR:10;oX:40;oY:50;"
                                        data-loop_999="xR:10;yR:10;crd:t;sp:6000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 12,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Orange-Dot-2022.png"
                                          alt="Orange Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-7"
                                        className="rs-pxl-2"
                                        data-type="image"
                                        data-xy="x:r;xo:246px,100px,110px,61px;yo:99px,150px,182px,36px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:22px,53px,53px,53px;h:22px,50px,50px,50px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:right;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:800;sp:700;sR:800;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7500;"
                                        data-loop_0="xR:10;yR:10;oX:30;oY:50;"
                                        data-loop_999="xR:10;yR:10;crd:t;sp:10000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 15,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Grey-Dot-2022.png"
                                          alt="Grey Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-10"
                                        data-type="text"
                                        data-color="#525252||#383838||#383838||#383838"
                                        data-xy="x:c;xo:3px,0,0,1px;y:m;yo:50px,100px,126px,-14px;"
                                        data-text="s:26,26,26,20;l:19;fw:600,700,700,700;a:inherit;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="y:50px;tp:600;"
                                        data-frame_1="tp:600;e:Power3.easeOut;st:1100;sp:700;sR:1100;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7200;"
                                        style={{
                                          zIndex: 27,
                                          fontFamily: "Montserrat",
                                        }}
                                      >
                                        social media management
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-11"
                                        data-type="text"
                                        data-xy="x:c;xo:3px,0,0,1px;y:m;yo:130px,180px,194px,55px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:auto,auto,826px,auto;h:auto,auto,24px,auto;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="y:50px;tp:600;"
                                        data-frame_1="tp:600;e:Power3.easeOut;st:1300;sp:700;sR:1300;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7000;"
                                        style={{
                                          zIndex: 28,
                                          fontFamily: "Open Sans",
                                        }}
                                      >
                                        <a
                                          href="#contact"
                                          target="_blank"
                                          className="mkdf-btn mkdf-btn-large mkdf-btn-solid mkdf-btn-bckg-hover"
                                        >
                                          <span className="mkdf-btn-top-shadow" />
                                          <span className="mkdf-btn-text">
                                            Request a proposal
                                          </span>
                                          <span className="mkdf-btn-bottom-shadow" />
                                        </a>
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-20"
                                        className="rs-pxl-1"
                                        data-type="image"
                                        data-xy="x:r;xo:179px,100px,76px,79px;y:b;yo:231px,150px,122px,72px;"
                                        data-text="s:20,20,20,20;l:22;a:inherit;"
                                        data-dim="w:18px,90px,76px,68px;h:18px,54px,76px,68px;"
                                        data-vbility="t,t,f,t"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:right;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:1000;sp:700;sR:1000;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7300;"
                                        data-loop_0="xR:20px;yR:20px;oX:-50;oY:-50;"
                                        data-loop_999="xR:20px;yR:20px;crd:t;sp:8000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 23,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Aqua-Dot-2022.png"
                                          alt="Aqua Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-22"
                                        className="rs-pxl-2"
                                        data-type="image"
                                        data-xy="xo:215px,100px,98px,77px;y:b;yo:180px,150px,135px,27px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:93px,65px,65px,65px;h:93px,64px,64px,64px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:left;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:1200;sp:700;sR:1200;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7100;"
                                        data-loop_0="xR:10;yR:10;oX:50;oY:30;"
                                        data-loop_999="xR:10;yR:10;crd:t;sp:8000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 16,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Orange-Dot-2022.png"
                                          alt="Orange Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-23"
                                        className="rs-pxl-2"
                                        data-type="image"
                                        data-xy="xo:200px,100px,98px,77px;y:b;yo:219px,150px,135px,27px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:54px,65px,65px,65px;h:54px,64px,64px,64px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:left;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:1200;sp:700;sR:1200;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7100;"
                                        data-loop_0="xR:10;yR:10;oX:50;oY:30;"
                                        data-loop_999="xR:10;yR:10;crd:t;sp:8000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 17,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Aqua-Dot-2022.png"
                                          alt="Aqua Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-24"
                                        className="rs-pxl-1"
                                        data-type="image"
                                        data-rsp_ch="on"
                                        data-xy="x:c;xo:3px,3px,-10px,5px;y:m;yo:-83px,-83px,27px,-99px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:909px,909px,678px,418px;h:208px,208px,156px,96px;"
                                        data-frame_0="y:50px;tp:600;"
                                        data-frame_1="tp:600;e:easeOutElastic;st:700;sp:1000;sR:700;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7300;"
                                        style={{
                                          zIndex: 24,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/orange.png"
                                          alt="Orange Giraffe"
                                          width={909}
                                          height={208}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-25"
                                        className="rs-pxl-2"
                                        data-type="image"
                                        data-rsp_ch="on"
                                        data-xy="x:c;xo:20px,20px,0,10px;y:m;yo:-70px,-70px,39px,-93px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:909px,909px,674px,426px;h:208px,208px,155px,98px;"
                                        data-frame_0="y:-50px;tp:600;"
                                        data-frame_1="tp:600;e:easeOutElastic;st:800;sp:1000;sR:800;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7200;"
                                        style={{
                                          zIndex: 25,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Aqua.png"
                                          alt="Aqua Giraffe"
                                          width={909}
                                          height={208}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-26"
                                        className="rs-pxl-2"
                                        data-type="image"
                                        data-rsp_ch="on"
                                        data-xy="x:c;xo:11px,11px,-6px,6px;y:m;yo:-77px,-77px,33px,-97px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:909px,909px,679px,435px;h:208px,208px,156px,100px;"
                                        data-frame_0="y:50px;tp:600;"
                                        data-frame_1="tp:600;e:easeOutElastic;st:900;sp:1000;sR:900;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7100;"
                                        style={{
                                          zIndex: 26,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Grey.png"
                                          alt="Grey Giraffe"
                                          width={909}
                                          height={208}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-27"
                                        className="rs-pxl-2"
                                        data-type="image"
                                        data-xy="xo:212px,100px,98px,77px;y:b;yo:169px,150px,135px,27px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:17px,65px,65px,65px;h:17px,64px,64px,64px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:left;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:1200;sp:700;sR:1200;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7100;"
                                        data-loop_0="xR:10;yR:10;oX:50;oY:30;"
                                        data-loop_999="xR:10;yR:10;crd:t;sp:8000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 19,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Pink-Dot-2022.png"
                                          alt="Pink Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-29"
                                        className="rs-pxl-2"
                                        data-type="image"
                                        data-xy="xo:262px,100px,98px,77px;y:b;yo:172px,150px,135px,27px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:26px,65px,65px,65px;h:26px,64px,64px,64px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:left;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:1200;sp:700;sR:1200;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7100;"
                                        data-loop_0="xR:10;yR:10;oX:50;oY:30;"
                                        data-loop_999="xR:10;yR:10;crd:t;sp:8000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 18,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Aqua-Dot-2022.png"
                                          alt="Aqua Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-30"
                                        className="rs-pxl-1"
                                        data-type="image"
                                        data-xy="xo:282px,100px,100px,53px;yo:77px,150px,150px,85px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:66px,51px,51px,51px;h:66px,50px,50px,50px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:left;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:1400;sp:700;sR:1400;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:6900;"
                                        data-loop_0="xR:10;yR:10;oX:40;oY:50;"
                                        data-loop_999="xR:10;yR:10;crd:t;sp:6000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 11,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Grey-Dot-2022.png"
                                          alt="Grey Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-31"
                                        className="rs-pxl-2"
                                        data-type="image"
                                        data-xy="x:r;xo:258px,100px,110px,61px;yo:129px,150px,182px,36px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:42px,53px,53px,53px;h:42px,50px,50px,50px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:right;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:800;sp:700;sR:800;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7500;"
                                        data-loop_0="xR:10;yR:10;oX:30;oY:50;"
                                        data-loop_999="xR:10;yR:10;crd:t;sp:10000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 14,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Orange-Dot-2022.png"
                                          alt="Orange Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-33"
                                        className="rs-pxl-2"
                                        data-type="image"
                                        data-xy="x:r;xo:276px,100px,110px,61px;yo:77px,150px,182px,36px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:97px,53px,53px,53px;h:97px,50px,50px,50px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:right;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:800;sp:700;sR:800;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7500;"
                                        data-loop_0="xR:10;yR:10;oX:30;oY:50;"
                                        data-loop_999="xR:10;yR:10;crd:t;sp:10000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 13,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Aqua-Dot-2022.png"
                                          alt="Aqua Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-34"
                                        className="rs-pxl-1"
                                        data-type="image"
                                        data-xy="x:r;xo:202px,100px,76px,79px;y:b;yo:215px,150px,122px,72px;"
                                        data-text="s:20,20,20,20;l:22;a:inherit;"
                                        data-dim="w:78px,90px,76px,68px;h:78px,54px,76px,68px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:right;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:1000;sp:700;sR:1000;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7300;"
                                        data-loop_0="xR:20px;yR:20px;oX:-50;oY:-50;"
                                        data-loop_999="xR:20px;yR:20px;crd:t;sp:8000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 20,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Orange-Dot-2022.png"
                                          alt="Orange Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-35"
                                        className="rs-pxl-1"
                                        data-type="image"
                                        data-xy="x:r;xo:171px,100px,76px,79px;y:b;yo:181px,150px,122px,72px;"
                                        data-text="s:20,20,20,20;l:22;a:inherit;"
                                        data-dim="w:40px,90px,76px,68px;h:40px,54px,76px,68px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:right;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:1000;sp:700;sR:1000;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7300;"
                                        data-loop_0="xR:20px;yR:20px;oX:-50;oY:-50;"
                                        data-loop_999="xR:20px;yR:20px;crd:t;sp:8000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 21,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Grey-Dot-2022.png"
                                          alt="Grey Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                      <rs-layer
                                        id="slider-4-slide-6-layer-36"
                                        className="rs-pxl-1"
                                        data-type="image"
                                        data-xy="x:r;xo:207px,100px,76px,79px;y:b;yo:266px,150px,122px,72px;"
                                        data-text="s:20,20,20,20;l:22;a:inherit;"
                                        data-dim="w:32px,90px,76px,68px;h:32px,54px,76px,68px;"
                                        data-basealign="slide"
                                        data-rsp_o="off"
                                        data-rsp_bd="off"
                                        data-frame_0="x:right;o:1;tp:600;"
                                        data-frame_1="tp:600;e:Expo.easeOut;st:1000;sp:700;sR:1000;"
                                        data-frame_999="o:0;tp:600;e:nothing;st:w;sR:7300;"
                                        data-loop_0="xR:20px;yR:20px;oX:-50;oY:-50;"
                                        data-loop_999="xR:20px;yR:20px;crd:t;sp:8000;yys:t;yyf:t;"
                                        style={{
                                          zIndex: 22,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        <img
                                          src="images/Pink-Dot-2022.png"
                                          alt="Pink Dot"
                                          width={500}
                                          height={500}
                                          data-no-retina
                                        />
                                      </rs-layer>
                                      {/*
                                       */}
                                    </rs-slide>
                                  </rs-slides>
                                  <rs-static-layers>
                                    {/*
                                     */}
                                  </rs-static-layers>
                                  <rs-progress
                                    className="rs-bottom"
                                    style={{ visibility: "hidden !important" }}
                                  />
                                </rs-module>
                              </rs-module-wrap>
                              {/* END REVOLUTION SLIDER */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-mkdf-anchor="about"
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: 175 }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="mkdf-parallax-call-to-action">
                              <div
                                className="mkdf-pcta-content-holder"
                                style={{ color: "#525252" }}
                              >
                                <div className="mkdf-pcta-title-holder">
                                  <h2 className="mkdf-pcta-title">
                                    the social specialists
                                  </h2>
                                </div>
                                <span className="mkdf-pcta-separator" />
                                <div className="mkdf-pcta-text-holder">
                                  <p className="mkdf-pcta-text">
                                    We provide social media management to help
                                    businesses around the world reach their
                                    digital marketing objectives.
                                  </p>
                                </div>
                                <div className="mkdf-pcta-button-holder">
                                  <a
                                    href="#contact"
                                    target="_blank"
                                    className="mkdf-btn mkdf-btn-large mkdf-btn-solid mkdf-btn-bckg-hover"
                                  >
                                    {" "}
                                    <span className="mkdf-btn-top-shadow" />{" "}
                                    <span className="mkdf-btn-text">
                                      Request a proposal
                                    </span>{" "}
                                    <span className="mkdf-btn-bottom-shadow" />{" "}
                                  </a>
                                </div>
                              </div>
                              <div className="mkdf-pcta-images-holder">
                                <img
                                  className="mkdf-main-image"
                                  src="images/Giraffe-globe-80.png"
                                  alt="Giraffe-globe-80"
                                />
                                <img
                                  className="mkdf-additional-image"
                                  src="images/Bubbles-Website-15-2.png"
                                  alt="Bubbles-Website—15-2"
                                />
                              </div>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: 150 }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-mkdf-anchor="services"
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="mkdf-elements-holder mkdf-three-columns mkdf-responsive-mode-768">
                              <div
                                className="mkdf-elements-holder-item mkdf-horizontal-alignment-center mkdf-eh-clickable mkdf-ehi-hover-overlay"
                                style={{
                                  backgroundImage:
                                    "url(https://www.giraffesocialmedia.co.uk/wp-content/uploads/2023/01/2.png)",
                                }}
                              >
                                <a
                                  className="mkdf-eh-item-link"
                                  href="https://www.giraffesocialmedia.co.uk/social-media-management/"
                                  target="_self"
                                />
                                <div
                                  className="mkdf-elements-holder-item-overlay"
                                  style={{ backgroundColor: "#fdf5e6" }}
                                />
                                <div className="mkdf-elements-holder-item-inner">
                                  <div
                                    className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-973940"
                                    style={{ padding: "139px 19% 153px 19%" }}
                                  >
                                    <style
                                      type="text/css"
                                      data-type="mkdf-elements-custom-padding"
                                      scoped
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "\n                                                    @media only screen and (min-width: 1024px) and (max-width: 1280px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-973940 {\n                                                    padding: 131px 12% 145px 12% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-973940 {\n                                                    padding: 139px 22% 144px 22% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-973940 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (max-width: 480px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-973940 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                 ",
                                      }}
                                    />
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h3
                                          style={{
                                            textAlign: "center",
                                            color: "#ffffff",
                                          }}
                                        >
                                          <span style={{ color: "#525252" }}>
                                            <strong>
                                              Social Media Management
                                            </strong>
                                          </span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p
                                          style={{
                                            textAlign: "center",
                                            color: "#525252",
                                            lineHeight: 34,
                                          }}
                                        >
                                          <strong>
                                            Posts that inspire, educate and
                                            entertain, brand advocate generating
                                            community management, meticulously
                                            measured and reported upon in a
                                            simple to understand way.
                                          </strong>
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <a
                                      href="#"
                                      target="_self"
                                      style={{
                                        color: "#fdf5e6",
                                        border: "1px solid #8cd6c6",
                                      }}
                                      className="mkdf-btn mkdf-btn-small mkdf-btn-solid mkdf-btn-icon"
                                    >
                                      <span className="mkdf-btn-text">
                                        Learn More
                                      </span>
                                      <span className="mkdf-btn-icon-holder">
                                        <i className="mkdf-icon-font-awesome fa fa-chevron-right " />{" "}
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="mkdf-elements-holder-item mkdf-horizontal-alignment-center mkdf-eh-clickable mkdf-ehi-hover-overlay"
                                style={{
                                  backgroundImage:
                                    "url(https://www.giraffesocialmedia.co.uk/wp-content/uploads/2023/01/MicrosoftTeams-image-57.png)",
                                }}
                              >
                                <a
                                  className="mkdf-eh-item-link"
                                  href="https://www.giraffesocialmedia.co.uk/influencer-marketing/"
                                  target="_self"
                                />
                                <div
                                  className="mkdf-elements-holder-item-overlay"
                                  style={{ backgroundColor: "#8cd6c6" }}
                                />
                                <div className="mkdf-elements-holder-item-inner">
                                  <div
                                    className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-271786"
                                    style={{ padding: "139px 19% 153px 19%" }}
                                  >
                                    <style
                                      type="text/css"
                                      data-type="mkdf-elements-custom-padding"
                                      scoped
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "\n                                                    @media only screen and (min-width: 1024px) and (max-width: 1280px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-271786 {\n                                                    padding: 131px 12% 145px 12% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-271786 {\n                                                    padding: 139px 22% 144px 22% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-271786 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (max-width: 480px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-271786 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                 ",
                                      }}
                                    />
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h3
                                          style={{
                                            textAlign: "center",
                                            color: "#ffffff",
                                          }}
                                        >
                                          <span style={{ color: "#525252" }}>
                                            <strong>
                                              Influencer Marketing
                                            </strong>
                                          </span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h6
                                          style={{
                                            textAlign: "center",
                                            color: "#ffffff",
                                            lineHeight: 34,
                                          }}
                                        >
                                          <span style={{ color: "#525252" }}>
                                            Searching for the perfect social
                                            media influencers, negotiating fees
                                            and managing the creatives, all
                                            reported upon concisely. We manage
                                            your influencer strategy, start to
                                            finish.
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <a
                                      href="#"
                                      target="_self"
                                      style={{
                                        color: "#fdf5e6",
                                        backgroundColor: "#525252",
                                        border: "1px solid #fdf5e6",
                                      }}
                                      className="mkdf-btn mkdf-btn-small mkdf-btn-solid mkdf-btn-icon"
                                    >
                                      <span className="mkdf-btn-text">
                                        Learn More
                                      </span>
                                      <span className="mkdf-btn-icon-holder">
                                        <i className="mkdf-icon-font-awesome fa fa-chevron-right " />{" "}
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="mkdf-elements-holder-item mkdf-horizontal-alignment-center mkdf-eh-clickable mkdf-ehi-hover-overlay"
                                style={{
                                  backgroundImage:
                                    "url(https://www.giraffesocialmedia.co.uk/wp-content/uploads/2023/01/3.png)",
                                }}
                              >
                                <a
                                  className="mkdf-eh-item-link"
                                  href="https://www.giraffesocialmedia.co.uk/content-creation/"
                                  target="_self"
                                />
                                <div
                                  className="mkdf-elements-holder-item-overlay"
                                  style={{ backgroundColor: "#fdf5e6" }}
                                />
                                <div className="mkdf-elements-holder-item-inner">
                                  <div
                                    className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-813827"
                                    style={{ padding: "139px 19% 153px 19%" }}
                                  >
                                    <style
                                      type="text/css"
                                      data-type="mkdf-elements-custom-padding"
                                      scoped
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "\n                                                    @media only screen and (min-width: 1024px) and (max-width: 1280px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-813827 {\n                                                    padding: 131px 12% 145px 12% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-813827 {\n                                                    padding: 139px 22% 144px 22% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-813827 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (max-width: 480px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-813827 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                 ",
                                      }}
                                    />
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h3
                                          style={{
                                            textAlign: "center",
                                            color: "#ffffff",
                                          }}
                                        >
                                          <span style={{ color: "#525252" }}>
                                            <strong>Content </strong>
                                          </span>
                                        </h3>
                                        <h3
                                          style={{
                                            textAlign: "center",
                                            color: "#ffffff",
                                          }}
                                        >
                                          <span style={{ color: "#525252" }}>
                                            <strong>Creation</strong>
                                          </span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h6
                                          style={{
                                            textAlign: "center",
                                            color: "#525252",
                                            lineHeight: 34,
                                          }}
                                        >
                                          Expertly crafted, SEO optimised
                                          articles that will act as the fuel on
                                          the fire of your social campaigns,
                                          lead to organic search traffic to your
                                          site and build trust with your
                                          customers.
                                        </h6>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <a
                                      href="#"
                                      target="_self"
                                      style={{ border: "1px solid #8cd6c6" }}
                                      className="mkdf-btn mkdf-btn-small mkdf-btn-solid mkdf-btn-icon"
                                    >
                                      <span className="mkdf-btn-text">
                                        Learn More
                                      </span>
                                      <span className="mkdf-btn-icon-holder">
                                        <i className="mkdf-icon-font-awesome fa fa-chevron-right " />{" "}
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mkdf-elements-holder mkdf-three-columns mkdf-responsive-mode-768">
                              <div
                                className="mkdf-elements-holder-item mkdf-horizontal-alignment-center mkdf-eh-clickable mkdf-ehi-hover-overlay"
                                style={{
                                  backgroundImage:
                                    "url(https://www.giraffesocialmedia.co.uk/wp-content/uploads/2023/01/MicrosoftTeams-image-59.png)",
                                }}
                              >
                                <a
                                  className="mkdf-eh-item-link"
                                  href="https://www.giraffesocialmedia.co.uk/facebook-advertising/"
                                  target="_self"
                                />
                                <div
                                  className="mkdf-elements-holder-item-overlay"
                                  style={{ backgroundColor: "#8cd6c6" }}
                                />
                                <div className="mkdf-elements-holder-item-inner">
                                  <div
                                    className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-639703"
                                    style={{ padding: "139px 19% 153px 19%" }}
                                  >
                                    <style
                                      type="text/css"
                                      data-type="mkdf-elements-custom-padding"
                                      scoped
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "\n                                                    @media only screen and (min-width: 1024px) and (max-width: 1280px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-639703 {\n                                                    padding: 131px 12% 145px 12% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-639703 {\n                                                    padding: 139px 22% 144px 22% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-639703 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (max-width: 480px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-639703 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                 ",
                                      }}
                                    />
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h3
                                          style={{
                                            textAlign: "center",
                                            color: "#ffffff",
                                          }}
                                        >
                                          <span style={{ color: "#525252" }}>
                                            <strong>
                                              Facebook Advertising
                                            </strong>
                                          </span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h6
                                          style={{
                                            textAlign: "center",
                                            color: "#ffffff",
                                            lineHeight: 34,
                                          }}
                                        >
                                          <span style={{ color: "#525252" }}>
                                            With 1.5 billion people logging on
                                            to Facebook every day, our expert
                                            team will maximise your ad spend,
                                            helping you achieve; page likes,
                                            brand reach, sales, leads, app
                                            installs and more.
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <a
                                      href="#"
                                      target="_self"
                                      style={{
                                        color: "#fdf5e6",
                                        backgroundColor: "#525252",
                                        border: "1px solid #fdf5e6",
                                      }}
                                      className="mkdf-btn mkdf-btn-small mkdf-btn-solid mkdf-btn-icon"
                                    >
                                      <span className="mkdf-btn-text">
                                        Learn More
                                      </span>
                                      <span className="mkdf-btn-icon-holder">
                                        <i className="mkdf-icon-font-awesome fa fa-chevron-right " />{" "}
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="mkdf-elements-holder-item mkdf-horizontal-alignment-center mkdf-eh-clickable mkdf-ehi-hover-overlay"
                                style={{
                                  backgroundImage:
                                    "url(https://www.giraffesocialmedia.co.uk/wp-content/uploads/2023/01/4.png)",
                                }}
                              >
                                <a
                                  className="mkdf-eh-item-link"
                                  href="https://www.giraffesocialmedia.co.uk/instagram-advertising/"
                                  target="_self"
                                />
                                <div
                                  className="mkdf-elements-holder-item-overlay"
                                  style={{ backgroundColor: "#fdf5e6" }}
                                />
                                <div className="mkdf-elements-holder-item-inner">
                                  <div
                                    className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-321883"
                                    style={{ padding: "139px 19% 153px 19%" }}
                                  >
                                    <style
                                      type="text/css"
                                      data-type="mkdf-elements-custom-padding"
                                      scoped
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "\n                                                    @media only screen and (min-width: 1024px) and (max-width: 1280px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-321883 {\n                                                    padding: 131px 12% 145px 12% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-321883 {\n                                                    padding: 139px 22% 144px 22% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-321883 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (max-width: 480px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-321883 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                 ",
                                      }}
                                    />
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h3
                                          style={{
                                            textAlign: "center",
                                            color: "#ffffff",
                                          }}
                                        >
                                          <span style={{ color: "#525252" }}>
                                            <strong>
                                              Instagram Advertising
                                            </strong>
                                          </span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h6
                                          style={{
                                            textAlign: "center",
                                            color: "#525252",
                                            lineHeight: 34,
                                          }}
                                        >
                                          Need a paid strategy for your
                                          Instagram business account? Our
                                          experience enables us to generate huge
                                          results for your account. Instagram
                                          promotion is more important than ever.
                                        </h6>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <a
                                      href="#"
                                      target="_self"
                                      style={{ border: "1px solid #8cd6c6" }}
                                      className="mkdf-btn mkdf-btn-small mkdf-btn-solid mkdf-btn-icon"
                                    >
                                      <span className="mkdf-btn-text">
                                        Learn More
                                      </span>
                                      <span className="mkdf-btn-icon-holder">
                                        <i className="mkdf-icon-font-awesome fa fa-chevron-right " />{" "}
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="mkdf-elements-holder-item mkdf-horizontal-alignment-center mkdf-eh-clickable mkdf-ehi-hover-overlay"
                                style={{
                                  backgroundImage:
                                    "url(https://www.giraffesocialmedia.co.uk/wp-content/uploads/2023/01/MicrosoftTeams-image-61.png)",
                                }}
                              >
                                <a
                                  className="mkdf-eh-item-link"
                                  href="https://www.giraffesocialmedia.co.uk/linkedin-advertising/"
                                  target="_self"
                                />
                                <div
                                  className="mkdf-elements-holder-item-overlay"
                                  style={{ backgroundColor: "#8cd6c6" }}
                                />
                                <div className="mkdf-elements-holder-item-inner">
                                  <div
                                    className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-291204"
                                    style={{ padding: "139px 19% 153px 19%" }}
                                  >
                                    <style
                                      type="text/css"
                                      data-type="mkdf-elements-custom-padding"
                                      scoped
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "\n                                                    @media only screen and (min-width: 1024px) and (max-width: 1280px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-291204 {\n                                                    padding: 131px 12% 145px 12% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-291204 {\n                                                    padding: 139px 22% 144px 22% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-291204 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (max-width: 480px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-291204 {\n                                                    padding: 139px 8% 153px 8% !important;\n                                                    }\n                                                    }\n                                                 ",
                                      }}
                                    />
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h3
                                          style={{
                                            textAlign: "center",
                                            color: "#ffffff",
                                          }}
                                        >
                                          <span style={{ color: "#525252" }}>
                                            <strong>
                                              LinkedIn Advertising
                                            </strong>
                                          </span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h6
                                          style={{
                                            textAlign: "center",
                                            color: "#ffffff",
                                            lineHeight: 34,
                                          }}
                                        >
                                          <span style={{ color: "#525252" }}>
                                            Utilising LinkedIn advertising is a
                                            great strategy for B2B companies. We
                                            help your LinkedIn business account
                                            create brand awareness, generate web
                                            traffic and create leads.
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 23 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <a
                                      href="#"
                                      target="_self"
                                      style={{
                                        color: "#fdf5e6",
                                        backgroundColor: "#525252",
                                        border: "1px solid #fdf5e6",
                                      }}
                                      className="mkdf-btn mkdf-btn-small mkdf-btn-solid mkdf-btn-icon"
                                    >
                                      <span className="mkdf-btn-text">
                                        Learn More
                                      </span>
                                      <span className="mkdf-btn-icon-holder">
                                        <i className="mkdf-icon-font-awesome fa fa-chevron-right " />{" "}
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="mkdf-call-to-action normal"
                              style={{ backgroundColor: "#f8c9d2" }}
                            >
                              <div className="mkdf-container-inner">
                                <div
                                  className="mkdf-call-to-action-row-75-25 clearfix"
                                  style={{ padding: "71px 0px" }}
                                >
                                  <div className="mkdf-text-wrapper mkdf-call-to-action-column1 mkdf-call-to-action-cell">
                                    <div className="mkdf-call-to-action-text">
                                      <p style={{ fontWeight: 400 }}>
                                        <strong>
                                          We custom build packages to achieve
                                          your objectives…
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="mkdf-button-wrapper mkdf-call-to-action-column2 mkdf-call-to-action-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    <a
                                      href="#contact"
                                      target="_blank"
                                      className="mkdf-btn mkdf-btn-medium mkdf-btn-solid mkdf-btn-bckg-hover"
                                    >
                                      {" "}
                                      <span className="mkdf-btn-top-shadow" />{" "}
                                      <span className="mkdf-btn-text">
                                        Request a proposal
                                      </span>{" "}
                                      <span className="mkdf-btn-bottom-shadow" />{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-mkdf-anchor="pricing"
                    className="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1673876262633 mkdf-content-aligment-left mkdf-grid-section"
                    style={{}}
                  >
                    <div className="clearfix mkdf-section-inner">
                      <div className="mkdf-section-inner-margin clearfix">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                  <h2 style={{ textAlign: "center" }}>
                                    <span style={{ color: "#fdf5e6" }}>
                                      pricing
                                    </span>
                                  </h2>
                                </div>
                              </div>
                              <div className="mkdf-elements-holder mkdf-responsive-mode-768">
                                <div className="mkdf-elements-holder-item ">
                                  <div className="mkdf-elements-holder-item-inner">
                                    <div
                                      className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-902632"
                                      style={{ padding: "19px 22% 54px 22%" }}
                                    >
                                      <style
                                        type="text/css"
                                        data-type="mkdf-elements-custom-padding"
                                        scoped
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            "\n                                                       @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-902632 {\n                                                       padding: 19px 5% 54px 5% !important;\n                                                       }\n                                                       }\n                                                       @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-902632 {\n                                                       padding: 19px 0% 54px 0% !important;\n                                                       }\n                                                       }\n                                                       @media only screen and (max-width: 480px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-902632 {\n                                                       padding: 19px 0% 54px 0% !important;\n                                                       }\n                                                       }\n                                                    ",
                                        }}
                                      />
                                      <span
                                        className="mkdf-section-subtitle"
                                        style={{
                                          textAlign: "center",
                                          color: "#fdf5e6",
                                        }}
                                      >
                                        Our tailored packages start from the
                                        following prices...
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mkdf-pricing-tables clearfix mkdf-four-columns">
                                <div className="mkdf-price-table">
                                  <div className="mkdf-price-table-inner">
                                    <ul>
                                      <li className="mkdf-table-title">
                                        <h5 className="mkdf-title-content">
                                          Brand Awareness
                                        </h5>
                                      </li>
                                      <li className="mkdf-table-prices">
                                        <div className="mkdf-price-in-table">
                                          <span className="mkdf-price-holder">
                                            <sup className="mkdf-value">
                                              From
                                            </sup>
                                            <span className="mkdf-price">
                                              £1500
                                            </span>
                                          </span>
                                          <span className="mkdf-mark">
                                            per month
                                          </span>
                                        </div>
                                      </li>
                                      <li className="mkdf-table-content">
                                        <ul>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Expert Strategy Development
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Objective Orientated Posts
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Boosting Posts to Your Market
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Guaranteed Social Growth
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Detailed Monthly Reports
                                            </span>
                                          </li>
                                        </ul>
                                      </li>
                                      <li className="mkdf-price-button">
                                        <a
                                          href="#contact"
                                          target="_self"
                                          className="mkdf-btn mkdf-btn-small mkdf-btn-solid mkdf-btn-bckg-hover mkdf-btn-solid-no-shadow"
                                        >
                                          {" "}
                                          <span className="mkdf-btn-top-shadow" />{" "}
                                          <span className="mkdf-btn-text">
                                            Request a proposal
                                          </span>{" "}
                                          <span className="mkdf-btn-bottom-shadow" />{" "}
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="mkdf-price-table">
                                  <div className="mkdf-price-table-inner">
                                    <ul>
                                      <li className="mkdf-table-title">
                                        <h5 className="mkdf-title-content">
                                          Online Sales
                                        </h5>
                                      </li>
                                      <li className="mkdf-table-prices">
                                        <div className="mkdf-price-in-table">
                                          <span className="mkdf-price-holder">
                                            <sup className="mkdf-value">
                                              From
                                            </sup>
                                            <span className="mkdf-price">
                                              £2000
                                            </span>
                                          </span>
                                          <span className="mkdf-mark">
                                            per month
                                          </span>
                                        </div>
                                      </li>
                                      <li className="mkdf-table-content">
                                        <ul>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Expert Strategy Development
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Objective Orientated Posts
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Generating Web Traffic
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Remarketed Conversion Ads
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              ROI Revealing Monthly Reports
                                            </span>
                                          </li>
                                        </ul>
                                      </li>
                                      <li className="mkdf-price-button">
                                        <a
                                          href="#contact"
                                          target="_self"
                                          className="mkdf-btn mkdf-btn-small mkdf-btn-solid mkdf-btn-bckg-hover mkdf-btn-solid-no-shadow"
                                        >
                                          {" "}
                                          <span className="mkdf-btn-top-shadow" />{" "}
                                          <span className="mkdf-btn-text">
                                            Request a proposal
                                          </span>{" "}
                                          <span className="mkdf-btn-bottom-shadow" />{" "}
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="mkdf-price-table">
                                  <div className="mkdf-price-table-inner">
                                    <ul>
                                      <li className="mkdf-table-title">
                                        <h5 className="mkdf-title-content">
                                          Lead Generation
                                        </h5>
                                      </li>
                                      <li className="mkdf-table-prices">
                                        <div className="mkdf-price-in-table">
                                          <span className="mkdf-price-holder">
                                            <sup className="mkdf-value">
                                              From
                                            </sup>
                                            <span className="mkdf-price">
                                              £2000
                                            </span>
                                          </span>
                                          <span className="mkdf-mark">
                                            per month
                                          </span>
                                        </div>
                                      </li>
                                      <li className="mkdf-table-content">
                                        <ul>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Expert Strategy Development
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Objective Orientated Posts
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Targeted Lead Advertising
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Leads Sent to Your Inbox
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Detailed Monthly Reports
                                            </span>
                                          </li>
                                        </ul>
                                      </li>
                                      <li className="mkdf-price-button">
                                        <a
                                          href="#contact"
                                          target="_self"
                                          className="mkdf-btn mkdf-btn-small mkdf-btn-solid mkdf-btn-bckg-hover mkdf-btn-solid-no-shadow"
                                        >
                                          {" "}
                                          <span className="mkdf-btn-top-shadow" />{" "}
                                          <span className="mkdf-btn-text">
                                            Request a proposal
                                          </span>{" "}
                                          <span className="mkdf-btn-bottom-shadow" />{" "}
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="mkdf-price-table">
                                  <div className="mkdf-price-table-inner">
                                    <ul>
                                      <li className="mkdf-table-title">
                                        <h5 className="mkdf-title-content">
                                          App Installs
                                        </h5>
                                      </li>
                                      <li className="mkdf-table-prices">
                                        <div className="mkdf-price-in-table">
                                          <span className="mkdf-price-holder">
                                            <sup className="mkdf-value">
                                              From
                                            </sup>
                                            <span className="mkdf-price">
                                              £2000
                                            </span>
                                          </span>
                                          <span className="mkdf-mark">
                                            per month
                                          </span>
                                        </div>
                                      </li>
                                      <li className="mkdf-table-content">
                                        <ul>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Expert Strategy Development
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Objective Orientated Posts
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              App Install Advertising
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              App Brand Awareness
                                            </span>
                                          </li>
                                          <li>
                                            <span style={{ color: "#525252" }}>
                                              Detailed Monthly Reports
                                            </span>
                                          </li>
                                        </ul>
                                      </li>
                                      <li className="mkdf-price-button">
                                        <a
                                          href="#contact"
                                          target="_self"
                                          className="mkdf-btn mkdf-btn-small mkdf-btn-solid mkdf-btn-bckg-hover mkdf-btn-solid-no-shadow"
                                        >
                                          {" "}
                                          <span className="mkdf-btn-top-shadow" />{" "}
                                          <span className="mkdf-btn-text">
                                            Request a proposal
                                          </span>{" "}
                                          <span className="mkdf-btn-bottom-shadow" />{" "}
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="mkdf-call-to-action normal"
                              style={{ backgroundColor: "#525252" }}
                            >
                              <div className="mkdf-container-inner">
                                <div
                                  className="mkdf-call-to-action-row-75-25 clearfix"
                                  style={{ padding: "71px 0px" }}
                                >
                                  <div className="mkdf-text-wrapper mkdf-call-to-action-column1 mkdf-call-to-action-cell">
                                    <div className="mkdf-call-to-action-text">
                                      <span style={{ color: "#ffffff" }}>
                                        Get in touch and let’s discuss your
                                        goals
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className="mkdf-button-wrapper mkdf-call-to-action-column2 mkdf-call-to-action-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    <a
                                      href="#contact"
                                      target="_blank"
                                      style={{
                                        color: "#525252",
                                        backgroundColor: "#ffffff",
                                      }}
                                      className="mkdf-btn mkdf-btn-medium mkdf-btn-solid mkdf-btn-bckg-hover"
                                    >
                                      {" "}
                                      <span className="mkdf-btn-top-shadow" />{" "}
                                      <span className="mkdf-btn-text">
                                        Request a proposal
                                      </span>{" "}
                                      <span className="mkdf-btn-bottom-shadow" />{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-mkdf-anchor="portfolio"
                    className="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1520531639960 mkdf-content-aligment-center mkdf-grid-section"
                    style={{}}
                  >
                    <div className="clearfix mkdf-section-inner">
                      <div className="mkdf-section-inner-margin clearfix">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                  <h2
                                    style={{
                                      textAlign: "center",
                                      color: "#41294a",
                                    }}
                                  >
                                    <span style={{ color: "#525252" }}>
                                      our portfolio
                                    </span>
                                  </h2>
                                </div>
                              </div>
                              <div className="mkdf-elements-holder mkdf-responsive-mode-768">
                                <div className="mkdf-elements-holder-item ">
                                  <div className="mkdf-elements-holder-item-inner">
                                    <div
                                      className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-839518"
                                      style={{ padding: "19px 22% 54px 22%" }}
                                    >
                                      <style
                                        type="text/css"
                                        data-type="mkdf-elements-custom-padding"
                                        scoped
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            "\n                                                       @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-839518 {\n                                                       padding: 19px 5% 54px 5% !important;\n                                                       }\n                                                       }\n                                                       @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-839518 {\n                                                       padding: 19px 0% 54px 0% !important;\n                                                       }\n                                                       }\n                                                       @media only screen and (max-width: 480px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-839518 {\n                                                       padding: 19px 0% 54px 0% !important;\n                                                       }\n                                                       }\n                                                    ",
                                        }}
                                      />
                                      <span
                                        className="mkdf-section-subtitle"
                                        style={{
                                          textAlign: "center",
                                          color: "#525252",
                                        }}
                                      >
                                        We’ve enjoyed working with awesome
                                        clients like...
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mkdf-portfolio-filter-holder mkdf-masonry-filter">
                                <div className="mkdf-portfolio-filter-holder-inner"></div>
                              </div>
                              <div
                                className="mkdf-portfolio-list-holder-outer mkdf-ptf-masonry mkdf-ptf-with-space mkdf-ptf-hover-zoom-out-simple mkdf-ptfm-three-columns mkdf-ptf-has-filter mkdf-ptf-masonry-filter"
                                data-next-page={2}
                                data-type="masonry"
                                data-columns={3}
                                data-grid-size="three"
                                data-order-by="menu_order"
                                data-order="ASC"
                                data-number={9}
                                data-image-size="full"
                                data-hover-type="zoom-out-simple"
                                data-filter="yes"
                                data-filter-order-by="name"
                                data-category="home"
                                data-show-more="none"
                                data-title-tag="h3"
                                data-max-num-pages={1}
                              >
                                <div className="mkdf-portfolio-list-holder clearfix">
                                  <div className="mkdf-portfolio-list-masonry-grid-sizer" />
                                  <div className="mkdf-portfolio-list-masonry-grid-gutter" />
                                  <article className="mkdf-portfolio-item mkdf-default-masonry-item portfolio_category_2260">
                                    <div className="mkdf-portfolio-item-inner">
                                      <a
                                        className="mkdf-portfolio-link"
                                        href="https://www.giraffesocialmedia.co.uk/portfolio-item/casillero-del-diablo/"
                                      />
                                      <div className="mkdf-item-image-holder">
                                        <div className="mkdf-item-image-holder-inner">
                                          <img
                                            width={550}
                                            height={550}
                                            src="images/Casillero-del-Diablo-550x550.jpg"
                                            className="attachment-cortex_mikado_square size-cortex_mikado_square wp-post-image"
                                            alt="Casillero del Diablo portfolio"
                                            decoding="async"
                                            srcSet="https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Casillero-del-Diablo-550x550.jpg 550w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Casillero-del-Diablo-150x150.jpg 150w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Casillero-del-Diablo-300x300.jpg 300w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Casillero-del-Diablo-768x768.jpg 768w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Casillero-del-Diablo.jpg 1000w"
                                            sizes="(max-width: 550px) 100vw, 550px"
                                          />
                                        </div>
                                      </div>
                                      <div className="mkdf-item-text-overlay">
                                        <div className="mkdf-item-text-overlay-inner">
                                          <div className="mkdf-item-text-holder">
                                            <h3 className="mkdf-item-title">
                                              <a
                                                className="mkdf-portfolio-title-link"
                                                href="https://www.giraffesocialmedia.co.uk/portfolio-item/casillero-del-diablo/"
                                              >
                                                Casillero del Diablo{" "}
                                              </a>
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                  <article className="mkdf-portfolio-item mkdf-default-masonry-item portfolio_category_2260">
                                    <div className="mkdf-portfolio-item-inner">
                                      <a
                                        className="mkdf-portfolio-link"
                                        href="https://www.giraffesocialmedia.co.uk/portfolio-item/park-resorts/"
                                      />
                                      <div className="mkdf-item-image-holder">
                                        <div className="mkdf-item-image-holder-inner">
                                          <img
                                            width={550}
                                            height={550}
                                            src="images/Park-Resorts-550x550.jpg"
                                            className="attachment-cortex_mikado_square size-cortex_mikado_square wp-post-image"
                                            alt="Park Resorts"
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Park-Resorts-550x550.jpg 550w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Park-Resorts-150x150.jpg 150w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Park-Resorts-300x300.jpg 300w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Park-Resorts-768x768.jpg 768w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Park-Resorts.jpg 1000w"
                                            sizes="(max-width: 550px) 100vw, 550px"
                                          />
                                        </div>
                                      </div>
                                      <div className="mkdf-item-text-overlay">
                                        <div className="mkdf-item-text-overlay-inner">
                                          <div className="mkdf-item-text-holder">
                                            <h3 className="mkdf-item-title">
                                              <a
                                                className="mkdf-portfolio-title-link"
                                                href="https://www.giraffesocialmedia.co.uk/portfolio-item/park-resorts/"
                                              >
                                                Park Resorts{" "}
                                              </a>
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                  <article className="mkdf-portfolio-item mkdf-default-masonry-item portfolio_category_2260">
                                    <div className="mkdf-portfolio-item-inner">
                                      <a
                                        className="mkdf-portfolio-link"
                                        href="https://www.giraffesocialmedia.co.uk/portfolio-item/encyclopaedia-britannica/"
                                      />
                                      <div className="mkdf-item-image-holder">
                                        <div className="mkdf-item-image-holder-inner">
                                          <img
                                            width={550}
                                            height={550}
                                            src="images/Britannica-550x550.jpg"
                                            className="attachment-cortex_mikado_square size-cortex_mikado_square wp-post-image"
                                            alt="Britannica"
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Britannica-550x550.jpg 550w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Britannica-150x150.jpg 150w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Britannica-300x300.jpg 300w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Britannica-768x768.jpg 768w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Britannica.jpg 1000w"
                                            sizes="(max-width: 550px) 100vw, 550px"
                                          />
                                        </div>
                                      </div>
                                      <div className="mkdf-item-text-overlay">
                                        <div className="mkdf-item-text-overlay-inner">
                                          <div className="mkdf-item-text-holder">
                                            <h3 className="mkdf-item-title">
                                              <a
                                                className="mkdf-portfolio-title-link"
                                                href="https://www.giraffesocialmedia.co.uk/portfolio-item/encyclopaedia-britannica/"
                                              >
                                                Encyclopædia Britannica{" "}
                                              </a>
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                  <article className="mkdf-portfolio-item mkdf-default-masonry-item portfolio_category_2260">
                                    <div className="mkdf-portfolio-item-inner">
                                      <a
                                        className="mkdf-portfolio-link"
                                        href="https://www.giraffesocialmedia.co.uk/portfolio-item/cluse-watches/"
                                      />
                                      <div className="mkdf-item-image-holder">
                                        <div className="mkdf-item-image-holder-inner">
                                          <img
                                            width={550}
                                            height={550}
                                            src="images/Cluse-Watch-550x550.jpg"
                                            className="attachment-cortex_mikado_square size-cortex_mikado_square wp-post-image"
                                            alt="Cluse Watches Portfolio"
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Cluse-Watch-550x550.jpg 550w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Cluse-Watch-150x150.jpg 150w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Cluse-Watch-300x300.jpg 300w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Cluse-Watch-768x768.jpg 768w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Cluse-Watch.jpg 1000w"
                                            sizes="(max-width: 550px) 100vw, 550px"
                                          />
                                        </div>
                                      </div>
                                      <div className="mkdf-item-text-overlay">
                                        <div className="mkdf-item-text-overlay-inner">
                                          <div className="mkdf-item-text-holder">
                                            <h3 className="mkdf-item-title">
                                              <a
                                                className="mkdf-portfolio-title-link"
                                                href="https://www.giraffesocialmedia.co.uk/portfolio-item/cluse-watches/"
                                              >
                                                CLUSE Watches{" "}
                                              </a>
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                  <article className="mkdf-portfolio-item mkdf-default-masonry-item portfolio_category_2260">
                                    <div className="mkdf-portfolio-item-inner">
                                      <a
                                        className="mkdf-portfolio-link"
                                        href="https://www.giraffesocialmedia.co.uk/portfolio-item/air-france/"
                                      />
                                      <div className="mkdf-item-image-holder">
                                        <div className="mkdf-item-image-holder-inner">
                                          <img
                                            width={550}
                                            height={550}
                                            src="images/Air-France-550x550.jpg"
                                            className="attachment-cortex_mikado_square size-cortex_mikado_square wp-post-image"
                                            alt="Air France Portfolio"
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Air-France-550x550.jpg 550w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Air-France-150x150.jpg 150w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Air-France-300x300.jpg 300w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Air-France-768x768.jpg 768w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Air-France.jpg 1000w"
                                            sizes="(max-width: 550px) 100vw, 550px"
                                          />
                                        </div>
                                      </div>
                                      <div className="mkdf-item-text-overlay">
                                        <div className="mkdf-item-text-overlay-inner">
                                          <div className="mkdf-item-text-holder">
                                            <h3 className="mkdf-item-title">
                                              <a
                                                className="mkdf-portfolio-title-link"
                                                href="https://www.giraffesocialmedia.co.uk/portfolio-item/air-france/"
                                              >
                                                Air France{" "}
                                              </a>
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                  <article className="mkdf-portfolio-item mkdf-default-masonry-item portfolio_category_2260">
                                    <div className="mkdf-portfolio-item-inner">
                                      <a
                                        className="mkdf-portfolio-link"
                                        href="https://www.giraffesocialmedia.co.uk/portfolio-item/eko-atlantic/"
                                      />
                                      <div className="mkdf-item-image-holder">
                                        <div className="mkdf-item-image-holder-inner">
                                          <img
                                            width={550}
                                            height={550}
                                            src="images/EKO-Atlantic-550x550.jpg"
                                            className="attachment-cortex_mikado_square size-cortex_mikado_square wp-post-image"
                                            alt="EKO Atlantic"
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/EKO-Atlantic-550x550.jpg 550w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/EKO-Atlantic-150x150.jpg 150w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/EKO-Atlantic-300x300.jpg 300w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/EKO-Atlantic-768x768.jpg 768w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/EKO-Atlantic.jpg 1000w"
                                            sizes="(max-width: 550px) 100vw, 550px"
                                          />
                                        </div>
                                      </div>
                                      <div className="mkdf-item-text-overlay">
                                        <div className="mkdf-item-text-overlay-inner">
                                          <div className="mkdf-item-text-holder">
                                            <h3 className="mkdf-item-title">
                                              <a
                                                className="mkdf-portfolio-title-link"
                                                href="https://www.giraffesocialmedia.co.uk/portfolio-item/eko-atlantic/"
                                              >
                                                EKO Atlantic{" "}
                                              </a>
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                  <article className="mkdf-portfolio-item mkdf-default-masonry-item portfolio_category_2260">
                                    <div className="mkdf-portfolio-item-inner">
                                      <a
                                        className="mkdf-portfolio-link"
                                        href="https://www.giraffesocialmedia.co.uk/portfolio-item/goodyear-lifestyle/"
                                      />
                                      <div className="mkdf-item-image-holder">
                                        <div className="mkdf-item-image-holder-inner">
                                          <img
                                            width={550}
                                            height={550}
                                            src="images/Goodyear-Lifestyle1-550x550.jpg"
                                            className="attachment-cortex_mikado_square size-cortex_mikado_square wp-post-image"
                                            alt="Goodyear Lifestyle"
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="https://www.giraffesocialmedia.co.uk/wp-content/uploads/2021/05/Goodyear-Lifestyle1-550x550.jpg 550w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2021/05/Goodyear-Lifestyle1-300x300.jpg 300w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2021/05/Goodyear-Lifestyle1-150x150.jpg 150w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2021/05/Goodyear-Lifestyle1-768x768.jpg 768w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2021/05/Goodyear-Lifestyle1.jpg 1000w"
                                            sizes="(max-width: 550px) 100vw, 550px"
                                          />
                                        </div>
                                      </div>
                                      <div className="mkdf-item-text-overlay">
                                        <div className="mkdf-item-text-overlay-inner">
                                          <div className="mkdf-item-text-holder">
                                            <h3 className="mkdf-item-title">
                                              <a
                                                className="mkdf-portfolio-title-link"
                                                href="https://www.giraffesocialmedia.co.uk/portfolio-item/goodyear-lifestyle/"
                                              >
                                                Goodyear Lifestyle{" "}
                                              </a>
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                  <article className="mkdf-portfolio-item mkdf-default-masonry-item portfolio_category_2260">
                                    <div className="mkdf-portfolio-item-inner">
                                      <a
                                        className="mkdf-portfolio-link"
                                        href="https://www.giraffesocialmedia.co.uk/portfolio-item/tracker/"
                                      />
                                      <div className="mkdf-item-image-holder">
                                        <div className="mkdf-item-image-holder-inner">
                                          <img
                                            width={550}
                                            height={550}
                                            src="images/Tracker-550x550.jpg"
                                            className="attachment-cortex_mikado_square size-cortex_mikado_square wp-post-image"
                                            alt="Tracker"
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="images/Tracker-550x550.jpg 550w, images/Tracker-300x300.jpg 300w, images/Tracker-150x150.jpg 150w, images/Tracker-768x768.jpg 768w, https://www.giraffesocialmedia.co.uk/wp-content/uploads/2021/05/Tracker.jpg 1000w"
                                            sizes="(max-width: 550px) 100vw, 550px"
                                          />
                                        </div>
                                      </div>
                                      <div className="mkdf-item-text-overlay">
                                        <div className="mkdf-item-text-overlay-inner">
                                          <div className="mkdf-item-text-holder">
                                            <h3 className="mkdf-item-title">
                                              <a
                                                className="mkdf-portfolio-title-link"
                                                href="https://www.giraffesocialmedia.co.uk/portfolio-item/tracker/"
                                              >
                                                Tracker{" "}
                                              </a>
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                  <article className="mkdf-portfolio-item mkdf-default-masonry-item portfolio_category_2260">
                                    <div className="mkdf-portfolio-item-inner">
                                      <a
                                        className="mkdf-portfolio-link"
                                        href="https://www.giraffesocialmedia.co.uk/portfolio-item/worx/"
                                      />
                                      <div className="mkdf-item-image-holder">
                                        <div className="mkdf-item-image-holder-inner">
                                          <img
                                            width={550}
                                            height={550}
                                            src="images/Worx2-550x550.jpg"
                                            className="attachment-cortex_mikado_square size-cortex_mikado_square wp-post-image"
                                            alt="Worx"
                                            decoding="async"
                                            loading="lazy"
                                            srcSet="images/Worx2-550x550.jpg 550w, images/Worx2-300x300.jpg 300w, images/Worx2-150x150.jpg 150w, images/Worx2-768x768.jpg 768w, images/Worx2.jpg 1000w"
                                            sizes="(max-width: 550px) 100vw, 550px"
                                          />
                                        </div>
                                      </div>
                                      <div className="mkdf-item-text-overlay">
                                        <div className="mkdf-item-text-overlay-inner">
                                          <div className="mkdf-item-text-holder">
                                            <h3 className="mkdf-item-title">
                                              <a
                                                className="mkdf-portfolio-title-link"
                                                href="https://www.giraffesocialmedia.co.uk/portfolio-item/worx/"
                                              >
                                                Worx{" "}
                                              </a>
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: 44 }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="mkdf-call-to-action normal"
                              style={{ backgroundColor: "#f8c9d2" }}
                            >
                              <div className="mkdf-container-inner">
                                <div
                                  className="mkdf-call-to-action-row-75-25 clearfix"
                                  style={{ padding: "71px 0px" }}
                                >
                                  <div className="mkdf-text-wrapper mkdf-call-to-action-column1 mkdf-call-to-action-cell">
                                    <div className="mkdf-call-to-action-text">
                                      <span style={{ color: "#525252" }}>
                                        Want to know how we’d achieve your
                                        objectives?
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className="mkdf-button-wrapper mkdf-call-to-action-column2 mkdf-call-to-action-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    <a
                                      href="#contact"
                                      target="_blank"
                                      style={{
                                        color: "#525252",
                                        backgroundColor: "#ffffff",
                                      }}
                                      className="mkdf-btn mkdf-btn-medium mkdf-btn-solid mkdf-btn-bckg-hover"
                                    >
                                      {" "}
                                      <span className="mkdf-btn-top-shadow" />{" "}
                                      <span className="mkdf-btn-text">
                                        Request a proposal
                                      </span>{" "}
                                      <span className="mkdf-btn-bottom-shadow" />{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-mkdf-anchor="team"
                    className="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1520608841290 mkdf-content-aligment-center mkdf-grid-section"
                    style={{}}
                  >
                    <div className="clearfix mkdf-section-inner">
                      <div className="mkdf-section-inner-margin clearfix">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                  <h2
                                    style={{
                                      textAlign: "center",
                                      color: "#41294a",
                                    }}
                                  >
                                    <span style={{ color: "#525252" }}>
                                      meet the team
                                    </span>
                                  </h2>
                                </div>
                              </div>
                              <div className="mkdf-elements-holder mkdf-responsive-mode-768">
                                <div className="mkdf-elements-holder-item ">
                                  <div className="mkdf-elements-holder-item-inner">
                                    <div
                                      className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-697556"
                                      style={{ padding: "19px 22% 54px 22%" }}
                                    >
                                      <style
                                        type="text/css"
                                        data-type="mkdf-elements-custom-padding"
                                        scoped
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            "\n                                                       @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-697556 {\n                                                       padding: 19px 5% 54px 5% !important;\n                                                       }\n                                                       }\n                                                       @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-697556 {\n                                                       padding: 19px 0% 54px 0% !important;\n                                                       }\n                                                       }\n                                                       @media only screen and (max-width: 480px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-697556 {\n                                                       padding: 19px 0% 54px 0% !important;\n                                                       }\n                                                       }\n                                                    ",
                                        }}
                                      />
                                      <span
                                        className="mkdf-section-subtitle"
                                        style={{
                                          textAlign: "center",
                                          color: "#525252",
                                        }}
                                      >
                                        Our wide range of skills, qualifications
                                        and experiences make us who we are.
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650552971">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Kane-Lodge-2022-New.jpg"
                                    className="attachment-full size-full"
                                    alt="Kane Lodge"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Kane-Lodge-2022-New.jpg 600w, images/Kane-Lodge-2022-New-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Kane Lodge
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Managing Director
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650560410">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Phil-Treagus-2022-New.jpg"
                                    className="attachment-full size-full"
                                    alt="Phil Treagus"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Phil-Treagus-2022-New.jpg 600w, images/Phil-Treagus-2022-New-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Phil Treagus
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Managing Director
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650579713">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Kate-Istead-2022-New.jpg"
                                    className="attachment-full size-full"
                                    alt="Kate Istead"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Kate-Istead-2022-New.jpg 600w, images/Kate-Istead-2022-New-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Kate Istead
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Head of Operations
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650590467">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Iliyana-Rusanova-2022-New.jpg"
                                    className="attachment-full size-full"
                                    alt="Iliyana Rusanova"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Iliyana-Rusanova-2022-New.jpg 600w, images/Iliyana-Rusanova-2022-New-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Iliyana Rusanova
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Office Manager
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650552971">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Daniella-Couve-2022-New.jpg"
                                    className="attachment-full size-full"
                                    alt="Daniella Couve"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Daniella-Couve-2022-New.jpg 600w, images/Daniella-Couve-2022-New-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Daniella Couve
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Senior Social Media Manager
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650560410">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Eleanor-Wall-Grey.jpg"
                                    className="attachment-full size-full"
                                    alt="Eleanor Wall"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Eleanor-Wall-Grey.jpg 600w, images/Eleanor-Wall-Grey-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Eleanor Wall
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Social Media Manager
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650579713">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Samuel-Stroud-2023-Grey.jpg"
                                    className="attachment-full size-full"
                                    alt="Samuel Stroud"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Samuel-Stroud-2023-Grey.jpg 600w, images/Samuel-Stroud-2023-Grey-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Samuel Stroud
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Creative Manager
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650590467">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Darran-Askew-Grey.jpg"
                                    className="attachment-full size-full"
                                    alt="Darran Askew"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Darran-Askew-Grey.jpg 600w, images/Darran-Askew-Grey-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Darran Askew
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Social Media Manager
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650552971">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Katie-Wilkins-Aqua.jpg"
                                    className="attachment-full size-full"
                                    alt="Katie Wilkins"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Katie-Wilkins-Aqua.jpg 600w, images/Katie-Wilkins-Aqua-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Katie Wilkins
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Creative Manager
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650560410">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Rachel-Edge-2023-Aqua.jpg"
                                    className="attachment-full size-full"
                                    alt="Rachel Edge"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Rachel-Edge-2023-Aqua.jpg 600w, images/Rachel-Edge-2023-Aqua-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Rachel Edge
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Creative Manager
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650579713">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Georgia-Brady-2023-Aqua.jpg"
                                    className="attachment-full size-full"
                                    alt="Georgia Brady"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Georgia-Brady-2023-Aqua.jpg 600w, images/Georgia-Brady-2023-Aqua-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Georgia Brady
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Social Media Manager
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650590467">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Eve-Davis-Aqua.jpg"
                                    className="attachment-full size-full"
                                    alt="Eve Davis"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Eve-Davis-Aqua.jpg 600w, images/Eve-Davis-Aqua-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Eve Davis
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Creative Assistant
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650552971">
                          <div className="wpb_wrapper">
                            <div className="mkdf-team main-info-on-hover">
                              <div className="mkdf-team-inner">
                                <div className="mkdf-team-image">
                                  <img
                                    width={600}
                                    height={626}
                                    src="images/Nicole-Eksteen.jpg"
                                    className="attachment-full size-full"
                                    alt="Nicole Eksteen"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Nicole-Eksteen.jpg 600w, images/Nicole-Eksteen-288x300.jpg 288w"
                                    sizes="(max-width: 600px) 100vw, 600px"
                                  />
                                  <div className="mkdf-team-info-holder">
                                    <div className="mkdf-team-info">
                                      <div className="mkdf-team-info-inner">
                                        <div className="mkdf-team-title-holder">
                                          <div className="mkdf-team-title-holder-inner">
                                            <h4 className="mkdf-team-name">
                                              Nicole Eksteen
                                            </h4>
                                          </div>
                                          <div className="mkdf-team-position-holder">
                                            <p className="mkdf-team-position">
                                              Social Media Assistant
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650560410">
                          <div className="wpb_wrapper" />
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650579713">
                          <div className="wpb_wrapper" />
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1498650590467">
                          <div className="wpb_wrapper" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-mkdf-anchor="testimonials"
                    className="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1651744369930 mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: 60 }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="mkdf-testimonials-holder clearfix">
                              <div
                                className="mkdf-slick-slider-navigation-style mkdf-testimonials mkdf-testimonials-type-cortex"
                                data-animation-speed={10000}
                                data-dots-navigation="false"
                              >
                                <div className="mkdf-testimonial-content mkdf-testimonials10869">
                                  <div className="mkdf-testimonial-content-inner">
                                    <div className="mkdf-testimonials-quotes">
                                      ,,
                                    </div>
                                    <div className="mkdf-testimonial-text-outer">
                                      <p className="mkdf-testimonial-text">
                                        Fantastic service from Giraffe. Really
                                        friendly people and more importantly
                                        really impressive work.
                                      </p>
                                    </div>
                                    <div className="mkdf-testimonial-carousel-bottom">
                                      <div className="mkdf-testimonial-author">
                                        <span className="mkdf-testimonial-author-text">
                                          Mayur Patel{" "}
                                        </span>
                                        /{" "}
                                        <span className="mkdf-testimonials-job">
                                          Director of Mima Apps
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mkdf-testimonial-content mkdf-testimonials10697">
                                  <div className="mkdf-testimonial-content-inner">
                                    <div className="mkdf-testimonials-quotes">
                                      ,,
                                    </div>
                                    <div className="mkdf-testimonial-text-outer">
                                      <p className="mkdf-testimonial-text">
                                        We have seen an increase in business!
                                        The team come across as professional,
                                        friendly and efficient!
                                      </p>
                                    </div>
                                    <div className="mkdf-testimonial-carousel-bottom">
                                      <div className="mkdf-testimonial-author">
                                        <span className="mkdf-testimonial-author-text">
                                          Andrew Cole{" "}
                                        </span>
                                        /{" "}
                                        <span className="mkdf-testimonials-job">
                                          Director of Clapham Park Bathrooms{" "}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mkdf-testimonial-content mkdf-testimonials10696">
                                  <div className="mkdf-testimonial-content-inner">
                                    <div className="mkdf-testimonials-quotes">
                                      ,,
                                    </div>
                                    <div className="mkdf-testimonial-text-outer">
                                      <p className="mkdf-testimonial-text">
                                        Very friendly, innovative and motivated
                                        team. I'm very happy to have found this
                                        gem in Portsmouth!
                                      </p>
                                    </div>
                                    <div className="mkdf-testimonial-carousel-bottom">
                                      <div className="mkdf-testimonial-author">
                                        <span className="mkdf-testimonial-author-text">
                                          Dr Antonia Salzl{" "}
                                        </span>
                                        /{" "}
                                        <span className="mkdf-testimonials-job">
                                          Practice Owner and Dentist - The
                                          Dental Wave
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mkdf-testimonial-content mkdf-testimonials9915">
                                  <div className="mkdf-testimonial-content-inner">
                                    <div className="mkdf-testimonials-quotes">
                                      ,,
                                    </div>
                                    <div className="mkdf-testimonial-text-outer">
                                      <p className="mkdf-testimonial-text">
                                        They are experts in their field and
                                        offer an effective, yet affordable
                                        service that gets results.
                                      </p>
                                    </div>
                                    <div className="mkdf-testimonial-carousel-bottom">
                                      <div className="mkdf-testimonial-author">
                                        <span className="mkdf-testimonial-author-text">
                                          Jamie Elsom{" "}
                                        </span>
                                        /{" "}
                                        <span className="mkdf-testimonials-job">
                                          Director of Sociavise
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mkdf-testimonial-content mkdf-testimonials9197">
                                  <div className="mkdf-testimonial-content-inner">
                                    <div className="mkdf-testimonials-quotes">
                                      ,,
                                    </div>
                                    <div className="mkdf-testimonial-text-outer">
                                      <p className="mkdf-testimonial-text">
                                        The service I have received from Giraffe
                                        has been fantastic. They are ahead of
                                        their game.
                                      </p>
                                    </div>
                                    <div className="mkdf-testimonial-carousel-bottom">
                                      <div className="mkdf-testimonial-author">
                                        <span className="mkdf-testimonial-author-text">
                                          Collette McCrarren{" "}
                                        </span>
                                        /{" "}
                                        <span className="mkdf-testimonials-job">
                                          CEO of bodiBase
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mkdf-testimonial-content mkdf-testimonials9196">
                                  <div className="mkdf-testimonial-content-inner">
                                    <div className="mkdf-testimonials-quotes">
                                      ,,
                                    </div>
                                    <div className="mkdf-testimonial-text-outer">
                                      <p className="mkdf-testimonial-text">
                                        I have found Giraffe to be approachable,
                                        efficient and most importantly extremely
                                        effective.
                                      </p>
                                    </div>
                                    <div className="mkdf-testimonial-carousel-bottom">
                                      <div className="mkdf-testimonial-author">
                                        <span className="mkdf-testimonial-author-text">
                                          Diana Bretherick{" "}
                                        </span>
                                        /{" "}
                                        <span className="mkdf-testimonials-job">
                                          Author{" "}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mkdf-testimonial-content mkdf-testimonials9195">
                                  <div className="mkdf-testimonial-content-inner">
                                    <div className="mkdf-testimonials-quotes">
                                      ,,
                                    </div>
                                    <div className="mkdf-testimonial-text-outer">
                                      <p className="mkdf-testimonial-text">
                                        Giraffe have achieved the results I
                                        wanted, and more. I would recommend them
                                        to anyone.
                                      </p>
                                    </div>
                                    <div className="mkdf-testimonial-carousel-bottom">
                                      <div className="mkdf-testimonial-author">
                                        <span className="mkdf-testimonial-author-text">
                                          Zee Shah{" "}
                                        </span>
                                        /{" "}
                                        <span className="mkdf-testimonials-job">
                                          CEO of One Investments and BBC
                                          Apprentice Candidate
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: 100 }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="mkdf-call-to-action normal"
                              style={{ backgroundColor: "#525252" }}
                            >
                              <div className="mkdf-container-inner">
                                <div
                                  className="mkdf-call-to-action-row-75-25 clearfix"
                                  style={{ padding: "71px 0px" }}
                                >
                                  <div className="mkdf-text-wrapper mkdf-call-to-action-column1 mkdf-call-to-action-cell">
                                    <div className="mkdf-call-to-action-text">
                                      <span style={{ color: "#ffffff" }}>
                                        Want the social specialists on your
                                        team?
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className="mkdf-button-wrapper mkdf-call-to-action-column2 mkdf-call-to-action-cell"
                                    style={{ textAlign: "right" }}
                                  >
                                    <a
                                      href="#contact"
                                      target="_blank"
                                      style={{
                                        color: "#525252",
                                        backgroundColor: "#ffffff",
                                      }}
                                      className="mkdf-btn mkdf-btn-medium mkdf-btn-solid mkdf-btn-bckg-hover"
                                    >
                                      {" "}
                                      <span className="mkdf-btn-top-shadow" />{" "}
                                      <span className="mkdf-btn-text">
                                        Request a proposal
                                      </span>{" "}
                                      <span className="mkdf-btn-bottom-shadow" />{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-mkdf-anchor="team"
                    className="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1526577262662 mkdf-content-aligment-center mkdf-grid-section"
                    style={{}}
                  >
                    <div className="clearfix mkdf-section-inner">
                      <div className="mkdf-section-inner-margin clearfix">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                  <h2
                                    style={{
                                      textAlign: "center",
                                      color: "#41294a",
                                    }}
                                  >
                                    <span style={{ color: "#525252" }}>
                                      featured by
                                    </span>
                                  </h2>
                                </div>
                              </div>
                              <div className="mkdf-elements-holder mkdf-responsive-mode-768">
                                <div className="mkdf-elements-holder-item ">
                                  <div className="mkdf-elements-holder-item-inner">
                                    <div
                                      className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-272196"
                                      style={{ padding: "19px 22% 54px 22%" }}
                                    >
                                      <style
                                        type="text/css"
                                        data-type="mkdf-elements-custom-padding"
                                        scoped
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            "\n                                                       @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-272196 {\n                                                       padding: 19px 5% 54px 5% !important;\n                                                       }\n                                                       }\n                                                       @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-272196 {\n                                                       padding: 19px 0% 54px 0% !important;\n                                                       }\n                                                       }\n                                                       @media only screen and (max-width: 480px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-272196 {\n                                                       padding: 19px 0% 54px 0% !important;\n                                                       }\n                                                       }\n                                                    ",
                                        }}
                                      />
                                      <span
                                        className="mkdf-section-subtitle"
                                        style={{
                                          textAlign: "center",
                                          color: "#525252",
                                        }}
                                      >
                                        We have provided our social expertise to
                                        a range of media outlets...
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1526577298960 mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="mkdf-carousel-holder clearfix">
                              <div
                                className="mkdf-carousel mkdf-slick-slider-navigation-style"
                                data-items={4}
                                data-arrows-navigation="no"
                                data-dots-navigation="no"
                              >
                                <div className="mkdf-carousel-item-holder">
                                  <span className="mkdf-carousel-first-image-holder mkdf-has-hover-image mkdf-image-change">
                                    <img
                                      src="images/BBC-News.png"
                                      alt="BBC News"
                                    />
                                  </span>
                                  <span className="mkdf-carousel-second-image-holder mkdf-has-hover-image mkdf-image-change">
                                    <img
                                      src="images/BBC-News.png"
                                      alt="BBC News"
                                    />
                                  </span>
                                </div>
                                <div className="mkdf-carousel-item-holder">
                                  <span className="mkdf-carousel-first-image-holder mkdf-has-hover-image mkdf-image-change">
                                    <img
                                      src="images/Business-Insider.png"
                                      alt="Business Insider"
                                    />
                                  </span>
                                  <span className="mkdf-carousel-second-image-holder mkdf-has-hover-image mkdf-image-change">
                                    <img
                                      src="images/Business-Insider.png"
                                      alt="Business Insider"
                                    />
                                  </span>
                                </div>
                                <div className="mkdf-carousel-item-holder">
                                  <span className="mkdf-carousel-first-image-holder mkdf-has-hover-image mkdf-image-change">
                                    <img
                                      src="images/BBC-Radio.png"
                                      alt="BBC Radio"
                                    />
                                  </span>
                                  <span className="mkdf-carousel-second-image-holder mkdf-has-hover-image mkdf-image-change">
                                    <img
                                      src="images/BBC-Radio.png"
                                      alt="BBC Radio"
                                    />
                                  </span>
                                </div>
                                <div className="mkdf-carousel-item-holder">
                                  <span className="mkdf-carousel-first-image-holder mkdf-has-hover-image mkdf-image-change">
                                    <img
                                      src="images/Al-Jazeera.png"
                                      alt="Al-Jazeera"
                                    />
                                  </span>
                                  <span className="mkdf-carousel-second-image-holder mkdf-has-hover-image mkdf-image-change">
                                    <img
                                      src="images/Al-Jazeera.png"
                                      alt="Al-Jazeera"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-mkdf-anchor="podcast"
                    className="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1607082226880 mkdf-content-aligment-center mkdf-grid-section"
                    style={{}}
                  >
                    <div className="clearfix mkdf-section-inner">
                      <div className="mkdf-section-inner-margin clearfix">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                  <h2
                                    style={{
                                      textAlign: "center",
                                      color: "#41294a",
                                    }}
                                  >
                                    <span style={{ color: "#525252" }}>
                                      our podcast
                                    </span>
                                  </h2>
                                </div>
                              </div>
                              <div className="mkdf-elements-holder mkdf-responsive-mode-768">
                                <div className="mkdf-elements-holder-item ">
                                  <div className="mkdf-elements-holder-item-inner">
                                    <div
                                      className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-338272"
                                      style={{ padding: "19px 22% 54px 22%" }}
                                    >
                                      <style
                                        type="text/css"
                                        data-type="mkdf-elements-custom-padding"
                                        scoped
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            "\n                                                       @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-338272 {\n                                                       padding: 19px 5% 54px 5% !important;\n                                                       }\n                                                       }\n                                                       @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-338272 {\n                                                       padding: 19px 0% 54px 0% !important;\n                                                       }\n                                                       }\n                                                       @media only screen and (max-width: 480px) {\n                                                       .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-338272 {\n                                                       padding: 19px 0% 54px 0% !important;\n                                                       }\n                                                       }\n                                                    ",
                                        }}
                                      />
                                      <span
                                        className="mkdf-section-subtitle"
                                        style={{
                                          textAlign: "center",
                                          color: "#525252",
                                        }}
                                      >
                                        It's what social media managers are
                                        talking about...
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1606321658346 mkdf-content-aligment-left mkdf-grid-section"
                    style={{}}
                  >
                    <div className="clearfix mkdf-section-inner">
                      <div className="mkdf-section-inner-margin clearfix">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                                <div className="wpb_wrapper">
                                  <div id="buzzsprout-large-player-1265663" />
                                </div>
                              </div>
                              <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                                <div className="wpb_wrapper">
                                  <div
                                    id="podcast-subscribe-button-12256"
                                    className="secondline-psb-radius-style secondline-psb-alignment-none"
                                  >
                                    <div className="secondline-psb-subscribe-inline">
                                      <span className="secondline-psb-subscribe-Apple-Podcasts">
                                        <a
                                          onmouseover="this.style.color=`#ffffff`; this.style.backgroundColor=`#feb777`"
                                          onmouseout="this.style.color=`#ffffff`; this.style.backgroundColor=`#525252`"
                                          style={{
                                            color: "#ffffff",
                                            backgroundColor: "#525252",
                                          }}
                                          className="button podcast-subscribe-button"
                                          href="https://podcasts.apple.com/gb/podcast/the-giraffe-social-media-podcast/id1527405163"
                                          target="_blank"
                                        >
                                          <img
                                            className="secondline-psb-subscribe-img"
                                            src="https://www.giraffesocialmedia.co.uk/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Apple-Podcasts.svg"
                                            alt="Apple Podcasts"
                                          />
                                          Apple Podcasts
                                        </a>
                                      </span>
                                      <span className="secondline-psb-subscribe-Spotify">
                                        <a
                                          onmouseover="this.style.color=`#ffffff`; this.style.backgroundColor=`#feb777`"
                                          onmouseout="this.style.color=`#ffffff`; this.style.backgroundColor=`#525252`"
                                          style={{
                                            color: "#ffffff",
                                            backgroundColor: "#525252",
                                          }}
                                          className="button podcast-subscribe-button"
                                          href="https://open.spotify.com/show/4QhA4i79ybMsO7Fv5vxPe6"
                                          target="_blank"
                                        >
                                          <img
                                            className="secondline-psb-subscribe-img"
                                            src="https://www.giraffesocialmedia.co.uk/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Spotify.svg"
                                            alt="Spotify"
                                          />
                                          Spotify
                                        </a>
                                      </span>
                                      <span className="secondline-psb-subscribe-Google-Podcasts">
                                        <a
                                          onmouseover="this.style.color=`#ffffff`; this.style.backgroundColor=`#feb777`"
                                          onmouseout="this.style.color=`#ffffff`; this.style.backgroundColor=`#525252`"
                                          style={{
                                            color: "#ffffff",
                                            backgroundColor: "#525252",
                                          }}
                                          className="button podcast-subscribe-button"
                                          href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMjY1NjYzLnJzcw=="
                                          target="_blank"
                                        >
                                          <img
                                            className="secondline-psb-subscribe-img"
                                            src="https://www.giraffesocialmedia.co.uk/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Google-Podcasts.png"
                                            alt="Google Podcasts"
                                          />
                                          Google Podcasts
                                        </a>
                                      </span>
                                      <span className="secondline-psb-subscribe-Deezer">
                                        <a
                                          onmouseover="this.style.color=`#ffffff`; this.style.backgroundColor=`#feb777`"
                                          onmouseout="this.style.color=`#ffffff`; this.style.backgroundColor=`#525252`"
                                          style={{
                                            color: "#ffffff",
                                            backgroundColor: "#525252",
                                          }}
                                          className="button podcast-subscribe-button"
                                          href="https://www.deezer.com/en/show/1624792"
                                          target="_blank"
                                        >
                                          <img
                                            className="secondline-psb-subscribe-img"
                                            src="https://www.giraffesocialmedia.co.uk/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Deezer.svg"
                                            alt="Deezer"
                                          />
                                          Deezer
                                        </a>
                                      </span>
                                      <span className="secondline-psb-subscribe-Podcast-Addict">
                                        <a
                                          onmouseover="this.style.color=`#ffffff`; this.style.backgroundColor=`#feb777`"
                                          onmouseout="this.style.color=`#ffffff`; this.style.backgroundColor=`#525252`"
                                          style={{
                                            color: "#ffffff",
                                            backgroundColor: "#525252",
                                          }}
                                          className="button podcast-subscribe-button"
                                          href="https://podcastaddict.com/podcast/3068998"
                                          target="_blank"
                                        >
                                          <img
                                            className="secondline-psb-subscribe-img"
                                            src="https://www.giraffesocialmedia.co.uk/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Podcast-Addict.svg"
                                            alt="Podcast Addict"
                                          />
                                          Podcast Addict
                                        </a>
                                      </span>
                                      <span className="secondline-psb-subscribe-Podchaser">
                                        <a
                                          onmouseover="this.style.color=`#ffffff`; this.style.backgroundColor=`#feb777`"
                                          onmouseout="this.style.color=`#ffffff`; this.style.backgroundColor=`#525252`"
                                          style={{
                                            color: "#ffffff",
                                            backgroundColor: "#525252",
                                          }}
                                          className="button podcast-subscribe-button"
                                          href="https://www.podchaser.com/podcasts/the-giraffe-social-media-podca-1383430"
                                          target="_blank"
                                        >
                                          <img
                                            className="secondline-psb-subscribe-img"
                                            src="https://www.giraffesocialmedia.co.uk/wp-content/plugins/podcast-subscribe-buttons/assets/img/icons/Podchaser.svg"
                                            alt="Podchaser"
                                          />
                                          Podchaser
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: 10 }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: 100 }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_left">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width={1920}
                                    height={20}
                                    src="images/Aqua-Wave2.png"
                                    className="vc_single_image-img attachment-full"
                                    alt="Aqua Wave"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Aqua-Wave2.png 1920w, images/Aqua-Wave2-300x3.png 300w, images/Aqua-Wave2-1024x11.png 1024w, images/Aqua-Wave2-768x8.png 768w, images/Aqua-Wave2-1536x16.png 1536w"
                                    sizes="(max-width: 1920px) 100vw, 1920px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-mkdf-anchor="blog"
                    className="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1520531942703 mkdf-content-aligment-left mkdf-grid-section"
                    style={{}}
                  >
                    <div className="clearfix mkdf-section-inner">
                      <div className="mkdf-section-inner-margin clearfix">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="mkdf-blog-list-holder mkdf-boxes mkdf-three-columns">
                                <ul className="mkdf-blog-list">
                                  <li className="mkdf-blog-list-item clearfix mkdf-blog-list-title">
                                    <div className="mkdf-blog-list-item-table">
                                      <div className="mkdf-blog-list-item-table-cell">
                                        <div className="mkdf-section-title mkdf-section-align-center">
                                          Blog
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="mkdf-blog-list-item clearfix">
                                    <div className="mkdf-blog-list-item-table">
                                      <div className="mkdf-blog-list-item-table-cell">
                                        <div className="mkdf-item-text-holder">
                                          <div className="mkdf-item-info-section">
                                            <div className="mkdf-post-info-category">
                                              <a
                                                href="https://www.giraffesocialmedia.co.uk/category/social-media/"
                                                rel="category tag"
                                              >
                                                Social Media
                                              </a>
                                            </div>
                                            <div className="mkdf-post-info-date">
                                              April 6, 2023
                                            </div>
                                          </div>
                                          <h3 className="mkdf-item-title">
                                            <a href="https://www.giraffesocialmedia.co.uk/four-businesses-that-have-used-social-media-to-thrive/">
                                              Social Media Case Study: Four
                                              Businesses That Use Social to
                                              Thrive{" "}
                                            </a>
                                          </h3>
                                          <p className="mkdf-excerpt">
                                            In our social media case study
                                            collection, you can see a quick
                                            overview of how some of the
                                            world&amp;#82...
                                          </p>
                                          <div className="mkdf-post-info-author">
                                            <a
                                              className="mkdf-post-info-author-link"
                                              href="https://www.giraffesocialmedia.co.uk/author/admin/"
                                            >
                                              Phil Treagus-Evans{" "}
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="mkdf-blog-list-item clearfix">
                                    <div className="mkdf-blog-list-item-table">
                                      <div className="mkdf-blog-list-item-table-cell">
                                        <div className="mkdf-item-text-holder">
                                          <div className="mkdf-item-info-section">
                                            <div className="mkdf-post-info-category">
                                              <a
                                                href="https://www.giraffesocialmedia.co.uk/category/content-marketing/"
                                                rel="category tag"
                                              >
                                                Content Marketing
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://www.giraffesocialmedia.co.uk/category/infographic/"
                                                rel="category tag"
                                              >
                                                Infographic
                                              </a>
                                            </div>
                                            <div className="mkdf-post-info-date">
                                              April 3, 2023
                                            </div>
                                          </div>
                                          <h3 className="mkdf-item-title">
                                            <a href="https://www.giraffesocialmedia.co.uk/how-to-define-content-pillars-for-your-brand/">
                                              How to Define Content Pillars for
                                              Your Brand [INFOGRAPHIC]{" "}
                                            </a>
                                          </h3>
                                          <p className="mkdf-excerpt">
                                            It doesn’t take long for the content
                                            you create for social media to
                                            become unfocused and scattered...
                                          </p>
                                          <div className="mkdf-post-info-author">
                                            <a
                                              className="mkdf-post-info-author-link"
                                              href="https://www.giraffesocialmedia.co.uk/author/gsmsam/"
                                            >
                                              Sam Stroud{" "}
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_left">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width={1920}
                                    height={20}
                                    src="images/Aqua-Wave2.png"
                                    className="vc_single_image-img attachment-full"
                                    alt="Aqua Wave"
                                    decoding="async"
                                    loading="lazy"
                                    srcSet="images/Aqua-Wave2.png 1920w, images/Aqua-Wave2-300x3.png 300w, images/Aqua-Wave2-1024x11.png 1024w, images/Aqua-Wave2-768x8.png 768w, images/Aqua-Wave2-1536x16.png 1536w"
                                    sizes="(max-width: 1920px) 100vw, 1920px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-mkdf-anchor="contact"
                    className="vc_row wpb_row vc_row-fluid mkdf-section mkdf-content-aligment-left"
                    style={{}}
                  >
                    <div className="clearfix mkdf-full-section-inner">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="mkdf-elements-holder mkdf-two-columns mkdf-responsive-mode-1024">
                              <div className="mkdf-elements-holder-item mkdf-vertical-alignment-top">
                                <div className="mkdf-elements-holder-item-inner">
                                  <div
                                    className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-826048"
                                    style={{ padding: "90px 12% 50px 12%" }}
                                  >
                                    <style
                                      type="text/css"
                                      data-type="mkdf-elements-custom-padding"
                                      scoped
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "\n                                                    @media only screen and (min-width: 1280px) and (max-width: 1440px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-826048 {\n                                                    padding: 102px 10% 50px 15% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 1024px) and (max-width: 1280px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-826048 {\n                                                    padding: 102px 10% 50px 15% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 768px) and (max-width: 1024px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-826048 {\n                                                    padding: 102px 16% 0px 16% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-826048 {\n                                                    padding: 102px 15% 0px 15% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-826048 {\n                                                    padding: 90px 11% 0px 11% !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (max-width: 480px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-826048 {\n                                                    padding: 90px 11% 0px 11% !important;\n                                                    }\n                                                    }\n                                                 ",
                                      }}
                                    />
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h2>contact us</h2>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 19 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <span
                                      className="mkdf-section-subtitle"
                                      style={{
                                        textAlign: "left",
                                        color: "#525252",
                                      }}
                                    >
                                      Get in touch and request a proposal today.
                                    </span>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: 32 }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <div
                                      className="wpforms-container wpforms-container-full"
                                      id="wpforms-10071"
                                    >
                                      <form
                                        id="wpforms-form-10071"
                                        className="wpforms-validate wpforms-form"
                                        data-formid={10071}
                                        method="post"
                                        encType="multipart/form-data"
                                        action="/"
                                        data-token="ec8dce6b2efc41a9739c810590983d25"
                                      >
                                        <noscript className="wpforms-error-noscript">
                                          Please enable JavaScript in your
                                          browser to complete this form.
                                        </noscript>
                                        <div className="wpforms-field-container">
                                          <div
                                            id="wpforms-10071-field_1-container"
                                            className="wpforms-field wpforms-field-text"
                                            data-field-id={1}
                                          >
                                            <label
                                              className="wpforms-field-label wpforms-label-hide"
                                              htmlFor="wpforms-10071-field_1"
                                            >
                                              Name{" "}
                                              <span className="wpforms-required-label">
                                                *
                                              </span>
                                            </label>
                                            <input
                                              type="text"
                                              id="wpforms-10071-field_1"
                                              className="wpforms-field-large wpforms-field-required"
                                              name="wpforms[fields][1]"
                                              placeholder="Name*"
                                              required
                                            />
                                          </div>
                                          <div
                                            id="wpforms-10071-field_2-container"
                                            className="wpforms-field wpforms-field-email"
                                            data-field-id={2}
                                          >
                                            <label
                                              className="wpforms-field-label wpforms-label-hide"
                                              htmlFor="wpforms-10071-field_2"
                                            >
                                              Email{" "}
                                              <span className="wpforms-required-label">
                                                *
                                              </span>
                                            </label>
                                            <input
                                              type="email"
                                              id="wpforms-10071-field_2"
                                              className="wpforms-field-large wpforms-field-required"
                                              name="wpforms[fields][2]"
                                              placeholder="Email*"
                                              spellCheck="false"
                                              required
                                            />
                                          </div>
                                          <div
                                            id="wpforms-10071-field_5-container"
                                            className="wpforms-field wpforms-field-text"
                                            data-field-id={5}
                                          >
                                            <label
                                              className="wpforms-field-label wpforms-label-hide"
                                              htmlFor="wpforms-10071-field_5"
                                            >
                                              Telephone Number
                                            </label>
                                            <input
                                              type="text"
                                              id="wpforms-10071-field_5"
                                              className="wpforms-field-large"
                                              name="wpforms[fields][5]"
                                              placeholder="Telephone Number"
                                            />
                                          </div>
                                          <div
                                            id="wpforms-10071-field_3-container"
                                            className="wpforms-field wpforms-field-text"
                                            data-field-id={3}
                                          >
                                            <label
                                              className="wpforms-field-label wpforms-label-hide"
                                              htmlFor="wpforms-10071-field_3"
                                            >
                                              Message
                                            </label>
                                            <input
                                              type="text"
                                              id="wpforms-10071-field_3"
                                              className="wpforms-field-large"
                                              name="wpforms[fields][3]"
                                              placeholder="Tell us about your business..."
                                            />
                                          </div>
                                          <div
                                            id="wpforms-10071-field_6-container"
                                            className="wpforms-field wpforms-field-gdpr-checkbox"
                                            data-field-id={6}
                                          >
                                            <label
                                              className="wpforms-field-label"
                                              htmlFor="wpforms-10071-field_6"
                                            >
                                              GDPR Agreement{" "}
                                              <span className="wpforms-required-label">
                                                *
                                              </span>
                                            </label>
                                            <ul
                                              id="wpforms-10071-field_6"
                                              className="wpforms-field-required"
                                            >
                                              <li className="choice-1">
                                                <input
                                                  type="checkbox"
                                                  id="wpforms-10071-field_6_1"
                                                  name="wpforms[fields][6][]"
                                                  defaultValue="I consent to having this website store my submitted information so they can respond to my inquiry."
                                                  required
                                                />
                                                <label
                                                  className="wpforms-field-label-inline"
                                                  htmlFor="wpforms-10071-field_6_1"
                                                >
                                                  I consent to having this
                                                  website store my submitted
                                                  information so they can
                                                  respond to my inquiry.
                                                </label>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        {/* .wpforms-field-container */}
                                        <div className="wpforms-field wpforms-field-hp">
                                          <label
                                            htmlFor="wpforms-10071-field-hp"
                                            className="wpforms-field-label"
                                          >
                                            Phone
                                          </label>
                                          <input
                                            type="text"
                                            name="wpforms[hp]"
                                            id="wpforms-10071-field-hp"
                                            className="wpforms-field-medium"
                                          />
                                        </div>
                                        <div className="wpforms-recaptcha-container wpforms-is-recaptcha">
                                          <div
                                            className="g-recaptcha"
                                            data-sitekey="6LfFrEoUAAAAAFRaHlYGpJkElmZb2-UEnm0C7q81"
                                          />
                                          <input
                                            type="text"
                                            name="g-recaptcha-hidden"
                                            className="wpforms-recaptcha-hidden"
                                            style={{
                                              position: "absolute!important",
                                              clip: "rect(0,0,0,0)!important",
                                              height: "1px!important",
                                              width: "1px!important",
                                              border: "0!important",
                                              overflow: "hidden!important",
                                              padding: "0!important",
                                              margin: "0!important",
                                            }}
                                            data-rule-recaptcha={1}
                                          />
                                        </div>
                                        <div className="wpforms-submit-container">
                                          <input
                                            type="hidden"
                                            name="wpforms[id]"
                                            defaultValue={10071}
                                          />
                                          <input
                                            type="hidden"
                                            name="wpforms[author]"
                                            defaultValue={1}
                                          />
                                          <input
                                            type="hidden"
                                            name="wpforms[post_id]"
                                            defaultValue={11}
                                          />
                                          <button
                                            type="submit"
                                            name="wpforms[submit]"
                                            id="wpforms-submit-10071"
                                            className="wpforms-submit"
                                            data-alt-text="Sending..."
                                            data-submit-text="SEND"
                                            aria-live="assertive"
                                            value="wpforms-submit"
                                          >
                                            SEND
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                    {/* .wpforms-container */}
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <h6>Just want a chat?</h6>
                                        <p>
                                          Telephone: 02392 819051
                                          <br />
                                          Address: Cell Block Studios College
                                          Road, H M Naval Base, Portsmouth,
                                          Hampshire, England, PO1 3LJ.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mkdf-elements-holder-item mkdf-horizontal-alignment-center">
                                <div className="mkdf-elements-holder-item-inner">
                                  <div
                                    className="mkdf-elements-holder-item-content mkdf-elements-holder-custom-291565"
                                    style={{ padding: "82px 70px 151px 70px" }}
                                  >
                                    <style
                                      type="text/css"
                                      data-type="mkdf-elements-custom-padding"
                                      scoped
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          "\n                                                    @media only screen and (min-width: 1280px) and (max-width: 1440px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-291565 {\n                                                    padding: 82px 70px 131px 70px !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 1024px) and (max-width: 1280px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-291565 {\n                                                    padding: 82px 70px 131px 70px !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 768px) and (max-width: 1024px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-291565 {\n                                                    padding: 100px 70px 50px 70px !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 600px) and (max-width: 768px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-291565 {\n                                                    padding: 100px 70px 50px 70px !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (min-width: 480px) and (max-width: 600px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-291565 {\n                                                    padding: 95px 70px 16px 70px !important;\n                                                    }\n                                                    }\n                                                    @media only screen and (max-width: 480px) {\n                                                    .mkdf-elements-holder-item-content.mkdf-elements-holder-custom-291565 {\n                                                    padding: 95px 70px 16px 70px !important;\n                                                    }\n                                                    }\n                                                 ",
                                      }}
                                    />
                                    <div className="mkdf-google-map-holder ">
                                      <div
                                        className="mkdf-google-map"
                                        id="mkdf-map-2611857"
                                        data-addresses='["50.798852, -1.107424"]'
                                        data-custom-map-style="true"
                                        data-color-overlay="#fdaa56"
                                        data-saturation={0}
                                        data-lightness={0}
                                        data-zoom={15}
                                        data-pin="https://www.giraffesocialmedia.co.uk/wp-content/uploads/2018/03/Giraffe-Map-Pin.png"
                                        data-unique-id={2611857}
                                        data-scroll-wheel="false"
                                        data-height={600}
                                      />
                                      <div className="mkdf-google-map-overlay" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mkdf-content-bottom"
                style={{ backgroundColor: "#525252" }}
              >
                <div className="widget widget_text">
                  <div className="textwidget">
                    <div className="vc_empty_space" style={{ height: 100 }}>
                      <span className="vc_empty_space_inner" />
                    </div>
                  </div>
                </div>
                <div className="widget widget_text">
                  <div className="textwidget">
                    <p>
                      <img
                        decoding="async"
                        loading="lazy"
                        className="aligncenter wp-image-13033"
                        src="images/Giraffe-Social-Media-Wordmark-Light-Margin-1024x373.png"
                        alt="Giraffe Social Media Logo"
                        width={600}
                        height={219}
                        srcSet="images/Giraffe-Social-Media-Wordmark-Light-Margin-1024x373.png 1024w, images/Giraffe-Social-Media-Wordmark-Light-Margin-300x109.png 300w, images/Giraffe-Social-Media-Wordmark-Light-Margin-768x280.png 768w, images/Giraffe-Social-Media-Wordmark-Light-Margin-1536x560.png 1536w, images/Giraffe-Social-Media-Wordmark-Light-Margin.png 1920w"
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </p>
                  </div>
                </div>
                <div className="widget widget_text">
                  <div className="textwidget">
                    <div className="vc_empty_space" style={{ height: 34 }}>
                      <span className="vc_empty_space_inner" />
                    </div>
                  </div>
                </div>
                <div className="widget mkdf-raw-html-widget  ">
                  <div style={{ textAlign: "center" }}>
                    <span
                      className="mkdf-icon-shortcode normal"
                      style={{ margin: "0 12px 0 0px" }}
                      data-hover-color="#F8C9D2"
                      data-color="#ffffff"
                    >
                      <a
                        href="https://twitter.com/giraffesm"
                        target="_blank"
                        rel="noopener"
                      >
                        <i
                          className="mkdf-icon-font-awesome fa fa-twitter mkdf-icon-element"
                          style={{ color: "#ffffff", fontSize: 26 }}
                        />
                      </a>
                    </span>
                    <span
                      className="mkdf-icon-shortcode normal"
                      style={{ margin: "0 12px 0 0" }}
                      data-hover-color="#F8C9D2"
                      data-color="#ffffff"
                    >
                      <a
                        href="https://www.facebook.com/GiraffeSocialMedia/"
                        target="_blank"
                        rel="noopener"
                      >
                        <i
                          className="mkdf-icon-font-awesome fa fa-facebook mkdf-icon-element"
                          style={{ color: "#ffffff", fontSize: 26 }}
                        />
                      </a>
                    </span>
                    <span
                      className="mkdf-icon-shortcode normal"
                      style={{ margin: "0 12px 0 0" }}
                      data-hover-color="#F8C9D2"
                      data-color="#ffffff"
                    >
                      <a
                        href="https://www.instagram.com/giraffesm/"
                        target="_blank"
                        rel="noopener"
                      >
                        <i
                          className="mkdf-icon-font-awesome fa fa-instagram mkdf-icon-element"
                          style={{ color: "#ffffff", fontSize: 26 }}
                        />
                      </a>
                    </span>
                    <span
                      className="mkdf-icon-shortcode normal"
                      style={{ margin: "0 12px 0 0" }}
                      data-hover-color="#F8C9D2"
                      data-color="#ffffff"
                    >
                      <a
                        href="https://www.linkedin.com/company/giraffe-social-media/"
                        target="_blank"
                        rel="noopener"
                      >
                        <i
                          className="mkdf-icon-font-awesome fa fa-linkedin mkdf-icon-element"
                          style={{ color: "#ffffff", fontSize: 26 }}
                        />
                      </a>
                    </span>
                  </div>
                </div>
                <div className="widget widget_text">
                  <div className="textwidget">
                    <div className="vc_empty_space" style={{ height: 34 }}>
                      <span className="vc_empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="mkdf-footer-inner clearfix">
              <div className="mkdf-footer-bottom-holder">
                <div className="mkdf-footer-bottom-holder-inner">
                  <div className="mkdf-container">
                    <div className="mkdf-container-inner">
                      <div className="mkdf-column-inner">
                        <div
                          id="text-18"
                          className="widget mkdf-footer-text widget_text"
                        >
                          <div className="textwidget">
                            <p style={{ textAlign: "center" }}>
                              <span style={{ color: "#ffffff", fontSize: 12 }}>
                                © Copyright 2018-2022 Giraffe Marketing Group
                                Limited trading as Giraffe Social Media |
                                Registered in England and Wales. Registered
                                Number: 7931524. Registered Office: Cell Block
                                Studios College Road, H M Naval Base,
                                Portsmouth, Hampshire, England, PO1 3LJ. | VAT
                                No: 137 4505 18. |{" "}
                                <a
                                  href="https://www.giraffesocialmedia.co.uk/privacy-policy/"
                                  rel="noopener"
                                >
                                  Privacy Policy
                                </a>{" "}
                                |{" "}
                                <a
                                  href="https://www.giraffesocialmedia.co.uk/cookie-policy/"
                                  rel="noopener"
                                >
                                  Cookie Policy
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
