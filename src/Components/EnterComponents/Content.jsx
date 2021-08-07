import React from 'react';
import {Box} from "rebass/styled-components";
import Shape from "../../Shape.svg";
import styled from "styled-components";
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import {Hentai} from "../../store/q=Boku_Genre=12";

export const Content = observer(() => {
  const content = store.content===null ? null : 
  <CardWrapper>
                <CardWrapperBlock>
                    <CardImg src={store.content.image_url}/>
                    <CardWrapperDescr>
                        <CardTitle> {store.content.title || store.content.name} </CardTitle>
                        <CardDescr> {store.content.synopsis || store.content.alternative_names} </CardDescr>
                    </CardWrapperDescr>
                </CardWrapperBlock>
                <CardShape src={Shape}/>
            </CardWrapper>
    return (
        <Box width={"100%"} height={"100%"} bg={'rgba(0,255,0,0.3)'}>
            {content}
        </Box>
    );
});

const CardWrapper = styled.div`
  background: green;
  padding: 40px 60px 40px 40px;
`

const CardImg = styled.img`

  width: 200px;
  margin-right: 29px;
`

const CardTitle = styled.div`
  font-size: 36px;
  color: #000000;
`

const CardDescr = styled.div`
  font-size: 18px;
  line-height: 21px;
  margin-top: 20px;
  color: #000000;
`

const CardWrapperBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(0, auto) 1fr;`

const CardShape = styled.img`
  margin-top: 30px;
  cursor: pointer;`

const CardWrapperDescr = styled.div``


