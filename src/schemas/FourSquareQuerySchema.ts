import z from "zod";

export const FourSquareParamsSchema = z.object({
    query: z.string(),
    near: z.string(),
    price: z.number().min(1).max(4),
    open_now: z.boolean(),
    rating: z.number().min(0).max(10),
})
export const FourSquareQuerySchema = z.object({
    action: z.literal("restaurant_search"),
    parameters: FourSquareParamsSchema,
})