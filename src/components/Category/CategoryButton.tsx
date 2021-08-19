import React from "react";
import store from "../../store/store";
import { Button, makeStyles } from "@material-ui/core";
import { CategoriesType } from "../../store/types";
import { observer } from "mobx-react-lite";
import { colors } from "../../store/colors";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    color: colors.secondaryText,

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, .35)",
    },
  },
  buttonActive: {
    backgroundColor: "rgba(0, 0, 0, .35)",
  },
}));
export const CategoryButton = observer(({ data }: CategoryButtonProp) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      className={`${classes.button} ${
        store.category === data.value ? classes.buttonActive : null
      }`}
      onClick={(e) => {
        store.setCategory(data.value);
      }}
    >
      {data.text}
    </Button>
  );
});

interface CategoryButtonProp {
  data: {
    value: CategoriesType;
    text: string;
  };
}
