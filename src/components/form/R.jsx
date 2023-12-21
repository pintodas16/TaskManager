import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can submit or process the data here
      console.log("Form data:", formData);
      setSubmitted(true); // Set a submitted flag
    } else {
      // Form is not valid, display error messages
      console.log(errors);
    }
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div>
      <h2>Login</h2>
      {submitted ? (
        <div className="success-message text-green-500">Login successful!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              className="border border-black focus:border-green-400"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="border border-black focus:border-green-400"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <button type="submit" disabled={!isFormValid}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
