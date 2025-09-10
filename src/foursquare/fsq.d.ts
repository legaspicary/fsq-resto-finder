declare module "@api/fsq-developers-places" {
    export function auth(authToke: string): void;
    export function placeSearch(search: {
        query: string,
        fsq_category_ids: string,
        price: number,
        open_now: boolean,
        rating: number,
        near: string,
        'X-Places-Api-Version': '2025-06-17'
    }): Promise<unknown>
    export const version: string;
} expor