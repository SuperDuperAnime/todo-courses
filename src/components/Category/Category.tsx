import React from "react";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import { Button, ButtonGroup, makeStyles, Paper } from "@material-ui/core";
import { CategoriesType } from "../../store/types";
import { CategoryButton } from "./CategoryButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "150px",
    margin: 8,
    background: "linear-gradient(246.82deg, #FFCADC 0%, #C8FFFD 58.33%)",
    height: "calc(100vh - 96px)",
  },
  rootRow: {
    width: 280,
  },
  container: {
    display: "flex",
  },
  categories: {
    display: "flex",
    height: "100%",
    width: "100%",
    border: "none",
    flexDirection: "column",
  },
  categoriesRow: {
    flexDirection: "row",
  },
}));
export const categories: { value: CategoriesType; text: string }[] = [
  { value: "favorite", text: "Favorite" },
  { value: "anime", text: "Anime" },
  { value: "character", text: "Characters" },
  { value: "top", text: "Top" },
];
export const Category = observer(() => {
  const classes = useStyles();
  const categoriesButton = categories.map((el) => {
    return <CategoryButton key={el.value} data={el} />;
  });
  return (
    <Paper className={classes.root}>
      <ButtonGroup className={classes.categories}>
        {categoriesButton}
      </ButtonGroup>
    </Paper>
  );
});
