import React from "react";
import { Button, makeStyles } from "@material-ui/core";

interface ToggleTypeCardProp {
  children?: React.ReactNode;
}

const useStyle = makeStyles({
  root: {},
});
export const ToggleTypeCard = ({ children }: ToggleTypeCardProp) => {
  const classes = useStyle();
  return <Button>Go to Full Card</Button>;
};
