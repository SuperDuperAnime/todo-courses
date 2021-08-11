import React, {useState} from 'react';
import {
    AppBar,
    Box, Container,
    Divider, Hidden,
    IconButton,
    Input,
    makeStyles,
    Paper,
    TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import layoutStore from "../../store/layoutStore";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '64px',
	   display: "flex",
	   background: "rgba(130, 188, 255, 1)",
    },
    toolbar: {}


}))

export const Appbar = () => {
    const classes = useStyles()
    return (
	   <AppBar position={"static"} className={classes.wrapper} color={'transparent'} elevation={0}>
		  <Container>
			 <Toolbar className={classes.toolbar}>
				<Hidden mdUp>
				<IconButton onClick={()=>{
				layoutStore.toggleMobPanel(true)
				}}>
				    <MenuIcon/>
				</IconButton>
				</Hidden>
				<Typography variant="h5" component="h2">
				    SuperDuperAnime
				</Typography>
			 </Toolbar>
		  </Container>
	   </AppBar>
    )
}
