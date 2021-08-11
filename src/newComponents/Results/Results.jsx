import React from 'react';
import {Box} from "rebass/styled-components";
import store from "../../store/store";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {IconButton, Input, makeStyles,} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {CardSmall} from "./CardSmall";
import {AnimeSearchInput} from "./input/AnimeSearchInput"


const useStyles = makeStyles((theme) => ({
    root: {
	   display: "flex",
	   flexDirection: "column",
	   width: "280px",
	   justifyContent: "center",
	   alignItems: "center",
    },
    cardsList: {
	   position: "relative",
	   flexGrow: 1,
	   width: "260px"
    },
    cardsListScroll: {
	   position: "absolute",
	   maxHeight: '85%',
	   width: "260px",
	   overflowY: "auto",
    }
}))

export const Results = observer(() => {
	   const classes = useStyles()
	   const cardList = store.data === null ? <div>Введите данные</div> : store.data.map(item => <CardSmall
		  key={Math.random() + item.mal_id}
		  img={item.image_url}
		  title={item.title || item.name}
		  subtitle={item.synopsis || item.alternative_names}
		  category={item.synopsis ? "anime" : "character"
		  }
		  isFavorite={item.isFavorite}
		  card={item}
	   />)
	   return <Box className={classes.root}>

		  <Box className={classes.cardsList}>
			 <AnimeSearchInput/>
			 <Box className={classes.cardsListScroll}>
				{cardList}
			 </Box>
		  </Box>


	   </Box>
    }
)

const Grid = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(200px, 300px))`