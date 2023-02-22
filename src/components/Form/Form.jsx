import "./Form.scss";
import sidebarImageMobile from "../../assets/images/bg-sidebar-mobile.svg";
import NextStep from "../NextStep/NextStep";
import StepIndicator from "../StepIndicator/StepIndicator";

function Form() {
  return (
    <div className="form-component">
      <div className="sidebar">
        <StepIndicator />
      </div>
      <main className="form-body"></main>
      <NextStep />
    </div>
  );
}

export default Form;
