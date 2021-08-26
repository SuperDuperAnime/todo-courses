import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../../../store/colors";

interface TextBlockProp {
  prefix: string;
  data: string | number;
}
const useStyle = makeStyles({
  root: {
    display: "flex",
    padding: 8,
    alignItems: "flex-end",
    borderBottom: `1px solid ${colors.primaryText}`,
  },
  prefix: {
    opacity: 0.8,
  },
  text: {
    flexGrow: 1,
    marginLeft: 8,
  },
});
export const TextBlock = ({ prefix, data }: TextBlockProp) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography variant={"h5"} className={classes.prefix}>
        {prefix}:
      </Typography>
      <Typography variant={"h4"} className={classes.text}>
        {data}
      </Typography>
    </div>
  );
};
