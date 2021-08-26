import React from "react";
import { CardGeneral } from "../../../../store/factory";
import { ShortAnimeBodyGuard } from "../../../../store/types/guards";
import { ToggleTypeCard } from "../ToggleTypeCard";

interface TopCharacterProp {
  data: CardGeneral;
}

export const ShortAnime = ({ data }: TopCharacterProp) => {
  if (!ShortAnimeBodyGuard(data.body)) return null;
  return (
    <div>
      about=
      {data.body}
      <ToggleTypeCard />
    </div>
  );
};
