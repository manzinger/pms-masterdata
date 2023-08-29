import express from 'express';
import { setDistributionSettings, getDistributedData, createDistributionSettings, updateDistributionSettings, deleteDistributionSettings } from '../controllers/distributionSettings';

const router = express.Router();

// Set distribution settings for properties
router.post('/distribution-settings', setDistributionSettings);

// Get distributed data based on distribution settings
router.get('/distributed-data', getDistributedData);

// Create distribution settings
router.post('/create-distribution-settings', createDistributionSettings);

// Update distribution settings
router.put('/update-distribution-settings/:id', updateDistributionSettings);

// Delete distribution settings
router.delete('/delete-distribution-settings/:id', deleteDistributionSettings);

export default router;