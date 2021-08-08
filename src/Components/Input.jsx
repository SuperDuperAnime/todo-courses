import React, {useEffect} from 'react';
import store from "../store/store";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import layoutStore from "../store/layoutStore";
import {animeData} from "../store/Category/anime";
import {naruto} from "../store/Category/q=Naruto";

export const Input = observer((props) => {
let fakeApiData = store.category === "anime"? animeData.results: naruto.results
    return (
	   <InputCore
		  value={store.textInput}
		  onFocus={() => {
			 layoutStore.setFilterOpen(true)
		  }}
		  onKeyUp={(e) => {
			 if (e.key === "Enter") {
				console.log('нажал на кнопку')
				store.startSearch(fakeApiData)
				layoutStore.setFilterOpen(false)
			 }
		  }}
		  onChange={(e) => {
			 store.setTextInput(e.target.value)
		  }}
		  {...props}
	   />
    );
})

const InputCore = styled.input`
  display: ${props => props.hideLG ? "none" : "block"};
  width: 100%;
  height: 50px;
  font-family: Roboto;
  font-size: 30px;
  @media (max-width: 952px) {
    display: ${props => props.hideMD ? "none" : "block"};
  }
  @media (max-width: 576px) {
    display: ${props => props.hideSM ? "none" : "block"};
  }
`