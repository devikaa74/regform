import React, { useState } from 'react';
import './index.css'; // Import your CSS file

const HigherSecondaryAdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
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
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile must be a 10-digit number';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.course) newErrors.course = 'Please select a course';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(`Data stored successfully!\n\nSubmitted Data:\nName: ${formData.name}\nAddress: ${formData.address}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nGender: ${formData.gender}\nDate of Birth: ${formData.dob}\nCourse: ${formData.course}`);
      // Reset form
      setFormData({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: '',
      });
      setErrors({});
    }
  };

  const handleCancel = () => {
    // Reset form data and errors
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="admission-form">
        <h1 className="text-center text-primary">Higher Secondary Admission</h1>
        
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
            id="address"
            name="address"
            placeholder="Address"
            className="form-input"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        
        <div className="mb-3">
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Mobile Number"
            className="form-input"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
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
        
        <div className="mb-3">
          <select
            id="course"
            name="course"
            className="form-input"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
          {errors.course && <span className="error">{errors.course}</span>}
        </div>
        
        <div className="button-group">
          <button className="submit-button" type="submit">Register</button>
          <button className="cancel-button" type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default HigherSecondaryAdmissionForm;
