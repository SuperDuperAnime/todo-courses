import React from 'react'
import styled from "styled-components";
import ninja from './ninja.svg'
import {Header} from "./Components/Header/Header";
import {Body} from "./Components/Body/Body";
import {NavCategories} from "./Components/Body/NavCategories";


function App() {
    return (
	   <AppWrapper>
		  <Header/>

		  <Body/>
	   </AppWrapper>
    );
}

export default App;


const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15fr 85fr;`

