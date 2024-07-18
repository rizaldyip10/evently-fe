export interface SearchQueryType {
    [key: string]: any;
    event: string | null;
    date: string | null;
    category: string | null;
    city: string | null;
    page: number;
    size: number;
}