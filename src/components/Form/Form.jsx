import "./Form.scss";
import NextStep from "../NextStep/NextStep";
import StepIndicator from "../StepIndicator/StepIndicator";
import { useState } from "react";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";

const steps = [Step1, Step2, Step3];

function Form() {
  const [formData, setFormData] = useState({});
  const [stepData, setStepData] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = () => {
    // setFormData({ ...formData, ...stepData });
    if (currentStep !== steps.length - 1)
      setCurrentStep((currentStep) => currentStep + 1);
  };

  const handleGoBack = () => {
    if (currentStep !== 0) setCurrentStep((currentStep) => currentStep - 1);
  };

  const StepComponent = steps[currentStep];

  return (
    <div className="form-component">
      <div className="sidebar-small">
        <StepIndicator />
      </div>
      <div className="sidebar-large">
        <StepIndicator />
      </div>
      <main className="form-body">
        <StepComponent />
      </main>
      <NextStep
        currentStep={currentStep}
        handleSubmit={handleSubmit}
        handleGoBack={handleGoBack}
      />
    </div>
  );
}

export default Form;
