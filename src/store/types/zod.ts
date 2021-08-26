import { z } from "zod";

export const MangaFromCharacterResponseZod = z.object({
  mal_id: z.number(),
  type: z.literal("manga"),
  name: z.string(),
  url: z.string(),
});
export const AnimeFromCharacterResponseZod = z.object({
  mal_id: z.number(),
  type: z.literal("anime"),
  name: z.string(),
  url: z.string(),
});
export const TopAnimeZod = z.object({
  mal_id: z.number(),
  episodes: z.number(),
  score: z.number(),
  title: z.string(),
  rank: z.number(),
  url: z.string(),
  image_url: z.string(),
});
export const TopCharactersZod = z.object({
  mal_id: z.number(),
  name_kanji: z.string(),
  title: z.string(),
  rank: z.number(),
  url: z.string(),
  image_url: z.string(),
});
export const CharacterZod = z.object({
  mal_id: z.number(),
  url: z.string(),
  image_url: z.string(),
  name: z.string(),
  alternative_names: z.string().array(),
  anime: z.array(AnimeFromCharacterResponseZod),
});

export const AnimeZod = z.object({
  mal_id: z.number(),
  url: z.string(),
  image_url: z.string(),
  title: z.string(),
  synopsis: z.string(),
});
export const FullCharacterZod = z.object({
  mal_id: z.number(),
  url: z.string(),
  image_url: z.string(),
  name: z.string(),
  name_kanji: z.string(),
  nicknames: z.array(z.string()),
  about: z.string(),
  animeography: z.array(AnimeFromCharacterResponseZod),
});
export const FullAnimeZod = z.object({
  mal_id: z.number(),
  url: z.string(),
  image_url: z.string(),
  title: z.string(),
  episodes: z.number(),
  aired: z.object({
    prop: z.object({
      from: z.object({ day: z.number(), month: z.number(), year: z.number() }),
      to: z.object({ day: z.number(), month: z.number(), year: z.number() }),
    }),
  }),
  synopsis: z.string(),
  score: z.number(),
  rank: z.number(),
});
