import React from 'react';
import {Box} from "rebass/styled-components";
import Shape from "../../Shape.svg";
import styled from "styled-components";
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import {Hentai} from "../../store/q=Boku_Genre=12";

export const Content = observer(() => {
  const isFavorite = true
  const content = store.content===null ? null : 
  <CardWrapper>
                  <CardImgWrap>
                  <CardFavoriteImg isFavorite={store.content.isFavorite} onClick = {() => store.setFavorite()}>
                      <svg   id="like" viewBox="0 0 612 792"  width="100%" height="100%"><path d="M562.413,284.393c-9.68,41.044-32.121,78.438-64.831,108.07L329.588,542.345l-165.11-149.843 c-32.771-29.691-55.201-67.076-64.892-108.12c-6.965-29.484-4.103-46.14-4.092-46.249l0.147-0.994 c6.395-72.004,56.382-124.273,118.873-124.273c46.111,0,86.703,28.333,105.965,73.933l9.061,21.477l9.061-21.477 c18.958-44.901,61.694-73.922,108.896-73.922c62.481,0,112.478,52.27,119,125.208C566.517,238.242,569.379,254.908,562.413,284.393z"/></svg>
                      </CardFavoriteImg>
                </CardImgWrap>
                <CardWrapperBlock>
                    <CardImg src={store.content.image_url}/>
                    <CardWrapperDescr>
                        <CardTitle> {store.content.title || store.content.name} </CardTitle>
                        <CardDescr> {store.content.synopsis || store.content.alternative_names} </CardDescr>
                    </CardWrapperDescr>
                </CardWrapperBlock>
            </CardWrapper>
    return (
        <Box width={"100%"} height={"100%"} bg={'rgba(0,255,0,0.3)'}>
            {content}
        </Box>
    );
});

const CardWrapper = styled.div`
  background: green;
  padding: 10px 60px 40px 40px;
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
  margin-top: 10px;
  display: grid;
  grid-template-columns: minmax(0, auto) 1fr;`

const CardShape = styled.img`
  margin-top: 30px;
  cursor: pointer;`

const CardWrapperDescr = styled.div``


const CardFavoriteImg = styled.div `
    cursor: pointer;
    svg {
        fill: ${props => props.isFavorite ? 'red':'none'};
        stroke: ${props => props.isFavorite ? 'red':'black'};
        stroke-width: 30px;
    }
`
const CardImgWrap = styled.div `
    position: relative;
    width: 50px;
    height: 50px;
    
   `

