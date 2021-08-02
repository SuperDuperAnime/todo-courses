import styled from "styled-components";
import Shape from '../../../Shape.svg';

export const Result = ({img, title, synopsis}) => {
    return <ResultWrapper>
        <ResultImg src = {img}/>
        <ResultBlockDescr>
            <ResultTitle> {title.length > 31 ? title.slice(0, 30) + '...' : title} </ResultTitle>
            <ResultDescr> {synopsis.length > 58 ? synopsis.slice(0, 57) + '...' : synopsis} </ResultDescr>
            <ResultFavoriteImg src = {Shape}/>
        </ResultBlockDescr>
        
    </ResultWrapper>
    
}

const ResultWrapper = styled.div `
    display: grid;
    grid-template-columns: minmax(0, auto) 1fr;
    padding: 18px 14px 13px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    cursor: pointer;
`
const ResultImg = styled.img `
    width: 50px;
    height: 50px;
    border-radius: 100px;
`
const ResultTitle = styled.div `
    font-size: 24px;
    color: #000000;
`
const ResultDescr = styled.div `
    float: left;
    font-size: 12px;
    color: #000000;
`

const ResultBlockDescr = styled.div `
    position: relative;
    margin-left: 9px;
`

const ResultFavoriteImg = styled.img `
    position: absolute;
    width: 20px;
    height: 18px;
    right: 0;
`

