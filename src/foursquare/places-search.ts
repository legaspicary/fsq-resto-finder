
import * as dotenv from 'dotenv'
import type { FourSquareQuerySchema } from '../schemas/FourSquareQuerySchema.js';
import type z from 'zod';
import { FourSquareResultSchema } from '../schemas/FourSquareResultSchema.js';
import * as fsqDevelopersPlaces from "@api/fsq-developers-places";

dotenv.config();

const FSQ_DEFAULT_CONFIG = {
    // category for restaurants in their latest api
    fsq_category_ids: "4d4b7105d754a06374d81259",
    'X-Places-Api-Version': '2025-06-17' as const
}

export async function lookupRestaurant(query: z.infer<typeof FourSquareQuerySchema>): Promise<z.infer<typeof FourSquareResultSchema>> {
    const fsqApiKey = process.env.FSQ_PLACES_API_KEY
    if (!fsqApiKey) throw new Error("FSQ API KEY is not defined!");

    fsqDevelopersPlaces.auth('Z531SUQ4PKW5WGEED4GNNWWHM0M5YHEZ23Z1KXNDOTTEYSU5');
    const results = fsqDevelopersPlaces.placeSearch({
        ...query.parameters,
        ...FSQ_DEFAULT_CONFIG,
    })
    const parsedResults = FourSquareResultSchema.parse(results)
    return parsedResults
}
