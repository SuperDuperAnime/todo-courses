import React, {useState} from 'react';
import {Box, Button, Container, IconButton, Input, makeStyles, Paper, Typography, useTheme} from "@material-ui/core";
import styled from "styled-components";
import {pink} from "@material-ui/core/colors";
import {Results} from "../Components/EnterComponents/Results";
import {Filter} from "../Components/EnterComponents/Filter";
import {Content} from "../Components/EnterComponents/Content";
import layoutStore from "../store/layoutStore";
import {observer} from "mobx-react-lite";
import SearchIcon from "@material-ui/icons/Search";
import store from "../store/store";


const useStyles = makeStyles((theme) => ({
    pageContent: {
	   position: "relative",
	   width: '100vw',
	   padding: "0 0",
	   height: "100%",
	   overflow: "scroll",
	   overflowX: "hidden",
	   backgroundColor: "red"
    },
    demoGridContainer: {
	   position: "relative",
	   height: "100%",
	   maxHeight: "100%",
	   display: "grid",
	   gridTemplateColumns: "1fr 1fr 3fr",
	   [theme.breakpoints.down('sm')]: {
		  gridTemplateRows: "auto 1fr",
		  gridTemplateColumns: "200px  minmax(300px, 900px)",
	   },
	   [theme.breakpoints.down('xs')]: {
		  gridTemplateColumns: "1fr",
	   }
    },
    box1: {
	   position: "absolute",
	   width: "100%",
	   height: "100%",
	   maxHeight: "100%",
	   backgroundColor: "green",
	   gridColumn: '1/2',
	   gridRow: '1/3',
	   left: 0,
	   top: 0,
	   [theme.breakpoints.down('sm')]: {
		  gridColumn: '1/2',
		  gridRow: '2/3'
	   },
	   [theme.breakpoints.down('xs')]: {
		  gridColumn: '1/2',
	   }
    },
    button: {
	   position: "absolute",
	   top: 0,
	   right: 0,
    },
    input: {
	   position: "relative",
	   width: "100%",
	   backgroundColor: 'white',
	   zIndex: 99,
	   [theme.breakpoints.down('sm')]: {
		  display: "none"
	   },
	   [theme.breakpoints.down('xs')]: {
		  display: "none"
	   }
    },
    inputWrapper: {
	   zIndex: 99,
	   display: 'none',
	   maxWidth: "320px",
	   width: "100%",
	   [theme.breakpoints.down('sm')]: {
		  display: "flex"
	   },
	   [theme.breakpoints.down('xs')]: {
		  display: "none"
	   }
    },

}))

export const Body = observer(({openMob, setOpenMob}) => {
    const theme = useTheme()
    const classes = useStyles()
    return (
	   <PageContent className={classes.pageContent}>
		  <DemoGridContainer className={classes.demoGridContainer}>
			 <Paper className={classes.inputWrapper}>
				<DemoGridInput className={classes.input}value={store.textInput} onChange={(e)=>{
				    store.setTextInput(e.target.value)
				}}  onClick={() => {
				    layoutStore.setFilterOpen(true)
				    layoutStore.setResultsOpen(false)
				}} type={"text"} placeholder={'mid'}/>
				<IconButton onClick={() => {
				    layoutStore.setFilterOpen(false)
				    layoutStore.setResultsOpen(true)
				}}><SearchIcon/></IconButton>
			 </Paper>

			 <FilterSection open={layoutStore.filterOpen} className={classes.box1}>
				<Filter/>
			 </FilterSection>


			 <Results/>

			 <Content/>
		  </DemoGridContainer>
	   </PageContent>
    );
})

const PageContent = styled(Box)`
  position: absolute;
  height: 100%;
  max-height: 100%;
`
const DemoGridContainer = styled(Container)`
`
const DemoGridInput = styled(Input)`
  display: none;
  @media (max-width: 959.95px) {
    display: block;
    grid-column: 1/2;
    grid-row: 1/2;
  }
  @media (max-width: 599.95px) {
    display: none;
  }

`
const FilterSection = styled.div`
  transition: all 0.3s;
  position: relative;
  @media (max-width: 959.95px) {
    left: ${props => props.open ? 0 : "-130%"};
  }
  @media (max-width: 599.95px) {
    display: none;
  }

`
