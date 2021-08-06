import React from 'react';
import styled from "styled-components";

export const Grid = ({children,height}) => {
    return (
        <CenterContent height={height}>
            <GridColumns height={height}>
                {children}
            </GridColumns>
        </CenterContent>
    );
};

const CenterContent = styled.div`
  display: grid;
  height: ${props=>props.height||'fit-content'};
  grid-template-columns: 1fr 952px 1fr;

  @media (max-width: 952px) {
    grid-template-columns: 8px 1fr 8px;
  }

`


export const Line = styled.div`
  height: ${props => props.height || 'fit-content'};
  width: ${props=>props.width|| '100%'};
  display: grid;
  grid-column: ${props => props.area ? `${props.area[0]}/${props.area[1]}` : "1/-1"};
  grid-gap: 8px;
  grid-template-columns:repeat(12, 72px);
  @media (max-width: 952px) {
    grid-template-columns: repeat(12, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  }
`


const GridColumns = styled.div`
  display: grid;
  grid-column: 2/span 1;
  grid-gap: 8px;
  height: ${props=>props.height||'fit-content'};
  grid-template-columns:repeat(12, 72px);
  @media (max-width: 952px) {
    grid-template-columns: repeat(12, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  }
`



export const CustomGridColumns = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns:repeat(${props => props.amountCol}, 72px);
  
  grid-column: ${props => `${props.areaCol[0]}/${props.areaCol[1]}`};
${props=>props.areaRow? `grid-row: ${props.areaRow[0]}/${props.areaRow[1]}`: null};
  @media (max-width: 952px) {
    grid-column: ${props => `${props.areaCol952[0]}/${props.areaCol952[1]}`};
    ${props=>props.areaRow952? `grid-row: ${props.areaRow952[0]}/${props.areaRow952[1]}`: null};
    grid-template-columns: repeat(${props => props.amountCol}, 1fr);
  }
  @media (max-width: 576px) {
    grid-column: ${props => `${props.areaCol576[0]}/${props.areaCol576[1]}`};
    ${props=>props.areaRow576? `grid-row: ${props.areaRow576[0]}/${props.areaRow576[1]}`: null};
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  }
`


export const Cell = styled.div`
    position: relative;
  display: flex;
  flex-direction:${props=>props.flexDirection||'column'} ;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
    width: 100%;
    max-width: 100%;
    height: ${props => props.height || '100%'};
    max-height: ${props => props.height || '100%'};
  ${props=>props.zIndex? `z-index: ${props.zIndex}`: null};
  ${props => props.areaCol ? `grid-column: ${props.areaCol[0]}/${props.areaCol[1]}` : null};
  ${props=>props.areaRow? `grid-row: ${props.areaRow[0]}/${props.areaRow[1]}`: null};
  @media (max-width: 952px) {
    ${props => props.areaCol952 ? `grid-column: ${props.areaCol952[0]}/${props.areaCol952[1]}` : null};
        ${props=>props.areaRow952? `grid-row: ${props.areaRow952[0]}/${props.areaRow952[1]}`: null};
    ${props=>props.zIndex952? `z-index: ${props.zIndex952}`: null};
  }
  @media (max-width: 576px) {
    ${props => props.areaCol576 ? `grid-column: ${props.areaCol576[0]}/${props.areaCol576[1]}` : null};
        ${props=>props.areaRow576? `grid-row: ${props.areaRow576[0]}/${props.areaRow576[1]}`: null};
    ${props=>props.zIndex576? `z-index: ${props.zIndex576}`: null};
  }
`


export const GridSystem = {
    Grid: Grid,
    Line: Line,
    CustomGridColumns: CustomGridColumns,
    Cell: Cell,
}
