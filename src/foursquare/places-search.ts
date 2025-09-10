
import * as dotenv from 'dotenv'
import type { FourSquareQuerySchema } from '../schemas/FourSquareQuerySchema.js';
import type z from 'zod';
import { FourSquareResultSchema } from '../schemas/FourSquareResultSchema.js';

dotenv.config();

const FSQ_DEFAULT_HEADERS = {
    fsq_category_ids: "4d4b7105d754a06374d81259",
    accept: 'application/json',
}

const DEFAULT_HEADERS = {
    'X-Places-Api-Version': '2025-06-17' as const
}

const placesSearch = async (query: z.infer<typeof FourSquareQuerySchema>, apiToken: string) => {
    const stringifiedParams = JSON.stringify({
        ...query.parameters,
        ...FSQ_DEFAULT_HEADERS,
    })
    const params: Record<string, string> = JSON.parse(stringifiedParams)
    const urlParams = new URLSearchParams(params);
    const fsqUrl = "https://places-api.foursquare.com/places/search?" + urlParams.toString();
    const res = await fetch(fsqUrl, {
        method: "GET",
        headers: { ...DEFAULT_HEADERS, authorization: "Bearer " + apiToken }
    })

    if (res.status !== 200) {

        throw new Error("Failed to get the API")
    }

    const jsonRes = await res.json()
    const parsedResults = FourSquareResultSchema.parse(jsonRes)
    return parsedResults
}

export async function lookupRestaurant(query: z.infer<typeof FourSquareQuerySchema>): Promise<z.infer<typeof FourSquareResultSchema>> {
    const fsqApiKey = process.env.FSQ_PLACES_API_KEY
    if (!fsqApiKey) throw new Error("FSQ API KEY is not defined!");

    const results = await placesSearch(query, fsqApiKey)
    return results
}
