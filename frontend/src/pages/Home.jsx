import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchJobs();
  }, [category]);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/jobs${category ? `?category=${category}` : ''}`);
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>Find Your Dream Job.</h1>
        <p>Search jobs by title, company, or category</p>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">All Categories</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
        </select>
      </section>

      <section className="job-listings">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Category:</strong> {job.category}</p>
            <p><strong>Location:</strong> {job.location}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
