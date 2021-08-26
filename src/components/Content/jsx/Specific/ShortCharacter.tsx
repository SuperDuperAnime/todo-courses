import React from "react";
import { CardGeneral } from "../../../../store/factory";
import {
  ShortCharacterBodyGuard,
  TopCharacterBodyGuard,
} from "../../../../store/types/guards";
import { ToggleTypeCard } from "../ToggleTypeCard";

interface TopCharacterProp {
  data: CardGeneral;
}

export const ShortCharacter = ({ data }: TopCharacterProp) => {
  if (!ShortCharacterBodyGuard(data.body)) return null;
  return (
    <div>
      animeographia=
      {data.body.map((el) => (
        <div>{el.mal_id}</div>
      ))}
      <ToggleTypeCard />
    </div>
  );
};
