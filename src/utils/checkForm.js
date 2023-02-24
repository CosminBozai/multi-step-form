export default function checkForm(username, email, phone) {
  const errors = { usernameErr: false, emailErr: false, phoneErr: false };
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /^[0-9]+$/;

  if (username.trim() == "") {
    errors.usernameErr = "This field cannot be empty";
  }

  if (!emailRegex.test(email.trim())) {
    errors.emailErr = "This is not a valid email";
    if (email.trim() == "") {
      errors.emailErr = "This field cannot be empty";
    }
  }

  if (!phoneRegex.test(phone.trim())) {
    errors.phoneErr = "A phone number should be only digits";
    if (phone.trim() == "") {
      errors.phoneErr = "This field cannot be empty";
    }
  }

  return errors;
}
