import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const GlobalForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  return (
    <section className="py-5" id="ContactForm">
      <div className="container text-black">
        <div className="row">
          <div className="col-lg-8">
            <div className="overflow-hidden mb-1">
              <h2 className="font-weight-bold text-7 mb-0">GET IN TOUCH</h2>
            </div>
            <div className="overflow-hidden mb-4 pb-3">
              <p className="mb-0">
                Still have questions? Get in touch with our team!
              </p>
            </div>
            <form
              className="contact-form text-left"
              onSubmit={async (e) => {
                e.preventDefault();
                const contactDetails = {
                  name,
                  email,
                  subject,
                  message,
                };
                setSendingEmail(true);
                console.log({
                  email,
                  first_name: name,
                  fields: {
                    subject,
                    message,
                  },
                  api_key: "r05Tur3UH39FzjEY1dOMtw",
                  tags: ["3366168"],
                });
                await axios
                  .post(
                    "https://api.convertkit.com/v3/forms/3651596/subscribe",
                    {
                      email,
                      first_name: name,
                      fields: {
                        subject,
                        message,
                      },
                      api_key: "r05Tur3UH39FzjEY1dOMtw",
                      tags: ["3366168"],
                    }
                  )
                  .then((resp) => {
                    console.log(resp);
                  });

                try {
                  console.log(contactDetails);
                  await axios
                    .post("/api/contact", { ...contactDetails })
                    .then(async (resp) => {
                      toast.success(
                        "Check your inbox. \n See you on the other side.",
                        {
                          position: "bottom-right",
                          autoClose: 5000,
                        }
                      );
                      console.log(resp);
                      setName("");
                      setSubject("");
                      setEmail("");
                      setMessage("");
                      setSendingEmail(false);
                    })
                    .catch((err) => {
                      setSendingEmail(false);
                      toast.error("It seems something on wrong. Try again.", {
                        position: "top-right",
                        autoClose: 5000,
                      });
                    });
                } catch (error) {
                  setSendingEmail(false);
                  toast.error(
                    "Something wrong on our end. Please try letter.",
                    {
                      position: "top-right",
                      autoClose: 5000,
                    }
                  );
                }
              }}
            >
              <div className="form-row">
                <div className="form-group col-lg-6">
                  <label className="mb-1 text-2">Full Name</label>
                  <input
                    type="text"
                    className="form-control text-3 h-auto py-2"
                    required
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    name="name"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label className="mb-1 text-2">Email Address</label>
                  <input
                    type="email"
                    className="form-control text-3 h-auto py-2"
                    required
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    name="email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label className="mb-1 text-2">Subject</label>
                  <input
                    type="text"
                    className="form-control text-3 h-auto py-2"
                    required
                    value={subject}
                    onChange={({ target }) => setSubject(target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label className="mb-1 text-2">Message</label>
                  <textarea
                    rows={6}
                    className="form-control text-3 h-auto py-2"
                    required
                    value={message}
                    onChange={({ target }) => setMessage(target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  {sendingEmail ? (
                    <div style={{ textAlign: "center" }}>
                      <img src="/loading-buffering.gif" height="50px" />
                      <p>Hold Tight. You message on the way.</p>
                    </div>
                  ) : (
                    <input
                      type="submit"
                      className="btn btn-primary btn-modern text-4"
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="overflow-hidden mb-1">
              <h2 className="font-weight-bold text-7 mb-0">HI THERE</h2>
            </div>
            <div className="overflow-hidden mb-4 pb-3">
              <p className="mb-0">We'd love to hear from you.</p>
            </div>
            <div className="overflow-hidden mb-4 pb-3">
              <p className="mb-0">
                We're a full-fledged video marketing agency that operates on
                clockwork.
                <br />
                We aim to combine video producing and animation skills with
                design and create unique videos for you and your company.
                <br /> Your creatives go through an extremely deliberate process
                from ideation to final delivery – ensuring no detail is missed
                among the hundreds of videos we produce a month.
                <br /> Our team consists of experienced writers, voiceover
                artists, animators and designers. <br />
                We also have a professional support team that will help you with
                all your questions.
                <br /> We offer you the best deals on the market & also give the
                chance for unlimited revisions after and during your process to
                make you fully satisfied with the final product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalForm;
