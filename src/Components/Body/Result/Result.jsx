import styled from "styled-components";
import Shape from '../../../Shape.svg';

export const Result = ({img, title, synopsis, isFavorite}) => {
    console.log(isFavorite)
    return <ResultWrapper>
        <ResultImg src = {img}/>
        <ResultBlockDescr>
            <ResultTitle> {title.length > 31 ? title.slice(0, 30) + '...' : title} </ResultTitle>
            <ResultDescr> {synopsis && synopsis.length > 58 ? synopsis.slice(0, 57) + '...' : synopsis} </ResultDescr>
        </ResultBlockDescr>
        <ResultImgWrap>
            <ResultFavoriteImg isFavorite={isFavorite}>
            <svg id="like" viewBox="0 0 612 792"  width="100%" height="100%"><path d="M562.413,284.393c-9.68,41.044-32.121,78.438-64.831,108.07L329.588,542.345l-165.11-149.843 c-32.771-29.691-55.201-67.076-64.892-108.12c-6.965-29.484-4.103-46.14-4.092-46.249l0.147-0.994 c6.395-72.004,56.382-124.273,118.873-124.273c46.111,0,86.703,28.333,105.965,73.933l9.061,21.477l9.061-21.477 c18.958-44.901,61.694-73.922,108.896-73.922c62.481,0,112.478,52.27,119,125.208C566.517,238.242,569.379,254.908,562.413,284.393z"/></svg>
            </ResultFavoriteImg>
        </ResultImgWrap>
            
        
    </ResultWrapper>
    
}

const ResultWrapper = styled.div `
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    column-gap: 10px;
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
    width: 250px;
    position: relative;
    margin-left: 9px;
`

const ResultFavoriteImg = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
        fill: ${props => props.isFavorite ? 'red':'none'};
        stroke: ${props => props.isFavorite ? 'red':'black'};
        stroke-width: 30px;
    }
`
const ResultImgWrap = styled.div `
    position: relative;
   `

