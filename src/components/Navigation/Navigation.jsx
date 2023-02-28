import "./Navigation.scss";

function Navigation({
  currentStep,
  handleNextStep,
  handleGoBack,
  handleConfirm,
  disabled,
}) {
  return (
    <div className="next-step-container">
      <button
        onClick={handleGoBack}
        className={`go-back ${currentStep === 1 ? "invisible" : ""}`}
      >
        Go back
      </button>
      <button
        className={`next ${currentStep === 4 ? "display-none" : ""}`}
        onClick={handleNextStep}
        disabled={disabled}
      >
        Next Step
      </button>
      <button
        className={`confirm ${currentStep === 4 ? "" : "display-none"}`}
        onClick={handleConfirm}
      >
        Confirm
      </button>
    </div>
  );
}

export default Navigation;
