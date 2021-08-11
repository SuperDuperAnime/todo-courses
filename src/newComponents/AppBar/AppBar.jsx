import React, {useState} from 'react';
import {
    AppBar,
    Box, Container,
    Divider,
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

const useStyles = makeStyles((theme) => ({
    wrapper: {
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
				<Typography variant="h4" component="h2">
				    SuperDuperAnime
				</Typography>
			 </Toolbar>
		  </Container>
		  <Divider/>
	   </AppBar>
    )
}
