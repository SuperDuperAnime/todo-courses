import styled from "styled-components";
import {Hentai} from "../../../store/q=Boku_Genre=12";
import Shape from '../../../Shape.svg'

export const Card = ({img, title, descr, isFavorite}) => {
  const cardImg = Hentai.results[0].image_url;
  const cardTitle = Hentai.results[0].title;
  const cardDescr = Hentai.results[0].synopsis;
    return <CardWrapper>
      <CardWrapperBlock>
        <CardImg src={cardImg}/>
        <CardWrapperDescr>
          <CardTitle> {cardTitle} </CardTitle>
          <CardDescr> {cardDescr} </CardDescr>
        </CardWrapperDescr>
        
      </CardWrapperBlock>
        <CardShape src = {Shape} />
      </CardWrapper>

}
const CardWrapper = styled.div`
  background: green;
  padding: 40px 60px 40px 40px;
  `

const CardImg = styled.img`
  
  width: 200px;
  margin-right: 29px;
  `

const CardTitle = styled.div `
  font-size: 36px;
  color: #000000;
`

const CardDescr = styled.div `
  font-size: 18px;
  line-height: 21px;
  margin-top: 20px;
  color: #000000;
`

const CardWrapperBlock = styled.div `
  display: grid;
  grid-template-columns: minmax(0, auto) 1fr;`

const CardShape = styled.img `
  margin-top: 30px;
  cursor: pointer;`
  
const CardWrapperDescr = styled.div ``



