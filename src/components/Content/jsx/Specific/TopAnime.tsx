import React from "react";
import { CardGeneral } from "../../../../store/factory";
import { TopAnimeGuard } from "../../../../store/types/guards";
import { ToggleTypeCard } from "../ToggleTypeCard";
import { TextBlock } from "./TextBlock";

interface TopAnimeProp {
  data: CardGeneral;
}

export const TopAnime = ({ data }: TopAnimeProp) => {
  if (!TopAnimeGuard(data.body)) return null;
  const { episodes, rank, score } = data.body;
  return (
    <div>
      <TextBlock prefix={"Episodes"} data={episodes} />
      <TextBlock prefix={"Rank"} data={rank} />
      <TextBlock prefix={"Score"} data={score} />

      <ToggleTypeCard />
    </div>
  );
};
