import styled from "styled-components";
import {Typography} from "../../../App";

export const Genre = () => {
    return <GenreWrapper>
	   <GenreItem>
		  <Typography> Hentai</Typography>
	   </GenreItem>
	   <GenreItem>
		  <Typography> Hentai</Typography>
	   </GenreItem>
    </GenreWrapper>
}


const GenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;`


const GenreItem = styled.div`
  margin: 0.5rem;
  height: 64px;
`