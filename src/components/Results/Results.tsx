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

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "280px",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        height: "calc(100vh - 64px - 32px)",
        background: "linear-gradient(113.18deg, #FFCADC 0%, #C8FFFD 58.33%)",
    },
    cardsList: {
        position: "relative",
        flexGrow: 1,
        width: "260px",
    },
    cardsListScroll: {
        position: "absolute",
        height: "calc(100vh - 64px - 128px)",
        width: "260px",
        overflowY: "auto",
    },
}));

export const Results = observer(() => {
    const classes = useStyles();

    const toResultRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        toResultRef.current?.scrollTo(0, 0)
    }, [store.category])

    function scrollResult(e: any) {
        if (e.target.scrollHeight - (e.target.scrollTop + (window.innerHeight-e.target.getBoundingClientRect().top)) < 100) {
            store.setFetching(true)
        }
    }
    useEffect( () => {
        if (store.fetching) {
            switch(store.category) {
                case "anime" : store.getTopAnime()
                break;
                case "character" : store.getTopCharacters()
                break;
                default:
                return
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
                    // <CardSmall
                    //   key={Math.random() + item.mal_id}
                    //   img={item.image_url}
                    //   title={item.title || item.name}
                    //   name={item.name}
                    //   synopsis={item.synopsis}
                    //   alternative_names={item.alternative_names}
                    //   category={item.synopsis ? "anime" : "character"}
                    //   isFavorite={item.isFavorite}
                    //   card={item}
                    // />
                    <CardSmallContainer key={`${el.mal_id}${Math.random()}`} data={el}/>
                );
            })
        );
   let text = 'Top'
    categories.forEach(el => el.value === LayoutStore.categoryView ?  text= el.text : null)
    return (
        <Paper className={classes.root}>
            <Box className={classes.cardsList}>
                <AnimeSearchInput/>

                <Box>
                    {text}
                </Box>
                
                <div ref = {toResultRef} onScroll = {scrollResult} className={classes.cardsListScroll}>{cardList}</div>
            </Box>
        </Paper>
    );
});
