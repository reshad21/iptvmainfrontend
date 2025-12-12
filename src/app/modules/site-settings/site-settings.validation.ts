import { z } from 'zod';

export const updateSiteSettingsValidationSchema = z.object({
    body: z.object({
        logo: z.string().url().optional(),
        sitename: z.string().min(1).optional(),
        favicon: z.string().url().optional(),
    })
});
