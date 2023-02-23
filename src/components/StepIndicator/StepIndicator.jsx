import "./StepIndicator.scss";

function StepIndicator() {
  return (
    <>
      <div className="indicator-component-small">
        <div className="indicator active">1</div>
        <div className="indicator">2</div>
        <div className="indicator">3</div>
        <div className="indicator">4</div>
      </div>
      <div className="indicator-component-large">
        <div className="indicator-wrapper">
          <div className="indicator active">1</div>
          <div className="text-wrapper">
            <p>STEP 1</p>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="indicator-wrapper">
          <div className="indicator">2</div>
          <div className="text-wrapper">
            <p>STEP 2</p>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className="indicator-wrapper">
          <div className="indicator">3</div>
          <div className="text-wrapper">
            <p>STEP 3</p>
            <p>ADD-ONS</p>
          </div>
        </div>
        <div className="indicator-wrapper">
          <div className="indicator">4</div>
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
