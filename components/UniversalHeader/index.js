import Link from "next/link";

const UniversalHeader = ({ title, subTitle, btn }) => {
  return (
    <section className="py-5 pt-3 main_apple_background">
      <div className="container pt-lg-5 universal_header">
        <h1
          className="font-weight-bold text-8 text-xl-12 line-height-2 mb-3"
          style={{ color: "#fff" }}
        >
          {title}
        </h1>

        {subTitle ? (
          <h4
            className="font-weight-light opacity-7 m-o"
            style={{ color: "#fff", marginBottom: "0" }}
          >
            {subTitle}
          </h4>
        ) : null}
        {btn ? (
          <Link href="/video-strategy-session">
            <a className="btn btn-modern text-3 btn-primary mt-3">
              Book A Strategy Session <i className="fas fa-arrow-down ml-1" />
            </a>
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default UniversalHeader;
