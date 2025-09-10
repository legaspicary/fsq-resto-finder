import z from "zod";

export const ExecuteResponseApiSchema = z.object({
    name: z.string(),
    address: z.string(),
    // rating: z.number(), <-- unavailable at pro tier with free 10K calls
    // price: z.number(), <-- unavialable at pro tier
    // hours: z.object({
    //     day: z.number(),
    //     open: z.number(),
    //     close: z.number(),
    // }).array(),
})