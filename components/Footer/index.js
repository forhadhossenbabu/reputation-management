import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 item text">
              <h3>SOCIAL LINKS</h3>
              <div className="item social">
                {/* <a href="https://vimeo.com/user150113388" target="_blank">
                  <i className="fab fa-vimeo"></i>
                </a> */}

                <a
                  href="https://www.facebook.com/explaino.pro/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/explaino/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <p>
                We offer you the best deals on the market & also give the chance
                for unlimited revisions after and during your process to make
                you fully satisfied with the final product.
              </p>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>QUICK LINKS</h3>
              <ul>
                <li>
                  <Link href="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link href="/testimonials">
                    <a>Testimonials</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy">
                    <a>Refund Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">
                    <a>Terms And Conditions</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>CONTACTS</h3>
              <ul>
                <li>
                  <i className="fa fa-phone"></i>{" "}
                  <a href="tel:+3024405820">(302) 440-5820</a>
                </li>

                <li>
                  <i className="fa fa-envelope"></i>{" "}
                  <a href="mailto:forhad@explaino.pro">forhad@explaino.pro</a>
                </li>
                <li>
                  <i className="fa fa-location-arrow"></i>112 Capitol Trail
                  Suite A763 Newark DE 19711
                </li>
              </ul>
            </div>
            <br />
            <img
              className="text-center"
              src="https://i.postimg.cc/sDzmFHgG/exp-logo-white.png"
              width="200px"
            ></img>
          </div>
          <h6
            style={{ textAlign: "center", color: "#ffff" }}
            className="mt-4 mb-0"
          >
            © {new Date().getFullYear() - 1} - {new Date().getFullYear()}{" "}
            Chowdhury LLC, All rights reserved.
          </h6>
          <h6
            style={{ textAlign: "center", color: "#ffff" }}
            className="mt-4 mb-0"
          >
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, this site is NOT endorsed by Facebook in any way.
          </h6>
          <h6
            style={{ textAlign: "center", color: "#ffff" }}
            className="mt-4 mb-0"
          >
            FACEBOOK is a trademark of FACEBOOK, Inc. © 2022
          </h6>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
