// controllers/shorturlcontroller.js

import ShortUrlService from '../services/shorturlservices.js';

const ShortUrlController = {
  getAllShortUrls: async (request, response) => {
    try {
      const shortUrls = await ShortUrlService.getAllShortUrls();
      response.render('index', { shortUrls });
    } catch (error) {
      console.error('Error fetching short URLs:', error);
      response.status(500).send('Internal Server Error');
    }
  },

  createShortUrl: async (request, response) => {
    try {
      const { preferredUrl, fullurl } = request.body;
      await ShortUrlService.createShortUrl(preferredUrl, fullurl);
      response.redirect('/');
    } catch (error) {
      console.error('Error creating short URL:', error);
      response.status(500).send('Internal Server Error');
    }
  },

  redirectShortUrl: async (request, response) => {
    try {
      const { shortUrl } = request.params;
      const redirectUrl = await ShortUrlService.redirectShortUrl(shortUrl);

      if (!redirectUrl) {
        return response.sendStatus(404);
      }

      response.redirect(redirectUrl);
    } catch (error) {
      console.error('Error redirecting short URL:', error);
      response.status(500).send('Internal Server Error');
    }
  },

};

export default ShortUrlController;
