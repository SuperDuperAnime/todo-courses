import React from 'react';
import {Box} from "rebass/styled-components";
import {Categories} from "../Categories/Categories";
import {observer} from "mobx-react-lite";
import layoutStore from "../../store/layoutStore";
import styled from "styled-components";
import {Input} from "../Input";

export const Filter = observer(() => {
    return (
	   <FilterWrapper zIndex={5} zIndex952={5} zIndex576={5}
				   width={"100%"} height={"100%"}
				   isOpen={layoutStore.isFilterOpen}
				   bg={'transparent'}>
		  <Input hideLG hideSM/>
		  <Categories/>
	   </FilterWrapper>
    );
})

const FilterWrapper = styled(Box)`
  transition: all 0.3s;
  position: absolute;
  background: green;
  ${props => props.zIndex ? `z-index: ${props.zIndex}` : null};
  @media (max-width: 952px) {
    top: ${props => props.isOpen ? 0 : "-100%"};
    ${props => props.zIndex952 ? `z-index: ${props.zIndex952}` : null};
  }
  @media (max-width: 576px) {
    top: ${props => props.isOpen ? 0 : "-100%"};
    ${props => props.zIndex576 ? `z-index: ${props.zIndex576}` : null};
  }


`