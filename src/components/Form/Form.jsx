import "./Form.scss";
import sidebarImageMobile from "../../assets/images/bg-sidebar-mobile.svg";
import NextStep from "../NextStep/NextStep";

function Form() {
  return (
    <div className="form-component">
      <div className="sidebar">
        <img
          src={sidebarImageMobile}
          alt="backround image"
          className="bg-image-mobile"
        />
      </div>
      <main className="form-body"></main>
      <NextStep />
    </div>
  );
}

export default Form;
