import { z } from "zod";

export type CategoriesType = "anime" | "character" | "favorite";
export type ActiveViewType = "results" | "content";
export type CategoriesViewType = CategoriesType | "topAnime" | "topCharacters";

export type CardType = (
  | CharacterType
  | AnimeType
  | TopAnimeType
  | TopCharactersType
) &
  IIsFavorite;
export type CardType1 = {
  mal_id: number;
  title: string;
  description: string;
  image_url: string;
  isFavorite: boolean;
  category: CategoriesViewType;
};

export interface IIsFavorite {
  isFavorite?: boolean;
}

export interface IResponse {
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

const AnimeFromCharacterResponseZod = z.object({
  mal_id: z.number(),
  type: z.literal("anime"),
  name: z.string(),
  url: z.string(),
});
export type AnimeFromCharacterResponseType = z.infer<
  typeof AnimeFromCharacterResponseZod
>;

const MangaFromCharacterResponseZod = z.object({
  mal_id: z.number(),
  type: z.literal("manga"),
  name: z.string(),
  url: z.string(),
});
type MangaFromCharacterResponseType = z.infer<
  typeof MangaFromCharacterResponseZod
>;

const CharacterZod = z.object({
  mal_id: z.number(),
  url: z.string(),
  image_url: z.string(),
  name: z.string(),
  alternative_names: z.string().array(),
  anime: z.array(AnimeFromCharacterResponseZod),
  manga: z.array(MangaFromCharacterResponseZod),
});

const AnimeZod = z.object({
  mal_id: z.number(),
  url: z.string(),
  image_url: z.string(),
  title: z.string(),
  synopsis: z.string(),
});

const TopAnimeZod = z.object({
  mal_id: z.number(),
  episodes: z.number(),
  score: z.number(),
  title: z.string(),
  rank: z.number(),
  url: z.string(),
  image_url: z.string(),
});
const TopCharactersZod = z.object({
  mal_id: z.number(),
  animeography: z.array(AnimeFromCharacterResponseZod),
  title: z.string(),
  rank: z.number(),
  url: z.string(),
  image_url: z.string(),
});

export type CharacterType = z.infer<typeof CharacterZod>;
export type AnimeType = z.infer<typeof AnimeZod>;
export type TopAnimeType = z.infer<typeof TopAnimeZod>;
export type TopCharactersType = z.infer<typeof TopCharactersZod>;

export function characterGuard(data: CardType): data is CharacterType {
  return (data as CharacterType).alternative_names !== undefined;
}
export function animeGuard(data: CardType): data is AnimeType {
  return (data as AnimeType).synopsis !== undefined;
}
export function topAnimeGuard(data: CardType): data is TopAnimeType {
  return (data as TopAnimeType).score !== undefined;
}
export function topCharactersGuard(data: CardType): data is TopCharactersType {
  return (data as TopCharactersType).animeography !== undefined;
}
