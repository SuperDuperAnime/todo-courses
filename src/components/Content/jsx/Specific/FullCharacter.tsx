import React from "react";
import { CardGeneral } from "../../../../store/factory";
import {
  FullAnimeBodyGuard,
  FullCharacterBodyGuard,
  ShortAnimeBodyGuard,
} from "../../../../store/types/guards";
import { z } from "zod";
import { AnimeFromCharacterResponseZod } from "../../../../store/types/zod";

interface TopCharacterProp {
  data: CardGeneral;
}

export const FullCharacters = ({ data }: TopCharacterProp) => {
  if (!FullCharacterBodyGuard(data.body)) return null;

  return (
    <div>
      name_kanji= {data.body.name_kanji}
      nicknames={" "}
      {data.body.nicknames.map((el) => (
        <div>{el}</div>
      ))}
      about= {data.body.about}
      animeography={" "}
      {data.body.animeography.map((el) => (
        <div>{el}</div>
      ))}
    </div>
  );
};
