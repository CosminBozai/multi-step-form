import "./StepIndicator.scss";

function StepIndicator({ currentStep }) {
  return (
    <>
      <div className="indicator-component-small">
        <div className={`indicator ${currentStep === 0 ? "active" : ""}`}>
          1
        </div>
        <div className={`indicator ${currentStep === 1 ? "active" : ""}`}>
          2
        </div>
        <div className={`indicator ${currentStep === 2 ? "active" : ""}`}>
          3
        </div>
        <div className={`indicator ${currentStep === 3 ? "active" : ""}`}>
          4
        </div>
      </div>
      <div className="indicator-component-large">
        <div className="indicator-wrapper">
          <div className={`indicator ${currentStep === 0 ? "active" : ""}`}>
            1
          </div>
          <div className="text-wrapper">
            <p>STEP 1</p>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="indicator-wrapper">
          <div className={`indicator ${currentStep === 1 ? "active" : ""}`}>
            2
          </div>
          <div className="text-wrapper">
            <p>STEP 2</p>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className="indicator-wrapper">
          <div className={`indicator ${currentStep === 2 ? "active" : ""}`}>
            3
          </div>
          <div className="text-wrapper">
            <p>STEP 3</p>
            <p>ADD-ONS</p>
          </div>
        </div>
        <div className="indicator-wrapper">
          <div className={`indicator ${currentStep === 3 ? "active" : ""}`}>
            4
          </div>
          <div className="text-wrapper">
            <p>STEP 4</p>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepIndicator;
