import express from 'express';
import { projects, register } from '../controllers/projectController.js'

const router = express.Router();

router.get('/', projects);
router.post('/', register);

export default router;