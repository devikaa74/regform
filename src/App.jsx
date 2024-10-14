import React, { useState } from 'react';
import './index.css'; // Import your CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dob: '',
    agreeToTerms: false, // New state for the checkbox
  });

  const [errors, setErrors] = useState({});
  const [passwordFocus, setPasswordFocus] = useState(false); // New state for password focus

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear the error for the field being updated
    setErrors({
      ...errors,
      [name]: '', // Clear the error for this specific field
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Registration successful!'); // Show alert message
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        dob: '',
        agreeToTerms: false, // Reset checkbox
      });
      setErrors({});
      setPasswordFocus(false); // Reset password focus
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h1 className="text-center text-primary">Register Form</h1>
        <div className="mb-3">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="form-input"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="mb-3">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            onFocus={() => setPasswordFocus(true)} // Set focus state when password field is clicked
          />
          {passwordFocus && formData.password.length < 6 && (
            <span className="text-danger">At least 6 characters required</span>
          )}
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="form-input"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <div className="mb-3">
          <select
            id="gender"
            name="gender"
            className="form-input"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div className="mb-3">
          <input
            type="date"
            id="dob"
            name="dob"
            className="form-input"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>
        <div className="terms-checkbox mb-3">
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            I agree to the terms and conditions
          </label>
          {errors.agreeToTerms && <span className="error">{errors.agreeToTerms}</span>}
        </div>
        <button className="submit-button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
