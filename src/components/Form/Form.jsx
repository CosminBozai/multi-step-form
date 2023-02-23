import "./Form.scss";
import NextStep from "../NextStep/NextStep";
import StepIndicator from "../StepIndicator/StepIndicator";
import { useState } from "react";
import Step1 from "../Step1/Step1";

function Form() {
  const [formData, setFormData] = useState({});
  const [stepData, setStepData] = useState(null);

  const handleSubmit = () => {
    setFormData({ ...formData, ...stepData });
  };

  return (
    <div className="form-component">
      <div className="sidebar-small">
        <StepIndicator />
      </div>
      <div className="sidebar-large">
        <StepIndicator />
      </div>
      <main className="form-body">
        <Step1 />
      </main>
      <NextStep handleSubmit={handleSubmit} />
    </div>
  );
}

export default Form;
