import express from 'express';
import {
  getCases,
  createCase,
  updateCase,
  getCaseById,
} from '../controllers/caseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getCases).post(protect, createCase);
router.route('/:id').get(protect, getCaseById).patch(protect, updateCase);

export default router;
