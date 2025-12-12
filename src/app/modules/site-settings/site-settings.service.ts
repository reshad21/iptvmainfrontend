import { ISiteSettings } from './site-settings.interface';
import { SiteSettings } from './site-settings.model';

const SETTINGS_ID = 'site-settings-singleton'; // Use a fixed ID for singleton


const getSettings = async () => {
    let settings = await SiteSettings.findOne();
    if (!settings) {
        // Create default settings if not exist
        settings = await SiteSettings.create({
            logo: '',
            sitename: '',
            favicon: '',
        });
    }
    // Always return non-undefined fields
    return {
        _id: settings._id,
        logo: settings.logo || '',
        sitename: settings.sitename || '',
        favicon: settings.favicon || '',
        __v: settings.__v,
    };
};


const updateSettings = async (payload: Partial<ISiteSettings>) => {
    let settings = await SiteSettings.findOne();
    if (!settings) {
        settings = await SiteSettings.create({
            logo: payload.logo || '',
            sitename: payload.sitename || '',
            favicon: payload.favicon || '',
        });
    } else {
        Object.assign(settings, payload);
        await settings.save();
    }
    // Always return non-undefined fields
    return {
        _id: settings._id,
        logo: settings.logo || '',
        sitename: settings.sitename || '',
        favicon: settings.favicon || '',
        __v: settings.__v,
    };
};

export const SiteSettingsService = {
    getSettings,
    updateSettings,
};
