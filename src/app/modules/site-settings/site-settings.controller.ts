import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SiteSettingsService } from './site-settings.service';

const getSettings = catchAsync(async (req, res) => {
    const result = await SiteSettingsService.getSettings();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Site settings fetched successfully',
        data: result,
    });
});

const updateSettings = catchAsync(async (req, res) => {
    const result = await SiteSettingsService.updateSettings(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Site settings updated successfully',
        data: result,
    });
});

export const SiteSettingsController = {
    getSettings,
    updateSettings,
};
