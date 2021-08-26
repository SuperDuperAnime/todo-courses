import React from "react";
import { observer } from "mobx-react-lite";

import { GeneralInfo } from "./jsx/GeneralInfo";
import { Specific } from "./jsx/Specific/Specific";
import { Footer } from "./jsx/Footer";
import { makeStyles } from "@material-ui/core";
import { colors } from "../../store/colors";
interface IContent {
  title: string;
  img: string;
  favoriteIcon: JSX.Element;
  children: JSX.Element;
  toggleFavorite: () => void;
  toggleContent: () => void;
}
const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 8,
    width: "calc(100% - 16px)",
    minWidth: 320,
    background: colors.primaryBG,
    height: "calc(100vh - 64px)",
    overflow: "hidden",
    position: "relative",
  },
  contentWrapper: {
    position: "absolute",
    display: "grid",
    width: "calc(100% - 16px)",
    height: "calc(100vh - 64px - 16px)",
    gridTemplateRows: "1fr 60px",
    background: "rgba(250,250,250,0.01)",
    borderRadius: 20,
  },

  body: {
    margin: 8,
    position: "relative",
    maxWidth: "100%",
  },
});
export const Content = observer(
  ({
    title,
    favoriteIcon,
    children,
    toggleFavorite,
    img,
    toggleContent,
  }: IContent) => {
    const classes = useStyle();
    return (
      <div className={classes.root}>
        <div className={classes.contentWrapper}>
          <div className={classes.body}>
            <GeneralInfo
              favoriteIcon={favoriteIcon}
              toggleFavorite={toggleFavorite}
              title={title}
              img={img}
            />
            <Specific>{children}</Specific>
          </div>

          <Footer
            toggleContent={toggleContent}
            favoriteIcon={favoriteIcon}
            toggleFavorite={toggleFavorite}
          />
        </div>
      </div>
    );
  }
);
