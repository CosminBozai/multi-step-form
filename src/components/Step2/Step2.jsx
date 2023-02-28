import { useEffect, useRef, useState } from "react";
import { ReactComponent as AdvancedIcon } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as ArcadeIcon } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as ProIcon } from "../../assets/images/icon-pro.svg";
import "./Step2.scss";

function Step2({ formData, setFormData }) {
  const slider = useRef(null);
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [selectedDuration, setSelectedDuration] = useState("Monthly");

  const changeDuration = () => {
    let duration;
    slider.current.checked ? (duration = "Yearly") : (duration = "Monthly");
    setSelectedDuration(duration);
  };

  function planPrice() {
    if (selectedDuration === "Monthly") {
      if (selectedPlan === "Arcade") return 9;
      else if (selectedPlan === "Advanced") return 12;
      else if (selectedPlan === "Pro") return 15;
    } else if (selectedDuration === "Yearly") {
      if (selectedPlan === "Arcade") return 90;
      else if (selectedPlan === "Advanced") return 120;
      else if (selectedPlan === "Pro") return 150;
    }
  }

  useEffect(() => {
    const price = planPrice();
    const planData = { plan: selectedPlan, duration: selectedDuration, price };
    setFormData({ ...formData, planData });
  }, [selectedPlan, selectedDuration]);
  return (
    <>
      <h1 className="step-title">Select Your plan</h1>
      <h2 className="step-description">
        You have the option of monthly or yearly billing.
      </h2>
      <div className="plans-container">
        <div
          onClick={() => setSelectedPlan("Arcade")}
          className={`plan ${selectedPlan === "Arcade" ? "selected" : ""}`}
        >
          <ArcadeIcon className="plan-icon " />
          <div className="plan-text-wrapper">
            <p>Arcade</p>
            <p>{selectedDuration === "Monthly" ? "$9/mo" : "$90/yr"}</p>
          </div>
        </div>
        <div
          onClick={() => setSelectedPlan("Advanced")}
          className={`plan ${selectedPlan === "Advanced" ? "selected" : ""}`}
        >
          <AdvancedIcon className="plan-icon" />
          <div className="plan-text-wrapper">
            <p>Advanced</p>
            <p>{selectedDuration === "Monthly" ? "$12/mo" : "$120/yr"}</p>
          </div>{" "}
        </div>
        <div
          onClick={() => setSelectedPlan("Pro")}
          className={`plan ${selectedPlan === "Pro" ? "selected" : ""}`}
        >
          <ProIcon className="plan-icon" />
          <div className="plan-text-wrapper">
            <p>Pro</p>
            <p>{selectedDuration === "Monthly" ? "$15/mo" : "$150/yr"}</p>
          </div>{" "}
        </div>
      </div>
      <div className="duration">
        <span className={`${selectedDuration === "Monthly" ? "selected" : ""}`}>
          Monthly
        </span>
        <label className="switch">
          <input type="checkbox" onChange={changeDuration} ref={slider} />
          <span className="slider round"></span>
        </label>
        <span className={`${selectedDuration === "Yearly" ? "selected" : ""}`}>
          Yearly
        </span>
      </div>
    </>
  );
}

export default Step2;
