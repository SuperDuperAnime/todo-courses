import React from 'react';
import {AnimeFromCharacterResponseType} from "../../../store/types";
import {Box, Link} from "@material-ui/core";

export interface AnimeListFromAnimeProp {
    animeList:  AnimeFromCharacterResponseType[]
}
export const AnimeListFromAnime = ({animeList}:AnimeListFromAnimeProp) => {
    return (
        <Box>
            {animeList.map(el=> <Box>{el.name} <Link href={el.url} color={'primary'}>ccskrf</Link></Box> )}

        </Box>
    );
};
