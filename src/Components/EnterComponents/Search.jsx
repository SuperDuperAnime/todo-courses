import React from 'react';
import {Box} from "rebass/styled-components";
import store from "../../store/store";
import {Naruto} from "../../store/Character/q=Naruto";
import {Hentai} from "../../store/q=Boku_Genre=12";
import {Yaoi} from "../../store/q=6loverGenre=33";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {CardSmall} from "../Search/CardSmall";

export const Search =observer(() => {
    return (
        <Box width={"100%"} height={"100%"} bg={'rgba(0,0,255,0.3)'}>
            <SearchWrapper>
                <Input value={store.textInput}
                       onKeyUp={(e) => {
                           if (e.key === "Enter") {
                               store.startSearch()
                           }
                       }}
                       onChange={(e) => {
                           store.setTextInput(e.target.value)
                       }}
                />
                <ResultsBlock>
                    {<CardSmall
                        key={Math.random()}
                        img={Naruto.results[0].image_url}
                        title={Naruto.results[0].name}
                        isFavorite={false}
                    />
                    }

                    {Hentai.results.map(item => {
                        return <CardSmall
                            key={Math.random()}
                            img={item.image_url}
                            title={item.title}
                            synopsis={item.synopsis}
                            isFavorite={true}
                        />
                    })}

                    {Yaoi.results.map(item => {
                        return <CardSmall
                            key={Math.random()}
                            img={item.image_url}
                            title={item.title}
                            synopsis={item.synopsis}
                            isFavorite={true}
                        />
                    })}
                </ResultsBlock>
            </SearchWrapper>
        </Box>
    );
}
)

const SearchWrapper = styled.div`
  background: coral;
  overflow-x: hidden;
  height: 85vh;`


const Input = styled.input`
  width: 100%;
  height: 50px;
  font-family: Roboto;
  font-size: 30px;
`

const ResultsBlock = styled.div`

`