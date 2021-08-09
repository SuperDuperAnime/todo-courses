import React, {useEffect, useRef} from 'react';
import {Box} from "rebass/styled-components";
import {Categories} from "../Categories/Categories";
import {observer} from "mobx-react-lite";
import styled from "styled-components";
import layoutStore from "../../store/layoutStore";

export const Filter = observer((props) => {
    return (
	   <FilterWrapper  {...props}
	   >
		  <Categories/>
	   </FilterWrapper>

    );
})

const FilterWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  background: green;


}
`