import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles({
  root: {
    display: "flex",
    position: "relative",
    width: 240,
    background: "rgba(255,255,255,0.5)",
    // minWidth: 250,
    height: 64,
    cursor: "pointer",
    margin: "8px auto",
  },
  media: {
    border: "1px solid rgba(255,255,255,0.8)",
    width: 56,
    height: 56,
    borderRadius: "100%",
    margin: 4,
  },

  fav: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 25,
    height: 25,
  },
});

interface ICardSmall {
  textDescription: ReactNode;
  img: string;
  favorite: JSX.Element | null;

  onClick: () => void;
}

export const CardSmall = observer(
  ({ img, favorite, textDescription, onClick }: ICardSmall) => {
    const classes = useStyles();

    return (
      <Card className={classes.root} onClick={onClick}>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        {textDescription}
        <Box className={classes.fav}>{favorite}</Box>
      </Card>
    );
  }
);
