// routes/shorturlroute.js

import express from 'express';
import ShortUrlController from '../controllers/ShortUrlController.js';

const router = express.Router();


router.get('/', ShortUrlController.getAllShortUrls);
router.post('/shortUrls', ShortUrlController.createShortUrl);
router.get('/:shortUrl', ShortUrlController.redirectShortUrl);


export default router;
