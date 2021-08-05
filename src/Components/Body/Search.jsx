import styled from "styled-components";
import {Categories} from "./Categories/Categories";
import {Genre} from "./Categories/Genre";
import {Result} from "./Result/Result"
import {Hentai} from "../../store/q=Boku_Genre=12";
import {Yaoi} from "../../store/q=6loverGenre=33";
import {Naruto} from "../../store/Character/q=Naruto";
import {observer} from "mobx-react-lite";
import store from "../../store/store";

export const Search = observer(() => {
	   return <SearchWrapper>
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
			 {<Result
				key={Math.random()}
				img={Naruto.results[0].image_url}
				title={Naruto.results[0].name}
				isFavorite={false}
			 />
			 }

			 {Hentai.results.map(item => {
				return <Result
				    key={Math.random()}
				    img={item.image_url}
				    title={item.title}
				    synopsis={item.synopsis}
				    isFavorite={true}
				/>
			 })}

			 {Yaoi.results.map(item => {
				return <Result
				    key={Math.random()}
				    img={item.image_url}
				    title={item.title}
				    synopsis={item.synopsis}
				    isFavorite={true}
				/>
			 })}
		  </ResultsBlock>
	   </SearchWrapper>
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

