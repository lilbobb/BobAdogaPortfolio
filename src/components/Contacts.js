import React, { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    let error = false;

    if (!formData.name) {
      console.error("Name is required");
      error = true;
    }

    if (!formData.email) {
      console.error("Email is required");
      error = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      console.error("Email is invalid");
      error = true;
    }

    if (!formData.message) {
      console.error("Message is required");
      error = true;
    }

    return error;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const error = validateForm();

    if (!error) {
      console.log("Form is valid. Submit it to the server");
    }
  };

  return (
    <div className="formfield">
      <h1>Contacts</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contacts;
