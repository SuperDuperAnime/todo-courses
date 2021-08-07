import React from 'react';
import store from "../store/store";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import layoutStore from "../store/layoutStore";

export const Input = observer((props) => {
    return (
	   <InputCore
		  value={store.textInput}
		  onFocus={()=>{
			 layoutStore.setFilterOpen(true)
		  }}
		  onKeyUp={(e) => {
			 if (e.key === "Enter") {
				store.startSearch()
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
  display: ${props=>props.hideLG? "none": "block"};
  width: 100%;
  height: 50px;
  font-family: Roboto;
  font-size: 30px;
  @media (max-width: 952px) {
    display: ${props=>props.hideMD? "none": "block"};
  }
  @media (max-width: 576px) {
    display: ${props=>props.hideSM? "none": "block"};
  }
`