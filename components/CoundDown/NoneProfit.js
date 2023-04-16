import { Fragment } from "react";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="mt-3">
        <h3
          className="font-weight-normal text-14 text-center text-uppercase countDownText mb-5"
          style={{ color: "#fff" }}
        >
          GET YOURS NOW{" "}
        </h3>
        <h3 className="font-weight-normal text-14 text-center text-uppercase countDownText">
          <strong className="font-weight-extra-bold" style={{ color: "#fff" }}>
            50% OFF JUST FOR NON-PROFIT
          </strong>
        </h3>
        <hr />
      </div>
    );
  } else {
    return (
      <Fragment>
        <h3 className="font-weight-normal text-14 text-center text-uppercase countDownText">
          <strong className="font-weight-extra-bold" style={{ color: "#fff" }}>
            50% OFF JUST FOR NON-PROFIT
          </strong>
        </h3>
        <hr />
        <h3
          className="font-weight-normal text-10 text-center text-uppercase countDownText"
          style={{ color: "#fff" }}
        >
          <strong className="font-weight-extra-bold">
            CREATE A EXPLAINER VIDEOS THAT YOUR DONORS WILL LOVE
          </strong>
        </h3>
        <hr />
        <div
          className="countdown countdown-borders countdown-primary"
          data-plugin-countdown
          data-plugin-options="{'date': '2022/01/01 12:00:00', 'numberClass': 'font-weight-extra-bold', 'wrapperClass': 'border-color-primary'}"
        >
          <span className="days border-color-primary">
            <span className=" font-weight-extra-bold">{days}</span> DAYS
            <div className="d-inline text-uppercase" />
          </span>
          <span className="hours border-color-primary">
            <span className=" font-weight-extra-bold">{hours}</span> HOURS
          </span>
          <span className="minutes border-color-primary">
            <span className=" font-weight-extra-bold">{minutes}</span> MINUTES
          </span>
          <span className="seconds border-color-primary">
            <span className=" font-weight-extra-bold">{seconds}</span> SECONDS
          </span>
        </div>
        <hr />
      </Fragment>
    );
  }
};

const OfferCountDown = ({ date }) => {
  return (
    <Fragment>
      <Countdown date={date} renderer={renderer} />

      <h1 style={{ textAlign: "center" }}>
        <strong>
          <span style={{ color: "#fff" }}>
            TIME BEFORE THIS LIMITED OFFER ENDS
          </span>
        </strong>
      </h1>
      <h1 style={{ textAlign: "center" }}>
        <strong>
          <span style={{ color: "#fff" }}>
            SALE! GET YOUR ANIMATED MARKETING VIDEO DISCOUNTED 50% TODAY JUST
            STARTS FROM $299
          </span>
        </strong>
      </h1>
    </Fragment>
  );
};

export default OfferCountDown;
