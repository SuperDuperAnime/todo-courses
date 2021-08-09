import React from 'react';
import {IconButton, Input, makeStyles, Paper} from "@material-ui/core";
import layoutStore from "../store/layoutStore";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import store from "../store/store";


const useStyles = makeStyles((theme) => ({
    inputWrapper: {
	   display: 'flex',
	   maxWidth: "320px",
	   width: "100%",
    },
    input: {
	   flex: 1,

    },
}))

export const AnimeInput = observer(() => {
    const classes = useStyles()
    return (
	   <Paper className={classes.inputWrapper}>
		  <AppBarInput className={classes.input} value={store.textInput} onChange={(e)=>{
		  store.setTextInput(e.target.value)
		  }} placeholder={'placeholdre'} type={'text'}
					onClick={() => {
					    layoutStore.setModalOpen(true)
					}}/>
		  <IconButton onClick={() => {
			 store.startSearch()
			 console.log('dawdwa')
			 layoutStore.setModalOpen(false)
			 layoutStore.setResultsOpen(true)
			 layoutStore.setContentOpen(false)
		  }}><SearchIcon/></IconButton>
	   </Paper>
    );
})

const AppBarInput = styled(Input)`
`