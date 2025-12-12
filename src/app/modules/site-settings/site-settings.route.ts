import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from '../user/user.constant';
import { SiteSettingsController } from './site-settings.controller';
import { updateSiteSettingsValidationSchema } from './site-settings.validation';

const router = express.Router();

router.get('/', SiteSettingsController.getSettings);
router.patch(
    '/',
    auth(USER_ROLE.admin),
    validateRequest(updateSiteSettingsValidationSchema),
    SiteSettingsController.updateSettings
);

export const SiteSettingRoutes = router;
