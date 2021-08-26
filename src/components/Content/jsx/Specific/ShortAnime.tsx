import React from "react";
import { CardGeneral } from "../../../../store/factory";
import { ShortAnimeBodyGuard } from "../../../../store/types/guards";
import { ToggleTypeCard } from "../ToggleTypeCard";
import { TextBlock } from "./TextBlock";

interface TopCharacterProp {
  data: CardGeneral;
}

export const ShortAnime = ({ data }: TopCharacterProp) => {
  if (!ShortAnimeBodyGuard(data.body)) return null;
  return (
    <div>
      <TextBlock prefix={"About"} data={data.body} />

      <ToggleTypeCard />
    </div>
  );
};
