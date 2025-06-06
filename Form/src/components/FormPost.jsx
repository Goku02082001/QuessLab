import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/FormPost.css';

const FormPost = ({ show }) => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    ProfilePhoto: "",
    LinkedInProfile: "",
    Twitter: "",
    Role: "Employee",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/post", formData);
      alert("Form submitted successfully!");
      setFormData({
        FirstName: "",
        LastName: "",
        ProfilePhoto: "",
        LinkedInProfile: "",
        Twitter: "",
        Role: "Employee",
      });
    } catch (error) {
      alert("Form submission failed.");
    }
  };

  return (
    <div className={`form-container-wrapper ${show ? 'slide-in' : ''}`}>
      <div className="form-container">
        <h2>Submit Profile Form</h2>
        <form onSubmit={handleSubmit} className='form'>
          <input type="text" name="FirstName" placeholder="First Name" value={formData.FirstName} onChange={handleChange} required />
          <input type="text" name="LastName" placeholder="Last Name" value={formData.LastName} onChange={handleChange} required />
          <input type="text" name="ProfilePhoto" placeholder="Profile Photo URL" value={formData.ProfilePhoto} onChange={handleChange} required />
          <input type="text" name="LinkedInProfile" placeholder="LinkedIn Profile" value={formData.LinkedInProfile} onChange={handleChange} required />
          <input type="text" name="Twitter" placeholder="Twitter Profile" value={formData.Twitter} onChange={handleChange} required />
          <select name="Role" value={formData.Role} onChange={handleChange} required>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            <option value="Ceo">Ceo</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPost;
