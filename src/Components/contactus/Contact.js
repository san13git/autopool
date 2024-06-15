import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> support@autopool.com</p>
        {/* <p><strong>Office Address:</strong> 123 Auto Pool Lane, Ride City, CA 90210</p>
        <p><strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM</p> */}
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <select name="subject" value={formData.subject} onChange={handleChange} required>
            <option value="">Select Subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Business Inquiry">Business Inquiry</option>
          </select>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
