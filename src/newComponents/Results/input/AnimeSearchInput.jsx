import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import store from "../../../store/store";
import {observer} from "mobx-react-lite";
import {animeData} from "../../../store/Category/anime";
import {naruto} from "../../../store/Category/q=Naruto";
import layoutStore from "../../../store/layoutStore";

const useStyles = makeStyles((theme) =>
    createStyles({
	   root: {
		  display: "flex",
		  position: "relative",
		  width: 244,
		  height: 64,
		  cursor: "pointer",
		  margin: "8px auto"

	   },
	   input: {
		  marginLeft: theme.spacing(1),
		  flex: 1,
	   },
	   divider: {
		  height: 28,
		  margin: 4,
	   },
	   iconButton: {},
    }),
);

export const AnimeSearchInput = observer(() => {
    const classes = useStyles();

    return (
	   <Paper component="form" className={classes.root}>
		  <InputBase
			 value={store.textInput} onChange={(e) => {
			 store.setTextInput(e.target.value)

		  }}
			 className={classes.input}
			 placeholder="Start searching Anime"
			 inputProps={{'aria-label': 'search Anime'}}
		  />
		  <IconButton className={classes.iconButton}
				    aria-label="search"
				    onClick={() => {
					   store.category === 'anime' ? store.startSearch(animeData.results) :store.category ==='character'? store.startSearch(naruto.results): store.startSearch(null)
				    }}>
			 <SearchIcon/>
		  </IconButton>

	   </Paper>
    );
})