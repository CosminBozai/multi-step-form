import "./Navigation.scss";

function Navigation({ currentStep, handleNextStep, handleGoBack, disabled }) {
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
        onClick={handleNextStep}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Navigation;
