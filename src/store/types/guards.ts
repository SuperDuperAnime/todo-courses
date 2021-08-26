import {
  AnimeType,
  CardType,
  CharacterType,
  TopAnimeType,
  TopCharactersType,
} from "./types";

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
  return (data as TopCharactersType).name_kanji !== undefined;
}
