import "./Step4.scss";

function Step4({ formData }) {
  const duration = formData.planData.duration === "Monthly" ? "mo" : "yr";

  const plan = formData.planData.plan;

  const addOns = () => {
    let addOns = [];
    if (formData.addOnData["online-serv"])
      addOns.push(
        <div key={0} className="summary">
          <p className="summary-title">Online Service</p>
          <p className="summary-price">
            {"+$" + formData.addOnData["online-serv"] + "/" + duration}
          </p>
        </div>
      );

    if (formData.addOnData["large-storage"])
      addOns.push(
        <div key={1} className="summary">
          <p className="summary-title">Larger storage</p>
          <p className="summary-price">
            {"+$" + formData.addOnData["large-storage"] + "/" + duration}
          </p>
        </div>
      );

    if (formData.addOnData["customizable-profile"])
      addOns.push(
        <div key={2} className="summary">
          <p className="summary-title">Customizable profile</p>
          <p className="summary-price">
            {"+$" + formData.addOnData["customizable-profile"] + "/" + duration}
          </p>
        </div>
      );

    return addOns;
  };

  const totalPrice =
    formData.planData.price +
    formData.addOnData["online-serv"] +
    formData.addOnData["customizable-profile"] +
    formData.addOnData["large-storage"];
  return (
    <>
      <h1 className="step-title">Finishing up</h1>
      <h2 className="step-description">
        Double-check everything looks OK before confirming.
      </h2>
      <div className="summary-container">
        <div className="plan-summary">
          <p className="summary-title">
            {plan + " (" + formData.planData.duration + ")"}
          </p>
          <p className="summary-price">
            {"$" + formData.planData.price + "/" + duration}
          </p>
        </div>
        {addOns().map((el) => el)}
        <div className="total">
          <p className="total-text">
            Total (per {duration === "mo" ? "month" : "year"})
          </p>
          <p className="total-price">{"$" + totalPrice + "/" + duration}</p>
        </div>
      </div>
    </>
  );
}

export default Step4;
