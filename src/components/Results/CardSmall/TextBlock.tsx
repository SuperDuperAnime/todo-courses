import React, {ReactNode} from 'react';
import {CardContentTypeMap, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {CategoriesType, CategoriesViewType} from "../../../store/types";

interface TextBlockProp {
    category: CategoriesViewType
    title?: string
    description?: string
}

const useStyle = makeStyles({
    textWrapper: {
        width: 140,
        height: 64,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        overflow: "hidden",
        padding: 0,
    },
    title: {
        width: 144,
        height: 28,
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0 4px",
    },
    subtitle: {
        width: 144,
        height: 36,
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0 4px",
    },
    onlyTitle: {
        width: 164,
        height: 64,
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0 4px",
    },
})
export const TextBlock = ({category, title,description}: TextBlockProp) => {
    const classes = useStyle()

    const textDescription = category === "anime" ? (
            <>
                <Typography
                    gutterBottom
                    variant="button"
                    component="h2"
                    className={classes.title}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.subtitle}
                >
                    {description}
                </Typography>
            </>
        ) : (
            <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.onlyTitle}
            >
                {title}
            </Typography>
        );
    const t = <CardContent/>
    return (<CardContent className={classes.textWrapper}>{textDescription}</CardContent>


    );
}
;

