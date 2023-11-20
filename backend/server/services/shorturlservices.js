// services/shorturlservice.js

import ShortUrl from '../models/shortUrl.js';

const ShortUrlService = {
  getAllShortUrls: async () => {
    return await ShortUrl.find();
  },

  createShortUrl: async (preferredUrl, fullUrl) => {
    const shortUrl = preferredUrl || shortid.generate();
    await ShortUrl.create({ full: fullUrl, short: shortUrl });
  },

  redirectShortUrl: async (shortUrl) => {
    const shortUrlDocument = await ShortUrl.findOne({ short: shortUrl });

    if (!shortUrlDocument) {
      return null;
    }

    shortUrlDocument.clicks++;
    shortUrlDocument.save();

    return shortUrlDocument.full;
  },
};

export default ShortUrlService;
