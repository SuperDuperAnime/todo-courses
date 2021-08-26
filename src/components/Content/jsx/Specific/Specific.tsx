import React from "react";
import { makeStyles } from "@material-ui/core";

interface SpecificProp {
  children?: React.ReactNode;
}

const useStyle = makeStyles({
  specificInfo: {
    overflowY: "scroll",
    height: "calc(100vh - 25vh - 64px - 16px - 80px)",
  },
});
export const Specific = ({ children }: SpecificProp) => {
  const classes = useStyle();
  return <div className={classes.specificInfo}>{children}</div>;
};
