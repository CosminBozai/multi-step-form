import { useEffect, useState } from "react";
import "./Step3.scss";
function Step3({ formData, setFormData }) {
  const duration = formData.planData.duration === "Monthly" ? "mo" : "yr";
  const price = formData.planData.duration === "Monthly" ? 1 : 10;
  const [addOnData, setAddOnData] = useState({
    "online-serv": 0,
    "large-storage": 0,
    "customizable-profile": 0,
  });
  const handleAddOn = (e) => {
    if (e.target.type === "checkbox") {
      const checkBox = e.target;
      const addOn = e.target.closest("div.add-on");
      if (checkBox.checked) {
        addOn.classList.add("selected");
        setAddOnData({
          ...addOnData,
          [e.target.name]: +e.target.value * price,
        });
      } else {
        addOn.classList.remove("selected");
        setAddOnData({ ...addOnData, [e.target.name]: 0 });
      }
    }
  };

  useEffect(() => {
    setFormData({ ...formData, addOnData });
  }, [addOnData]);
  return (
    <>
      <h1 className="step-title">Pick add-ons</h1>
      <h2 className="step-description">
        Add-ons help enhance your gaming experience.
      </h2>
      <div className="add-on-container">
        <div className="add-on">
          <div className="right-side">
            <input
              name="online-serv"
              value="1"
              onChange={handleAddOn}
              type="checkbox"
            />
            <div className="add-on-text-wrapper">
              <p>Online Service</p>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <div className="price">{`+${1 * price}/${duration}`}</div>
        </div>
        <div className="add-on">
          <div className="right-side">
            <input
              name="large-storage"
              value="2"
              onChange={handleAddOn}
              type="checkbox"
            />
            <div className="add-on-text-wrapper">
              <p>Larger Storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <div className="price">{`+${2 * price}/${duration}`}</div>
        </div>
        <div className="add-on">
          <div className="right-side">
            <input
              name="customizable-profile"
              value="2"
              onChange={handleAddOn}
              type="checkbox"
            />
            <div className="add-on-text-wrapper">
              <p>Customizable profile</p>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <div className="price">{`+${2 * price}/${duration}`}</div>
        </div>
      </div>
    </>
  );
}

export default Step3;
