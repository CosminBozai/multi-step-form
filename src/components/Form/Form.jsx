import "./Form.scss";
import Navigation from "../Navigation/Navigation";
import StepIndicator from "../StepIndicator/StepIndicator";
import { useEffect, useState } from "react";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";

const steps = [Step1, Step2, Step3, Step4];

function Form() {
  const [formData, setFormData] = useState({});
  const [stepData, setStepData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleNextStep = () => {
    setDisabled(true);
    setFormData({ ...formData, ...stepData });
    setCurrentStep((currentStep) => currentStep + 1);
    setDisabled(false);
  };

  const handleGoBack = () => {
    if (currentStep !== 0) setCurrentStep((currentStep) => currentStep - 1);
  };

  useEffect(() => {
    console.log("🚀 ~ file: Form.jsx:31 ~ useEffect ~ formData:", formData);
  }, [formData]);

  const StepComponent = steps[currentStep];

  return (
    <div className="form-component">
      <div className="sidebar-small">
        <StepIndicator currentStep={currentStep} />
      </div>
      <div className="sidebar-large">
        <StepIndicator currentStep={currentStep} />
      </div>
      <main className="form-body">
        <StepComponent
          previousData={formData}
          stepData={stepData}
          setStepData={setStepData}
          setDisabled={setDisabled}
        />
      </main>
      <Navigation
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        handleGoBack={handleGoBack}
        disabled={disabled}
      />
    </div>
  );
}

export default Form;
