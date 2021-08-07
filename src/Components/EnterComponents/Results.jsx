import React from 'react';
import {Box} from "rebass/styled-components";
import store from "../../store/store";
import {Naruto} from "../../store/Character/q=Naruto";
import {Hentai} from "../../store/q=Boku_Genre=12";
import {Yaoi} from "../../store/q=6loverGenre=33";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {CardSmall} from "../Search/CardSmall";
import { toJS } from 'mobx'
import layoutStore from "../../store/layoutStore";
import {Input} from "../Input";

export const Results =observer(() => {
const cardList = store.data===null? null : store.data.map(item=> <CardSmall
    key={Math.random()}
    img={item.image_url}
    title={item.title || item.name}
    subtitle={item.synopsis || item.alternative_names}
    isFavorite={true}
    card = {item}
/>)


    return (

            <ResultsWrapper  zIndex={2} zIndex952={2} zIndex576={2} isOpen={layoutStore.isResultsOpen}>
                <ResultsBlock>
                    <Input  hideSM />
                     {cardList}
                   list of card <br/>
                   list of card <br/>
                   list of card <br/>
                   list of card <br/>
                   list of card <br/>
                   list of card <br/>
                   list of card <br/>
                   list of card <br/>
                   list of card <br/>
                   list of card <br/>
                   list of card <br/>
                   list of card <br/>
                </ResultsBlock>
            </ResultsWrapper>

    );
}
)

const ResultsWrapper = styled.div`
    position: absolute;
  background: coral;
  overflow-x: hidden;
width: 100%;
    height: 100%;
transition: all 0.3s;
    ${props => props.zIndex ? `z-index: ${props.zIndex}` : null};
    @media (max-width: 952px) {
       
        ${props => props.zIndex952 ? `z-index: ${props.zIndex952}` : null};
    }
    @media (max-width: 576px) {
        ${props => props.zIndex576 ? `z-index: ${props.zIndex576}` : null};
    }

`



const ResultsBlock = styled.div`

`