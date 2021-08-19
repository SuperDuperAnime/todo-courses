import React from 'react';
import Typography from "@material-ui/core/Typography";
import classes from "./Content.module.css";
import {AnimeFromCharacterResponseType} from "../../store/types";
import {AnimeListFromAnimeProp} from "./Character/AnimeListFromAnime";

interface BodyContentProp {
    img: string
    preTitle: string
    title: string
    preSubtitle: string
    subtitle?: string | number | JSX.Element
}

export const BodyContent = ({img, title, subtitle, preSubtitle, preTitle}: BodyContentProp) => {
    return (
        <Typography
            className={classes.subtitle}
            variant={"body1"}
            component={'div'}
        >
            <img className={classes.img} alt={"#"} src={img}/>
            <Typography variant={'h6'} component={'div'} className={classes.preTitle}>{preTitle}</Typography><Typography className={classes.title} variant={'h4'}> {title}</Typography>
            <br/>
            <Typography variant={'h4'  }   className={classes.preSubTitle}> {preSubtitle}</Typography><Typography  className={classes.subTitle} variant={'h4'}>  {subtitle}</Typography>
        </Typography>
    );
};
