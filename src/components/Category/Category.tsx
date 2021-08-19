import React from "react";
import { observer } from "mobx-react-lite";
import { ButtonGroup, makeStyles, Paper } from "@material-ui/core";
import { CategoriesType } from "../../store/types";
import { CategoryButton } from "./CategoryButton";
import { colors } from "../../store/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "150px",
    margin: 8,
    background: colors.tertiaryBG,
    height: "calc(100vh - 96px)",
    boxShadow: "4px 4px 8px 0px rgba(74, 97, 114, 0.2)",
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
