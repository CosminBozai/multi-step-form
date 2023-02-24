import "./Step4.scss";

function Step4() {
  return (
    <>
      <h1 className="step-title">Finishing up</h1>
      <h2 className="step-description">
        Double-check everything looks OK before confirming.
      </h2>
      <div className="summary-container">
        <div className="plan-summary">
          <p className="summary-title">Arcade (Monthly)</p>
          <p className="summary-price">$9/mo</p>
        </div>
        <div className="summary">
          <p className="summary-title">Online Service</p>
          <p className="summary-price">+$1/mo</p>
        </div>
        <div className="summary">
          <p className="summary-title">Larger storage</p>
          <p className="summary-price">+$2/mo</p>
        </div>
        <div className="total">
          <p className="total-text">Total (per month)</p>
          <p className="total-price">$12/mo</p>
        </div>
      </div>
    </>
  );
}

export default Step4;
