import React, {ReactHTML, ReactHTMLElement, useEffect, useRef, useState}from "react";
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import {
    IconButton,
    Input,
    makeStyles,
    Paper,
    Box,
    CircularProgress,
    BoxProps,
} from "@material-ui/core";
import {CardSmall} from "./CardSmall/CardSmall";
import {AnimeSearchInput} from "./input/AnimeSearchInput";
import LayoutStore from "../../store/LayoutStore";
import {categories} from "../Category/Category";
import {CardSmallContainer} from "./CardSmall/CardSmallContainer";
import axios from "axios";
import {colors} from "../../store/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "280px",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        height: "calc(100vh - 64px - 32px)",
        background: colors.tertiaryBG,
    },
    cardsList: {
        position: "relative",
        flexGrow: 1,
        width: "260px",
    },
    cardsListScroll: {
        position: "absolute",
        height: "calc(100vh - 64px - 132px)",
        width: "260px",
        overflowY: "auto",
    },
}));

export const Results = observer(() => {
    const classes = useStyles();

    const toResultRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        toResultRef.current?.scrollTo(0, 0)
    }, [LayoutStore.categoryView])

    function scrollResult(e: any) {
        if (e.target.scrollHeight - (e.target.scrollTop + (window.innerHeight-e.target.getBoundingClientRect().top)) < 100) {
            store.setFetching(true)
            
        }
    }
    useEffect( () => {
        console.log('Store Fetching',store.fetching)
        if (store.fetching) {
            console.log(LayoutStore.categoryView)
            switch(LayoutStore.categoryView) {
                case "topAnime" : store.getTopAnime()
                break;
                case "topCharacters" : store.getTopCharacters()
                break;
                case 'character':
                case 'anime'  : store.startSearchWithDelay(4000, store.textSearch)
                break;
                // case 'favorite' : store.scrollFavorite(localStorage.getItem("favoriteArr"))
                // break;
                default:
                    store.setFetching(false)
            }
            
            
        }
      }, [store.fetching])
    
    //todo если нет поиска, то надо показывать всё подряд
    const cardList =
        store.data === null ? (
            <div>Введите данные</div>
        ) : (
            store.data.map(el => {
                return (
                    <CardSmallContainer key={`${el.mal_id}${Math.random()}`} data={el}/>
                );
            })
        );

    return (
        <Paper className={classes.root}>
            <Box className={classes.cardsList}>
                <AnimeSearchInput/>

                <Box>
                    {LayoutStore.categoryView}
                </Box>
                
                <div ref = {toResultRef} onScroll = {scrollResult} className={classes.cardsListScroll}>{cardList}</div>
            </Box>
        </Paper>
    );
});
