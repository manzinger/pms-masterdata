import express from 'express';
import { createAmenity, updateAmenity, deleteAmenity, getAmenities, getAmenityById } from '../controllers/amenities';

const router = express.Router();

// Create amenity
router.post('/amenities', (req, res) => {
  createAmenity(req, res);
});

// Update amenity
router.put('/amenities/:id', (req, res) => {
  updateAmenity(req, res);
});

// Delete amenity
router.delete('/amenities/:id', (req, res) => {
  deleteAmenity(req, res);
});

// Get list of amenities
router.get('/amenities', (req, res) => {
  getAmenities(req, res);
});

// Get amenity by ID
router.get('/amenities/:id', (req, res) => {
  getAmenityById(req, res);
});

export default router;