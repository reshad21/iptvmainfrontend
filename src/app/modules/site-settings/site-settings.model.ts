import { Schema, model } from 'mongoose';
import { ISiteSettings } from './site-settings.interface';

const siteSettingsSchema = new Schema<ISiteSettings>({
    logo: { type: String, required: true },
    sitename: { type: String, required: true },
    favicon: { type: String, required: true },
}, {
    timestamps: true,
});

export const SiteSettings = model<ISiteSettings>('SiteSettings', siteSettingsSchema);
