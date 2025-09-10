import { z } from 'zod'

export const ExecuteRequestQueryApiSchema = z.object({
    message: z.string().max(500),
    code: z.string().max(20),
})