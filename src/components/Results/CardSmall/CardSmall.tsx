import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { observer } from "mobx-react-lite";
import { colors } from "../../../store/colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    // width: 312,
    width: 300,
    height: 60,
    margin: "16px 0",
    background: "transparent",
  },
  media: {
    width: 60,
    height: 60,
    minWidth: 60,
    minHeight: 60,
    maxWidth: 60,
    maxHeight: 60,
    borderRadius: 99,
  },
  titleBox: {
    position: "relative",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    padding: 8,
    borderBottom: "1px solid " + colors.gray,
  },
  title: {
    position: "absolute",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "calc(100% - 16px)",
    color: colors.white,
    fontWeight: 200,
  },
  fav: {},
});

interface ICardSmall {
  title: string;
  img: string;
  favorite: JSX.Element | null;
  onClick: () => void;
}

export const CardSmall = observer(
  ({ img, favorite, onClick, title }: ICardSmall) => {
    const classes = useStyles();

    return (
      <div className={classes.root} onClick={onClick}>
        <CardMedia className={classes.media} image={img} title="img" />
        <div className={classes.titleBox}>
          <Typography className={classes.title} variant={"h5"}>
            {title}
          </Typography>
        </div>
        <Box className={classes.fav}>{favorite}</Box>
      </div>
    );
  }
);
