import { useEffect, useState } from "react";
import checkForm from "../../utils/checkForm";
import "./Step1.scss";

function Step1({ formData, setFormData, setDisabled }) {
  const [errors, setErrors] = useState({
    usernameErr: false,
    emailErr: false,
    phoneErr: false,
  });
  const [inputVisited, setInputVisited] = useState({
    username: false,
    email: false,
    phone: false,
  });
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setInputVisited({ ...inputVisited, [name]: true });
  };

  useEffect(() => {
    setErrors(checkForm(userData.username, userData.email, userData.phone));
  }, [userData]);

  useEffect(() => {
    setDisabled(true);
    if (errors.usernameErr || errors.emailErr || errors.phoneErr) {
      setDisabled(true);
    } else {
      setDisabled(false);
      setFormData({ ...formData, userData });
    }
  }, [errors]);

  return (
    <>
      <h1 className="step-title">Personal info</h1>
      <h2 className="step-description">
        Please provide your name, email address, and phone number.
      </h2>
      <form>
        <label htmlFor="username">
          Name
          {inputVisited.username ? (
            <span className="error">{errors.usernameErr}</span>
          ) : (
            <span></span>
          )}
          <br />
          <input
            type="text"
            name="username"
            placeholder="e.g. Bozai Cosmin"
            onChange={handleInputChange}
            onBlur={() => setInputVisited({ ...inputVisited, username: true })}
            className={`${
              inputVisited.username && errors.usernameErr ? "invalid" : ""
            }`}
          />
        </label>
        <label htmlFor="email">
          Email Address
          {inputVisited.email ? (
            <span className="error"> {errors.emailErr}</span>
          ) : (
            <span></span>
          )}
          <br />
          <input
            type="email"
            name="email"
            placeholder="e.g. cosminbozai@gmail.com"
            onChange={handleInputChange}
            onBlur={() => setInputVisited({ ...inputVisited, email: true })}
            className={`${
              inputVisited.email && errors.emailErr ? "invalid" : ""
            }`}
          />
        </label>
        <label htmlFor="phone">
          Phone Number
          {inputVisited.phone ? (
            <span className="error"> {errors.phoneErr}</span>
          ) : (
            <span></span>
          )}
          <br />
          <input
            type="tel"
            name="phone"
            placeholder="Write any number"
            onChange={handleInputChange}
            onBlur={() => setInputVisited({ ...inputVisited, phone: true })}
            className={`${
              inputVisited.phone && errors.phoneErr ? "invalid" : ""
            }`}
          />
        </label>
      </form>
    </>
  );
}

export default Step1;
