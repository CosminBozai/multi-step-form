import "./Form.scss";
import Navigation from "../Navigation/Navigation";
import StepIndicator from "../StepIndicator/StepIndicator";
import { useEffect, useState } from "react";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import Step5 from "../Step5/Step5";

const steps = [Step1, Step2, Step3, Step4, Step5];

function Form() {
  const [formData, setFormData] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const handleNextStep = () => {
    if (currentStep !== 4) setCurrentStep((currentStep) => currentStep + 1);
  };

  const handleGoBack = () => {
    if (currentStep !== 1) setCurrentStep((currentStep) => currentStep - 1);
  };

  const handleConfirm = () => {
    setCurrentStep(5);
  };

  useEffect(() => {
    console.log("🚀 ~ file: Form.jsx:34 ~ useEffect ~ formData:", formData);
  }, [formData]);

  const StepComponent = steps[currentStep - 1];

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
          formData={formData}
          setFormData={setFormData}
          setDisabled={setDisabled}
        />
      </main>
      <Navigation
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        handleGoBack={handleGoBack}
        handleConfirm={handleConfirm}
        disabled={disabled}
      />
    </div>
  );
}

export default Form;
