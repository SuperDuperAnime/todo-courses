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
import {Box, CircularProgress, Typography} from "@material-ui/core";
import {categories} from "../../Category/Category";

//todo ошибка компиляции, надо убрать createStyles
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
        label: {
            position: "absolute",
            top: 2,
            left: 8,
            fontSize: 10,
            opacity: 0.7
        },

        iconButton: {},
    }),
);

export const AnimeSearchInput = observer(() => {
    const classes = useStyles();

    //todo тут надо либо убрать form, либо добавить preventDefault в инпут
    // чтобы страница не перезагружалась при нажатии на enter после ввода текста
    return (
        <Paper component="form" className={classes.root}>
            <Typography
                className={classes.label}>{categories.map(el => el.value === store.category ? el.text : null)}</Typography>
            <InputBase
                value={store.textInput} onChange={(e) => {
                //todo по хорошему этот поиск не надо даже хранить в сторе, можно просто в стейте компонента
                //и передавать его в startSearch
                store.setTextInput(e.target.value)

            }}
                className={classes.input}
                //todo а если не аниме?
                placeholder="Start searching Anime"
                inputProps={{'aria-label': 'search Anime'}}
            />
            <IconButton className={classes.iconButton}
                        aria-label="search"
                        onClick={() => {
                            store.startSearch()
                            layoutStore.setActiveCategory()
                            // store.category === 'anime' ? store.startFakeSearch(animeData.results) : store.category === 'character' ? store.startFakeSearch(naruto.results) : store.startFakeSearch(null)
                        }}>
                <SearchIcon/>
            </IconButton>

        </Paper>
    );
})
