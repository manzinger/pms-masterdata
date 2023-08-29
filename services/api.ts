import express from 'express';
import amenitiesRouter from './amenities';
import distributionSettingsRouter from './distributionSettings';
import imageServiceRouter from './imageService';

const router = express.Router();

// Mount amenities router
router.use('/amenities', amenitiesRouter);

// Mount distribution settings router
router.use('/distributionSettings', distributionSettingsRouter);

// Mount image service router
router.use('/imageService', imageServiceRouter);

export default router;