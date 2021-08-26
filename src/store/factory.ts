import {
  AnimeType,
  CharacterType,
  FullAnimeType,
  FullCharactersType,
  TopAnimeType,
  TopCharactersType,
} from "./types/types";
import {
  AnimeZod,
  CharacterZod,
  FullAnimeZod,
  FullCharacterZod,
} from "./types/zod";
import favoriteStore from "./favoriteStore";

export const animeShortFactory = (data: AnimeType): CardGeneral => {
  AnimeZod.parse(data);
  let card: CardGeneral = {
    isFavorite: favoriteStore.initialCheckFavorite(data.mal_id), //проверка
    type: "short",
    entity: "anime",
    mal_id: data.mal_id,
    image_url: data.image_url,
    title: data.title,
    body: data.synopsis,
  };
  return card;
};
export const characterShortFactory = (data: CharacterType): CardGeneral => {
  CharacterZod.parse(data);
  let card: CardGeneral = {
    isFavorite: favoriteStore.initialCheckFavorite(data.mal_id),
    type: "short",
    entity: "character",
    mal_id: data.mal_id,
    image_url: data.image_url,
    title: data.name,
    body: data.anime,
  };
  return card;
};
export const characterTopFactory = (data: TopCharactersType): CardGeneral => {
  let card: CardGeneral = {
    isFavorite: favoriteStore.initialCheckFavorite(data.mal_id),
    type: "top",
    entity: "character",
    mal_id: data.mal_id,
    image_url: data.image_url,
    title: data.title,
    body: {
      name_kanji: data.name_kanji,
    },
  };
  return card;
};

export const animeTopFactory = (data: TopAnimeType): CardGeneral => {
  let card: CardGeneral = {
    isFavorite: favoriteStore.initialCheckFavorite(data.mal_id),
    type: "top",
    entity: "anime",
    mal_id: data.mal_id,
    image_url: data.image_url,
    title: data.title,
    body: {
      rank: data.rank,
      score: data.score,
      episodes: data.episodes,
    },
  };
  return card;
};

export const characterFullFactory = (data: FullCharactersType): CardGeneral => {
  FullCharacterZod.parse(data);
  let card: CardGeneral = {
    isFavorite: favoriteStore.initialCheckFavorite(data.mal_id),
    type: "full",
    entity: "character",
    mal_id: data.mal_id,
    image_url: data.image_url,
    title: data.name,
    body: {
      about: data.about,
      nicknames: data.nicknames,
      name_kanji: data.name_kanji,
      animeography: data.animeography,
    },
  };
  return card;
};

export const animeFullFactory = (data: FullAnimeType): CardGeneral => {
  FullAnimeZod.parse(data);
  let card: CardGeneral = {
    isFavorite: favoriteStore.initialCheckFavorite(data.mal_id),
    type: "full",
    entity: "anime",
    mal_id: data.mal_id,
    image_url: data.image_url,
    title: data.title,
    body: {
      episodes: data.episodes,
      aired: data.aired,
      synopsis: data.synopsis,
      score: data.score,
      rank: data.rank,
    },
  };
  return card;
};
//todo переместить в types
export interface CardGeneral {
  isFavorite: boolean;
  type: "top" | "full" | "short";
  entity: "anime" | "character";
  mal_id: number;
  image_url: string;
  title: string;
  body: any;
}
