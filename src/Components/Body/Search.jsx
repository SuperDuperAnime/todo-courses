import styled from "styled-components";
import {Categories} from "./Categories/Categories";
import {Genre} from "./Categories/Genre";
import {Result} from "./Result/Result"
import {Hentai} from "../../store/q=Boku_Genre=12";
import {Yaoi} from "../../store/q=6loverGenre=33";
export const Search = () => {
    return <SearchWrapper>
	    <Input/>
        <ResultsBlock>
          {Hentai.results.map(item => {
            return <Result 
              key = {Math.random()}
              img = {item.image_url}
              title = {item.title}
              synopsis = {item.synopsis}
            />
          })}

          {Yaoi.results.map(item => {
            return <Result 
              key = {Math.random()}
              img = {item.image_url}
              title = {item.title}
              synopsis = {item.synopsis}
            />
          })} 
        </ResultsBlock>
    </SearchWrapper>
}
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

const ResultsBlock = styled.div `
  
`

