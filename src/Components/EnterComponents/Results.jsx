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

export const Results =observer(() => {
const cardList = store.data===null? null : store.data.map((item, index)=> <CardSmall
    key={Math.random()}
    img={item.image_url}
    title={item.title || item.name}
    subtitle={item.synopsis || item.alternative_names}
    isFavorite={true}
    card = {item}
/>)


    return (
        <Box width={"100%"} height={"100%"} bg={'rgba(0,0,255,0.3)'}>
            <ResultsWrapper>
                <ResultsBlock>
                     {cardList}
                </ResultsBlock>
            </ResultsWrapper>
        </Box>
    );
}
)

const ResultsWrapper = styled.div`
  background: coral;
  overflow-x: hidden;
  height: 85vh;`




const ResultsBlock = styled.div`

`