import { useRef, useState } from "react";
import { ReactComponent as AdvancedIcon } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as ArcadeIcon } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as ProIcon } from "../../assets/images/icon-pro.svg";
import "./Step2.scss";

function Step2() {
  const slider = useRef(null);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState("monthly");

  const selectDuration = () => {
    let duration;
    slider.current.checked ? (duration = "yearly") : (duration = "monthly");
    setSelectedDuration(duration);
  };
  return (
    <>
      <h1 className="step-title">Select Your plan</h1>
      <h2 className="step-description">
        You have the option of monthly or yearly billing.
      </h2>
      <div className="plans-container">
        <div
          onClick={() => setSelectedPlan(1)}
          className={`plan ${selectedPlan === 1 ? "selected" : ""}`}
        >
          <ArcadeIcon className="plan-icon " />
          <div className="plan-text-wrapper">
            <p>Arcade</p>
            <p>$9/mo</p>
          </div>
        </div>
        <div
          onClick={() => setSelectedPlan(2)}
          className={`plan ${selectedPlan === 2 ? "selected" : ""}`}
        >
          <AdvancedIcon className="plan-icon" />
          <div className="plan-text-wrapper">
            <p>Advanced</p>
            <p>$12/mo</p>
          </div>{" "}
        </div>
        <div
          onClick={() => setSelectedPlan(3)}
          className={`plan ${selectedPlan === 3 ? "selected" : ""}`}
        >
          <ProIcon className="plan-icon" />
          <div className="plan-text-wrapper">
            <p>Pro</p>
            <p>$15/mo</p>
          </div>{" "}
        </div>
      </div>
      <div className="duration">
        <span className={`${selectedDuration === "monthly" ? "selected" : ""}`}>
          Monthly
        </span>
        <label className="switch">
          <input type="checkbox" onChange={selectDuration} ref={slider} />
          <span className="slider round"></span>
        </label>
        <span className={`${selectedDuration === "yearly" ? "selected" : ""}`}>
          Yearly
        </span>
      </div>
    </>
  );
}

export default Step2;
