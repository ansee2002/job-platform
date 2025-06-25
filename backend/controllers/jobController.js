import Job from '../models/jobModel.js';

export const getJobs = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const jobs = await Job.find(filter).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const postJob = async (req, res) => {
  const { title, company, category, location, description } = req.body;

  if (!title || !company || !category || !location || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newJob = new Job({ title, company, category, location, description });
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
