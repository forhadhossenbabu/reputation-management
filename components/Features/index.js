import axios from "axios";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";

const Features = ({ cta }) => {
  const router = useRouter();
  const [firstname, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Fragment>
      <section className="py-5 text-center">
        <div className="container">
          <section id="free-gift">
            <form
              className="contact-form text-left"
              onSubmit={async (e) => {
                e.preventDefault();
                const contactDetails = {
                  firstname,
                  phoneNumber,
                  email,
                };
                const convertKit = {
                  email,
                  first_name: firstname,
                  fields: {
                    phone: phoneNumber,
                  },
                  api_key: "r05Tur3UH39FzjEY1dOMtw",
                  tags: ["3366099"],
                };

                setLoading(true);
                await axios
                  .post(
                    "https://api.convertkit.com/v3/forms/3651619/subscribe",
                    { ...convertKit }
                  )
                  .then((resp) => {
                    console.log(resp);
                    setFirstName("");
                    setPhoneNumber("");
                    setEmail("");
                    setLoading(false);
                    window.open(
                      "https://explaino.pro/The-5-Must-Have-Needs-For-Your-Attention-Converting-Video.pdf",
                      "_blank"
                    );
                    // router.push(
                    //   "/The-5-Must-Have-Needs-For-Your-Attention-Converting-Video.pdf"
                    // );
                    toast.success("Enjoy the free stuff.", {
                      position: "bottom-right",
                      autoClose: 5000,
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                    toast.error("It seems something on wrong. Try again.", {
                      position: "bottom-right",
                      autoClose: 5000,
                    });
                    setFirstName("");
                    setPhoneNumber("");
                    setEmail("");
                    setLoading(false);
                  });
              }}
            >
              <h2 className="font-weight-normal text-6 mb-3 text-center">
                <span
                  style={{
                    background: "linear-gradient(180deg,#9b37f2,#7a12d4)",
                    padding: "5px 10px",
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  GET YOUR FREE COPY OF
                </span>
                <br />
              </h2>
              <h2
                className="font-weight-normal text-6 mb-3 text-center"
                style={{ textTransform: "uppercase" }}
              >
                <b>
                  {" "}
                  5 Must Have Needs For Your Attention Converting Explainer
                  Video.
                </b>
              </h2>

              <div className="row">
                <div className="col-md-4">
                  <img src="https://i.postimg.cc/Sszd4w9C/bookcover.png" />
                </div>
                <div className="col-md-8 mt-5">
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="mb-1 text-2">
                          <b>Full Name*</b>
                        </label>
                        <input
                          type="text"
                          className="form-control text-3 h-auto py-2"
                          required
                          value={firstname}
                          onChange={({ target }) => setFirstName(target.value)}
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="mb-1 text-2">
                          <b>Phone Number</b>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-control text-3 h-auto py-2"
                          required
                          value={phoneNumber}
                          onChange={({ target }) =>
                            setPhoneNumber(target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <label className="mb-1 text-2">
                        <b>Email Address*</b>
                      </label>
                      <input
                        type="email"
                        className="form-control text-3 h-auto py-2"
                        required
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                      />
                      <div className="form-group mt-4">
                        {loading ? (
                          <img src="/loading-buffering.gif" height="70px" />
                        ) : (
                          <input
                            type="submit"
                            className="btn btn-primary btn-modern text-4"
                            value="Download Now ▸"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
      <section className="mini__process py-5">
        <div className="container mb-3">
          <div className="heading heading-border heading-middle-border heading-middle-border-center mb-5">
            <h1 className="font-weight-bold">
              QUALITY VIDEO AT AN AFFORDABLE PRICE
            </h1>
          </div>

          <div className="featured-boxes featured-boxes-style-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="featured-box featured-box-primary featured-box-text-left mt-0">
                  <div className="box-content p-5">
                    <div className="row">
                      <div className="col-9">
                        <h2 className="font-weight-normal text-5">
                          Best Value{" "}
                          <strong className="font-weight-extra-bold">
                            For Money
                          </strong>
                        </h2>
                      </div>
                      <div className="col-3">
                        <div className="text-right">
                          <img
                            src="/icons/play-button.png"
                            style={{ marginTop: "-30px" }}
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          You don't want to pay exorbitant prices or receive a
                          cookie-cutter video. At Explaino we do neither.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="featured-box featured-box-primary featured-box-text-left mt-0">
                  <div className="box-content p-5">
                    <div className="row">
                      <div className="col-9">
                        <h2 className="font-weight-normal text-5">
                          No Extra |{" "}
                          <strong className="font-weight-extra-bold">
                            Hidden Fees
                          </strong>
                        </h2>
                      </div>
                      <div className="col-3">
                        <div className="text-right">
                          <img
                            src="/icons/extra-fee.png"
                            style={{ marginTop: "-30px" }}
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          Each package is priced per second, and includes 1
                          voice over, 1 script, and 1 finished video.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-boxes featured-boxes-style-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="featured-box featured-box-primary featured-box-text-left mt-0">
                  <div className="box-content p-5">
                    <div className="row">
                      <div className="col-9">
                        <h2 className="font-weight-normal text-5">
                          Fast turn{" "}
                          <strong className="font-weight-extra-bold">
                            Around option
                          </strong>
                        </h2>
                      </div>
                      <div className="col-3">
                        <div className="text-right">
                          <img
                            src="/icons/trun-around.png"
                            style={{ marginTop: "-30px" }}
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          Need your video fast!? We can produce a video in as
                          little as 10 days for a small fee, so you don't have
                          to miss any deadline.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="featured-box featured-box-primary featured-box-text-left mt-0">
                  <div className="box-content p-5">
                    <div className="row">
                      <div className="col-9">
                        <h2 className="font-weight-normal text-5">
                          Drive More{" "}
                          <strong className="font-weight-extra-bold">
                            Engagement
                          </strong>
                        </h2>
                      </div>
                      <div className="col-3">
                        <div className="text-right">
                          <img
                            src="/icons/statics.png"
                            style={{ marginTop: "-30px" }}
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          4x as many customers would rather watch a video about
                          a product than read about it -Animoto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-boxes featured-boxes-style-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="featured-box featured-box-primary featured-box-text-left mt-0">
                  <div className="box-content p-5">
                    <div className="row">
                      <div className="col-9">
                        <h2 className="font-weight-normal text-5">
                          Boost More{" "}
                          <strong className="font-weight-extra-bold">
                            Conversions
                          </strong>
                        </h2>
                      </div>
                      <div className="col-3">
                        <div className="text-right">
                          <img
                            src="/icons/boost-conv.png"
                            style={{ marginTop: "-30px" }}
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          Including a video on a landing page can increase
                          conversion by 80% -EyeView.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="featured-box featured-box-primary featured-box-text-left mt-0">
                  <div className="box-content p-5">
                    <div className="row">
                      <div className="col-9">
                        <h2 className="font-weight-normal text-5">
                          100% Satisfaction{" "}
                          <strong className="font-weight-extra-bold">
                            Guarantee
                          </strong>
                        </h2>
                      </div>
                      <div className="col-3">
                        <div className="text-right">
                          {/* <i className="icon-featured far fa-heart" /> */}
                          <img
                            src="/icons/satisfaction.png"
                            style={{ marginTop: "-30px" }}
                            height="80px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          Get a video risk free and if you're not happy with it
                          ask for a refund within 30-days and we'll refund you
                          in full.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col text-center">
                <Link href={cta}>
                  <a className="btn btn-modern text-3 btn-primary">
                    What are you waiting for?
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Features;
