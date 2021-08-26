import React from "react";
import { CardGeneral } from "../../../../store/factory";
import {
  ShortCharacterBodyGuard,
  TopCharacterBodyGuard,
} from "../../../../store/types/guards";
import { ToggleTypeCard } from "../ToggleTypeCard";
import { makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../../../store/colors";

interface TopCharacterProp {
  data: CardGeneral;
}
const useStyle = makeStyles({
  root: {
    display: "flex",
    padding: 8,
    flexDirection: "column",
    alignItems: "flex-end",
    borderBottom: `1px solid ${colors.primaryText}`,
  },
  prefix: {
    opacity: 0.8,
  },
  text: {
    flexGrow: 1,
    marginLeft: 8,
  },
  anime: {
    display: "flex",
    flexDirection: "column",
  },
});
export const ShortCharacter = ({ data }: TopCharacterProp) => {
  const classes = useStyle();
  if (!ShortCharacterBodyGuard(data.body)) return null;
  return (
    <div>
      <div className={classes.root}>
        <Typography variant={"h3"} className={classes.prefix}>
          Hero in this Anime:
        </Typography>
        <div className={classes.anime}>
          {data.body.map((el) => (
            <div>{el.name}</div>
          ))}
        </div>
      </div>

      <ToggleTypeCard />
    </div>
  );
};
