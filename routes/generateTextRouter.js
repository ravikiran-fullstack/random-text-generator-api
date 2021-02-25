import express from 'express';

import { generateText, generateTextCustom } from '../controllers/generateTextController.js';

const generateTextRouter = express.Router();

generateTextRouter.get('/generate', generateText);

generateTextRouter.get('/generate/:paraCount/:paraSize', generateTextCustom);

export default generateTextRouter; 