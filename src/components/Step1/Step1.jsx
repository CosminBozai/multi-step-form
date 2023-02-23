import "./Step1.scss";

function Step1() {
  return (
    <>
      <h1 className="step-title">Personal info</h1>
      <h2 className="step-description">
        Please provide your name, email address, and phone number.
      </h2>
      <form>
        <label htmlFor="name">
          Name
          <br />
          <input type="text" name="name" placeholder="e.g. Bozai Cosmin" />
        </label>
        <label htmlFor="email">
          Email Address
          <br />
          <input type="email" name="email" className="invalid" />
        </label>
        <label htmlFor="phone">
          Phone Number
          <br />
          <input type="text" name="phone" />
        </label>
      </form>
    </>
  );
}

export default Step1;
