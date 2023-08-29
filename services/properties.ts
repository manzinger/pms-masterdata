import express from 'express';
import { createProperty, updateProperty, deleteProperty } from '../controllers/properties';

const router = express.Router();

// Create property
router.post('/properties', (req, res) => {
  // Implementation details for creating a property
  createProperty(req, res);
});

// Update property
router.put('/properties/:id', (req, res) => {
  // Implementation details for updating a property
  updateProperty(req, res);
});

// Delete property
router.delete('/properties/:id', (req, res) => {
  // Implementation details for deleting a property
  deleteProperty(req, res);
});

export default router;