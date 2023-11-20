// routes/index.js
import express from 'express';
import shortUrlRoutes from './ShortUrlRoutes.js';

const router = express.Router();

// Other routes can be added here if needed

// Use the shortUrlRoutes for routes related to short URLs
router.use('/shortUrls', shortUrlRoutes);

export default router;
