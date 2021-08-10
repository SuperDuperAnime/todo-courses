import React from 'react';
import {Box} from "rebass/styled-components";
import store from "../../store/store";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {IconButton, Input, makeStyles, } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {CardSmall} from "./CardSmall";
import {AnimeSearchInput} from "./input/AnimeSearchInput"




const useStyles = makeStyles((theme) => ({
  grid:{
      display:"grid",
	 width:"100%",
	 rowGap: "20px",
	 columnGap: '15px',
	 //gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))",
  }
}))

export const Results = observer(() => {
	   const classes = useStyles()
	   const cardList = store.data === null ? <div>Введите данные</div> : store.data.map(item => <CardSmall
		  key={Math.random() + item.mal_id}
		  img={item.image_url}
		  title={item.title || item.name}
		  subtitle={item.synopsis || item.alternative_names}
		  isFavorite={item.isFavorite}
		  card={item}
	   />)
	   return <Box className={classes.grid}>
			<AnimeSearchInput />
		  {cardList}

	   </Box>
    }
)

const Grid = styled.div`
grid-template-columns: repeat(auto-fill, minmax(200px, 300px))`