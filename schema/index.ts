import { z } from 'zod';

export const InfoGirl = z.object({
    fullName: z.string({ required_error: 'name is required' }),
    phone: z.string({
        required_error: 'name is required',
    }),
});
