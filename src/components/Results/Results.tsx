import React from "react";
import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { CardSmallContainer } from "./CardSmall/CardSmallContainer";
import { colors } from "../../store/colors";
import { SearchContainer } from "./Search/SearchContainer";
import { CardGeneral } from "../../store/factory";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    padding: 8,
    minWidth: 320,
    background: colors.primaryBG,
    height: "calc(100vh - 64px)",
    overflow: "hidden",
  },
  cardsList: {
    overflowY: "auto",
  },
  resultsLabel: {
    padding: 4,
    color: colors.green,
  },
  cardsListScroll: {
    overflowY: "auto",
  },
}));

export const Results = ({
  resultsTitle,
  data,
  toResultRef,
  scrollResult,
}: ResultsProp) => {
  const classes = useStyles();

  const cardList = data.map((el) => {
    if (el !== undefined)
      return (
        <CardSmallContainer key={`${el.mal_id}${Math.random()}`} data={el} />
      );
  });

  return (
    <Paper className={classes.root}>
      <SearchContainer />
      <Box className={classes.resultsLabel}>
        <Typography variant={"button"}>{resultsTitle}</Typography>
      </Box>
      <div
        ref={toResultRef}
        onScroll={scrollResult}
        className={classes.cardsListScroll}
      >
        {cardList}
      </div>
    </Paper>
  );
};

interface ResultsProp {
  resultsTitle: string;
  data: CardGeneral[];
  toResultRef: React.RefObject<HTMLDivElement>;
  scrollResult: (e: any) => void;
}
