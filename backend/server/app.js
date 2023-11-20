// app.js

import express from 'express';
import mongoose from 'mongoose';
import shortUrlRoutes from './routes/ShortUrlRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/backenddb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/', shortUrlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
