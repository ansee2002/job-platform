import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/jobs', jobRoutes);

app.get('/', (req, res) => {
  res.send('Job Board API is running...');
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
