import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";
import { observer } from "mobx-react-lite";
import { Typography } from "@material-ui/core";
import { colors } from "../../../store/colors";
import { CategoriesType, CategoriesViewType } from "../../../store/types/types";
import store from "../../../store/store";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: 300,
    height: 60,
  },
  input: {
    width: 216,
    borderRadius: 12,
    background: "rgba(26, 40, 47, 1)",
    color: colors.white,
    border: "1px solid " + colors.gray,
    padding: 4,
  },
  divider: {},
  label: {
    position: "absolute",
  },

  iconButton: {
    width: 60,
    height: 60,
    background: colors.green,
    borderRadius: 13,
  },
});

interface SearchProps {
  startSearch: () => void;
  activeCategory: CategoriesViewType;
  categories: { value: CategoriesType; text: string }[];
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
  textInput: string;
}

//todo onEnter
export const Search = observer(
  ({
    startSearch,
    activeCategory,
    categories,
    setTextInput,
    textInput,
  }: SearchProps) => {
    const classes = useStyles();
    const activeCategoryText = categories.map((el) =>
      el.value === activeCategory ? el.text : null
    );
    const onChangeText = (e: any) => {
      store.textSearch = e;
    };
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          startSearch();
        }}
        className={classes.root}
      >
        <Typography className={classes.label}>{activeCategoryText}</Typography>
        <InputBase
          value={store.textSearch}
          onChange={(e) => {
            setTextInput(e.target.value);
            onChangeText(e.target.value);
          }}
          className={classes.input}
          //todo а если не аниме?
          placeholder={`Start searching ${activeCategory}`}
          inputProps={{ "aria-label": "search Anime" }}
        />

        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={() => {
            startSearch();
          }}
        >
          <SearchIcon />
        </IconButton>
      </form>
    );
  }
);
