import React, { useState } from 'react';
import axios from 'axios';
import './PostJob.css';

function PostJob() {
  const [form, setForm] = useState({
    title: '',
    company: '',
    category: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/jobs', form);
      alert('Job posted successfully!');
      setForm({ title: '', company: '', category: '', location: '', description: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="post-job">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} required />
        <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} required />
        <select name="category" value={form.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
        </select>
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" value={form.description} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostJob;
