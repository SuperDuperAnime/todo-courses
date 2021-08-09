import React from 'react';
import {Box, IconButton, Input, makeStyles, Paper} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import layoutStore from "../store/layoutStore";
import {observer} from "mobx-react-lite";
import {Filter} from "../Components/EnterComponents/Filter";
import {AnimeInput} from "./AnimeInput";


const useStyles = makeStyles((theme) => ({
    modalWrapper: {
	   display: "none",
	   position: "relative",
	   height: "100%",

	   flexGrow: 1,
	   [theme.breakpoints.down('xs')]: {
		  display: 'flex',
		  alignItems: 'center',
	   }
    },
    modal: {
	   width: '100%',

	   position: "absolute",
	   [theme.breakpoints.down('xs')]: {
		  display: 'flex',
		  flexDirection: 'column',
		  alignItems: 'center',
	   }
    },

    filters: {
	   margin: "0 auto",
	   maxWidth: "320px",
	   width: "100%",

    }
}))

export const Modal = observer(() => {
    const classes = useStyles()
    return <ModalWrapper className={classes.modalWrapper}>
	   <ModalBody className={classes.modal}>
		  <AnimeInput/>
		  <AppbarFilter open={layoutStore.modalOpen} className={classes.filters}>
			 <Filter/>
		  </AppbarFilter>
	   </ModalBody>
    </ModalWrapper>
})


const ModalWrapper = styled(Box)`
`
const ModalBody = styled(Box)`

`

const AppbarFilter = styled(Box)`
  transition: all 0.3s;
  position: absolute;
  height: 300%;
  overflow-y: auto;
  @media (max-width: 599.95px) {
    top: ${props => props.open ? "100%" : '-400%'};
    opacity: ${props => props.open ? 1 : 0};
    background: green;
  }
`
