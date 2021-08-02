import React, {useState} from 'react'
import styled from "styled-components";
import ninja from './ninja.svg'
import {Header} from "./Components/Header/Header";
import {Body} from "./Components/Body/Body";
import {Categories} from "./Components/Body/Categories/Categories";
import {Hentai} from "./store/q=Boku_Genre=12";
import {Yaoi} from "./store/q=6loverGenre=33";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log(Hentai)
    console.log(Yaoi)

    return (
	   <AppWrapper>
		  <Header setIsMenuOpen={setIsMenuOpen} />
		  <Body isMenuOpen={isMenuOpen}/>
	   </AppWrapper>
    );
}

export default App;


const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15fr 85fr;
overflow: hidden`



export const Typography = styled.div`
font-size: ${props=>props.fontSize||"40px"};
font-family: Roboto ;
font-weight:  ${props=>props.fontWeight||"100"};
color:  ${props=>props.color||'rgba(255,255,255,1)'}`