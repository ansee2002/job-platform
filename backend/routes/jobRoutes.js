import express from 'express';
import { getJobs, postJob } from '../controllers/jobController.js';

const router = express.Router();

router.get('/', getJobs);    
router.post('/', postJob);   

export default router;
