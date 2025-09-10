import z from "zod"

export const FourSquareResultSchema = z.object({
    name: z.string(),
    location: z.object({
        address: z.string()
    }),
    // rating: z.number(), <-- unavailable at pro tier with free 10K calls
    // price: z.number(), <-- unavialable at pro tier
    // hours: z.object({
    //     day: z.number(),
    //     open: z.number(),
    //     close: z.number(),
    // }).array(),
})