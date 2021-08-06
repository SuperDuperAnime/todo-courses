import React, {useState} from 'react'
import './norm.css'
import styled from "styled-components";
import {Hentai} from "./store/q=Boku_Genre=12";
import {Yaoi} from "./store/q=6loverGenre=33";
import {Layout} from "./Lib/Layout";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log(Hentai)
    console.log(Yaoi)

    return (
        <Layout/>
    );
}

export default App;

export const Typography = styled.div`
font-size: ${props=>props.fontSize||"40px"};
font-family: Roboto ;
cursor: pointer;
font-weight:  ${props=>props.fontWeight||"100"};
color:  ${props=>props.color||'rgba(255,255,255,1)'}`