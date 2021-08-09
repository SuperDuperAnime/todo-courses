import React from 'react';
import {Box} from "rebass/styled-components";
import store from "../../store/store";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {CardSmall} from "../Search/CardSmall";
import {Typography} from "../../App";
import layoutStore from "../../store/layoutStore";



import {IconButton, Input, makeStyles, Paper} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// пока не работает api используем фейковый
const cardList = store.data===null? 'Введите поиск!!!' : store.data.map(item=> <CardSmall
    key={Math.random()}
    img={item.image_url}
    title={item.title || item.name}
    subtitle={item.synopsis || item.alternative_names}
    isFavorite={item.isFavorite}
    card = {item}
/>)



const useStyles = makeStyles((theme) => ({
    resultsWrapper: {
	   position: "absolute",
	   width: "100%",
	   height: "100%",
	   maxHeight: "100%",
	   overflowY: 'hidden',
	   backgroundColor: "blue",
	   gridColumn: '2/3',
	   gridRow: '1/3',
	   [theme.breakpoints.down('sm')]: {
		  gridColumn: '1/2',
		  gridRow: '2/3'
	   },
	   [theme.breakpoints.down('xs')]: {
		  gridColumn: '1/2',
	   }
    },
    input: {
	   position: "relative",
	   width: "100%",
	   backgroundColor: 'white',
	   [theme.breakpoints.down('sm')]: {
		  display: "none"
	   },
	   [theme.breakpoints.down('xs')]: {
		  display: "none"
	   }
    },
    inputWrapper: {
	   display: 'flex',
	   maxWidth: "320px",
	   width: "100%",
	   [theme.breakpoints.down('sm')]: {
		  display: "none"
	   },
	   [theme.breakpoints.down('md')]: {
		  display: "none"
	   }
    },
}))

export const Results = observer(() => {
    const classes = useStyles()
    // пока не работает api используем фейковый
    const cardList = store.data === null ? null : store.data.map(item => <CardSmall
	   key={Math.random() + item.mal_id}
	   img={item.image_url}
	   title={item.title || item.name}
	   subtitle={item.synopsis || item.alternative_names}
	   isFavorite={item.isFavorite}
	   card={item}
    />)
    return (
	   <ResultsWrapper className={classes.resultsWrapper} onClick={() => {
		  layoutStore.setModalOpen(false)
	   }} open={layoutStore.resultsOpen}>
		  <Paper className={classes.inputWrapper}>
			 <Box1Input className={classes.input} placeholder={'big'} value={store.textInput} onChange={(e) => {
				store.setTextInput(e.target.value)
			 }}/><IconButton onClick={() => {
			 store.startSearch()
			 console.log('dawdwa')
			 layoutStore.setModalOpen(false)
			 layoutStore.setResultsOpen(true)
			 layoutStore.setContentOpen(false)
		  }}><SearchIcon/></IconButton>
		  </Paper>
		  <ResultsBlock>
			 <Typography>{store.category}</Typography>
			 {cardList}
		  </ResultsBlock>
	   </ResultsWrapper>
    );
})

const ResultsWrapper = styled.div`
  position: relative;
  background: coral;
  overflow-x: hidden;
  height: 100%;
  transition: all 0.3s;
  top: 0;
  @media (max-width: 959.95px) {
    top: ${props => props.open ? 0 : '-100%'};
  }
  @media (max-width: 599.95px) {
    top: 0;
  }
`
const Box1Input = styled(Input)`

`

const ResultsBlock = styled.div`
`