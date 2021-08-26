import {
  AnimeType,
  CardType,
  CharacterType,
  FullCharactersType,
  TopAnimeType,
  TopCharactersType,
} from "./types";
import {
  Body,
  FullAnimeBody,
  FullCharacterBody,
  ShortCharacterBody,
  TopAnimeBody,
} from "../factory";

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

export function ShortCharacterBodyGuard(
  body: Body
): body is ShortCharacterBody {
  return Array.isArray(body as ShortCharacterBody);
}
export function ShortAnimeBodyGuard(body: Body): body is string {
  return typeof (body as string) === "string";
}
export function TopCharacterBodyGuard(body: Body): body is string {
  return typeof (body as string) === "string";
}

export function TopAnimeGuard(body: Body): body is TopAnimeBody {
  return (body as TopAnimeBody).episodes !== undefined;
}
export function FullCharacterBodyGuard(body: Body): body is FullCharacterBody {
  return (body as FullCharacterBody).nicknames !== undefined;
}
export function FullAnimeBodyGuard(body: Body): body is FullAnimeBody {
  return (body as FullAnimeBody).aired !== undefined;
}

// | ShortCharacterBody
// | ShortAnimeBody
// | TopAnimeBody
// | TopCharactersType
// | FullAnimeBody
// | FullCharacterBody;
