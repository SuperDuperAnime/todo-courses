import React from 'react';
import {Box} from "rebass/styled-components";
import {Favorite} from "../Categories/Favorite";
import {Categories} from "../Categories/Categories";

export const Filter = () => {
    return (
        <Box width={"100%"} height={"100%"} bg={'rgba(255,0,0,0.3)'}>
            <Favorite/>
            <Categories/>
        </Box>
    );
};

