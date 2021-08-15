import React, {useState} from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import store from "../../../store/store";
import { observer } from "mobx-react-lite";
import { animeData } from "../../../store/Category/anime";
import { naruto } from "../../../store/Category/q=Naruto";
import LayoutStore from "../../../store/LayoutStore";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { categories } from "../../Category/Category";


const useStyles = makeStyles({
    root: {
      display: "flex",
      position: "relative",
      width: 244,
      height: 64,
      cursor: "pointer",
      margin: "8px auto",
    },
    input: {
      marginLeft: 2,
      flex: 1,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    label: {
      position: "absolute",
      top: 2,
      left: 8,
      fontSize: 10,
      opacity: 0.7,
    },

    iconButton: {},
  });

export const AnimeSearchInput = observer(() => {
  const classes = useStyles();
  const [textInput, setTextInput] = useState('')
  return (
    <Paper  
    component="form" 
    onSubmit = {(e) => { 
      e.preventDefault();
      store.startSearch(textInput);
      LayoutStore.setActiveCategory();
    }} 
    className={classes.root}>
      <Typography className={classes.label}>
        {categories.map((el) => (el.value === store.category ? el.text : null))}
      </Typography>
      <InputBase
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value)
        }}
        className={classes.input}
        //todo а если не аниме?
        placeholder="Start searching Anime"
        inputProps={{ "aria-label": "search Anime" }}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={() => {
          store.startSearch(textInput);
          LayoutStore.setActiveCategory();
          // store.category === 'anime' ? store.startFakeSearch(animeData.results) : store.category === 'character' ? store.startFakeSearch(naruto.results) : store.startFakeSearch(null)
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
});