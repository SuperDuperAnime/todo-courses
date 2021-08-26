import React from "react";
import { CardGeneral } from "../../../../store/factory";
import { TopCharacterBodyGuard } from "../../../../store/types/guards";
import { ToggleTypeCard } from "../ToggleTypeCard";

interface TopCharacterProp {
  data: CardGeneral;
}

export const TopCharacter = ({ data }: TopCharacterProp) => {
  if (!TopCharacterBodyGuard(data.body)) return null;
  return (
    <div>
      nameJapan={data.body}
      <ToggleTypeCard />
    </div>
  );
};
