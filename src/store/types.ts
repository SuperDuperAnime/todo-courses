export type CategoriesType = "anime" | "character" | "favorite"
export type ActiveViewType = 'results' | 'content'
export type CategoriesViewType = CategoriesType | 'top'
export interface CardType {
    isFavorite?: boolean;
    mal_id: number;
    image_url: string;
    title?: string;
    synopsis?: string;
    name?: string;
    alternative_names?: string[] | undefined;
}

export interface IResponse {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    results: CardType[];
}

export interface IResponseTop {
    request_hash: string,
    request_cached: boolean,
    request_cache_expiry: number,
    top: TopType[]
}
export interface TopType {
    isFavorite?: boolean
    mal_id: number,
    title: string,
    url: string,
    image_url: string,
}
export interface IAnimeResponse {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    results: IAnimeType[];
}

export interface IAnimeType {
    mal_id: number;
    url: string;
    image_url: string;
    title: string;
    airing: boolean;
    synopsis: string;
    type: string;
    episodes: number;
    score: number;
    start_date: string;
    end_date: string;
    members: number;
    rated: string;
}

export interface ICharacterResponse {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    results: ICharacterType[];
}

export interface ICharacterType {
    mal_id: number;
    url: string;
    image_url: string;
    name: string;
    alternative_names: string[];
    anime: IAnimeFromCharacterResponse[];
    manga: IMangaFromCharacterResponse[];
}

interface IAnimeFromCharacterResponse {
    mal_id: number;
    type: "anime";
    name: string;
    url: string;
}

interface IMangaFromCharacterResponse {
    mal_id: number;
    type: "manga";
    name: string;
    url: string;
}
