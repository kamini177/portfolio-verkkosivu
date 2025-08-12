import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Your Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Your Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
