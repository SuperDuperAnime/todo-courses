import { z } from "zod";
import {
  AnimeFromCharacterResponseZod,
  AnimeZod,
  CharacterZod,
  FullAnimeZod,
  FullCharacterZod,
  MangaFromCharacterResponseZod,
  TopAnimeZod,
  TopCharactersZod,
} from "./zod";

export type CategoriesType = "anime" | "character" | "favorite";
export type ActiveViewType = "results" | "content";
export type CategoriesViewType = CategoriesType | "topAnime" | "topCharacters";
export type CardType =
  | CharacterType
  | AnimeType
  | TopAnimeType
  | TopCharactersType;

export type CardType1 = {
  mal_id: number;
  title: string;
  description: string;
  image_url: string;
  isFavorite: boolean;
  category: CategoriesViewType;
};

export interface ExtraTypes {
  isFavorite?: boolean;
  category?: CategoriesViewType;
}

export interface IResponse {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  results: CardType[];
}

export interface IResponseNew {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  results: CardType[];
}

export interface IResponseTop {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  top: TopAnimeType[] | TopCharactersType[];
}

export type AnimeFromCharacterResponseType = z.infer<
  typeof AnimeFromCharacterResponseZod
>;

export type MangaFromCharacterResponseType = z.infer<
  typeof MangaFromCharacterResponseZod
>;

export type CharacterType = z.infer<typeof CharacterZod>;
export type AnimeType = z.infer<typeof AnimeZod>;
export type TopAnimeType = z.infer<typeof TopAnimeZod>;
export type TopCharactersType = z.infer<typeof TopCharactersZod>;
export type FullCharactersType = z.infer<typeof FullCharacterZod>;
export type FullAnimeType = z.infer<typeof FullAnimeZod>;
