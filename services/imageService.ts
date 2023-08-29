import express from 'express';
import { getImages } from '../controllers/imageService';

const router = express.Router();

// Get images from S3 in different sizes
router.get('/images', async (req, res) => {
  try {
    const images = await getImages();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;