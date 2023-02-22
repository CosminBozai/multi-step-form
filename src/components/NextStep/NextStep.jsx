import "./NextStep.scss";

function NextStep({ handleSubmit }) {
  return (
    <div className="next-step-container">
      <button className="go-back">Go back</button>
      <button onClick={handleSubmit}>Next Step</button>
    </div>
  );
}

export default NextStep;
