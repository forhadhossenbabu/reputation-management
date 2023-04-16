import { Fragment } from "react";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="mt-2">
        <h3
          className="font-weight-normal text-14 text-center text-uppercase countDownText mb-5"
          style={{ color: "#000" }}
        >
          GET YOURS NOW{" "}
        </h3>
        <h3 className="font-weight-normal text-14 text-center text-uppercase countDownText">
          <strong className="font-weight-extra-bold" style={{ color: "#000" }}>
            50% OFF ON EVERY ORDER
          </strong>
        </h3>
        <hr />
      </div>
    );
  } else {
    return (
      <Fragment>
        <h2 className="font-weight-normal text-6 mb-4 text-center">
          <b>TIME BEFORE THIS LIMITED OFFER ENDS...</b>
        </h2>
        <div
          className="countdown countdown-borders countdown-primary"
          data-plugin-countdown
          data-plugin-options="{'date': '2022/01/01 12:00:00', 'numberClass': 'font-weight-extra-bold', 'wrapperClass': 'border-color-primary'}"
        >
          <span className="days border-color-primary">
            <span className="font-weight-bold">{days}</span> DAYS
            <div className="d-inline text-uppercase" />
          </span>
          <span className="hours border-color-primary">
            <span className="font-weight-bold">{hours}</span> HOURS
          </span>
          <span className="minutes border-color-primary">
            <span className="font-weight-bold">{minutes}</span> MINUTES
          </span>
          <span className="seconds border-color-primary">
            <span className="font-weight-bold">{seconds}</span> SECONDS
          </span>
        </div>
      </Fragment>
    );
  }
};

const OfferCountDown = ({ date, title }) => {
  return (
    <Fragment>
      <Countdown date={date} renderer={renderer} />
      {title ? (
        <h3 className="font-weight-bold text-12 line-height-4  mt-5 text-center">
          {title}
        </h3>
      ) : (
        <h3 className="font-weight-bold text-12 line-height-4  mt-5 text-center">
          <span style={{ color: "#f00" }}>SALE!</span> GET YOUR ANIMATED
          MARKETING VIDEO <span style={{ color: "#f00" }}>DISCOUNTED 50% </span>
          TODAY JUST
          <span style={{ color: "#f00" }}> $299</span>
        </h3>
      )}
    </Fragment>
  );
};

export default OfferCountDown;
