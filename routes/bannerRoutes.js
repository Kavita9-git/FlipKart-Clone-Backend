import express from 'express';
import Banner from '../models/banner.js';

const router = express.Router();

// GET all banners
router.get('/', async (req, res) => {
  try {
    const banners = await Banner.find();
    res.json(banners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
