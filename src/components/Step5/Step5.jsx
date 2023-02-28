import "./Step5.scss";
import { ReactComponent as ThankYouIcon } from "../../assets/images/icon-thank-you.svg";
function Step5() {
  return (
    <div className="step5">
      <ThankYouIcon className="thankyou-icon" />
      <h1 className="step-title">Thank you!</h1>
      <h2 className="step-description">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </h2>
    </div>
  );
}

export default Step5;
