// models/shortUrl.js

import mongoose from 'mongoose';
import shortid from 'shortid';

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    unique: true,
    default: shortid.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  tier: {
    type: String,
  },
});

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);

export default ShortUrl;
