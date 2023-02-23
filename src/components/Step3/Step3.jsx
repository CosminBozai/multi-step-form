import "./Step3.scss";
function Step3() {
  const handleCheck = (e) => {
    if (e.target.type === "checkbox") {
      const checkBox = e.target;
      const addOn = e.target.closest("div.add-on");
      checkBox.checked
        ? addOn.classList.add("selected")
        : addOn.classList.remove("selected");
    }
  };
  return (
    <>
      <h1 className="step-title">Pick add-ons</h1>
      <h2 className="step-description">
        Add-ons help enhance your gaming experience.
      </h2>
      <div className="add-on-container">
        <div onClick={handleCheck} className="add-on">
          <div className="right-side">
            <input type="checkbox" />
            <div className="add-on-text-wrapper">
              <p>Online Service</p>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <div className="price">+$1/mo</div>
        </div>
        <div onClick={handleCheck} className="add-on">
          <div className="right-side">
            <input type="checkbox" />
            <div className="add-on-text-wrapper">
              <p>Larger Storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <div className="price">+$2/mo</div>
        </div>
        <div onClick={handleCheck} className="add-on">
          <div className="right-side">
            <input type="checkbox" />
            <div className="add-on-text-wrapper">
              <p>Customizable profile</p>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <div className="price">+$2/mo</div>
        </div>
      </div>
    </>
  );
}

export default Step3;
