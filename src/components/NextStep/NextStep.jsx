import "./NextStep.scss";

function NextStep({ currentStep, handleSubmit, handleGoBack }) {
  const buttonText = currentStep === 3 ? "Confirm" : "Next Step";
  return (
    <div className="next-step-container">
      <button
        onClick={handleGoBack}
        className={`go-back ${currentStep === 0 ? "invisible" : ""}`}
      >
        Go back
      </button>
      <button
        className={`${currentStep === 3 ? "confirm" : ""}`}
        onClick={handleSubmit}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default NextStep;
