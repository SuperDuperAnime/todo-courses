import styled from "styled-components";
import {Typography} from "../../../App";

export const Favorite = () => {
    return <FavoriteWrapper>
	   <Typography>Favorite</Typography>
    </FavoriteWrapper>
}

const FavoriteWrapper = styled.div`
  height: 64px;
  margin: 0.5rem;
`
