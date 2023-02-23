import "./NextStep.scss";

function NextStep({ currentStep, handleSubmit, handleGoBack }) {
  return (
    <div className="next-step-container">
      <button
        onClick={handleGoBack}
        className={`go-back ${currentStep === 0 ? "invisible" : ""}`}
      >
        Go back
      </button>
      <button onClick={handleSubmit}>Next Step</button>
    </div>
  );
}

export default NextStep;
