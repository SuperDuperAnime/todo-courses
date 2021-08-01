import styled from "styled-components";
import {Categories} from "./Categories/Categories";
import {Genre} from "./Categories/Genre";

export const Search = () => {
    return <SearchWrapper>
	   <Input/>
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