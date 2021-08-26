import React from "react";
import { CardGeneral } from "../../../../store/factory";
import { TopAnimeGuard } from "../../../../store/types/guards";
import { ToggleTypeCard } from "../ToggleTypeCard";

interface TopAnimeProp {
  data: CardGeneral;
}

export const TopAnime = ({ data }: TopAnimeProp) => {
  if (!TopAnimeGuard(data.body)) return null;
  const { episodes, rank, score } = data.body;
  return (
    <div>
      episodes={episodes}
      rank={rank}
      score={score}
      <ToggleTypeCard />
    </div>
  );
};
