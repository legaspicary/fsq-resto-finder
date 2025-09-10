import {z} from 'zod'

export const ExecuteApiQuerySchema = z.object({
    message: z.string().max(500),
    code: z.string().max(20),
})