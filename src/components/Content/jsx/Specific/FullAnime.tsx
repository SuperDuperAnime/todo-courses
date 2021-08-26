import React from "react";
import { CardGeneral } from "../../../../store/factory";
import { FullAnimeBodyGuard } from "../../../../store/types/guards";

interface TopCharacterProp {
  data: CardGeneral;
}

export const FullAnime = ({ data }: TopCharacterProp) => {
  if (!FullAnimeBodyGuard(data.body)) return null;
  const from = data.body.aired.prop.from;
  const to = data.body.aired.prop.to;
  return (
    <div>
      score= {data.body.score}
      synopsis= {data.body.synopsis}
      episodes= {data.body.episodes}
      from = {`${from.day}.${from.month}.${from.year}`}
      to = {`${to.day}.${to.month}.${to.year}`}
      rank = {data.body.rank}
    </div>
  );
};
