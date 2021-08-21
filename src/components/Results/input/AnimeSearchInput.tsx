import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";
import store from "../../../store/store";
import { observer } from "mobx-react-lite";
import LayoutStore from "../../../store/LayoutStore";
import { Typography } from "@material-ui/core";
import { categories } from "../../Category/Category";
import ErrorStore from "../../../store/ErrorStore";
import { animeGuard, characterGuard, topAnimeGuard, topCharactersGuard } from "../../../store/types";

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
  const [textInput, setTextInput] = useState("");
  const validator = () => {
    if (textInput.length <= 3) {
      ErrorStore.changeTextError("Введите больше 3 букв");
      ErrorStore.toggleAlertError(true);
      return;
    } else {
      store.startSearchWithDelay(4000, textInput);
      LayoutStore.setActiveCategory();
    }
  };
  
  
  // const searchDataFavorite = store.favorite.filter(item => {
  //   return item.title?.tolowerCase().includes(textInput.toLowerCase())
  // })

  
//   let filterFavorite = store.favorite.filter(item => {
//     if(animeGuard(item)) {
//         return item.title.toLowerCase().includes(textInput.toLowerCase())
//         console.log(item)
//     }
//     if (characterGuard(item)){
//         return item.name.toLowerCase().includes(textInput.toLowerCase())
//         console.log(item)
//     }
//     if (topAnimeGuard(item)){
//         return item.title.toLowerCase().includes(textInput.toLowerCase())
//         console.log(item)
//     }
//     if (topCharactersGuard(item)){
//         return item.title.toLowerCase().includes(textInput.toLowerCase())
//         console.log(item)
//     }
    
// })
useEffect(() => {
  if (store.category === "favorite") store.startSearch(textInput);
}, [textInput])





  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
          store.category === "favorite" ?
          store.startSearch(textInput) :
          validator();
        
      }}
      className={classes.root}
    >
      <Typography className={classes.label}>
        {categories.map((el) => (el.value === store.category ? el.text : null))}
      </Typography>
      <InputBase
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
        className={classes.input}
        //todo а если не аниме?
        placeholder="Start searching Anime"
        inputProps={{ "aria-label": "search Anime" }}
      />

      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={validator}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
});
