import React from "react";
import { makeStyles, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import ErrorStore from "../store/ErrorStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

interface ErrorAlertProp {
  children?: React.ReactNode;
}

const useStyle = makeStyles({
  root: {},
});
export const ErrorAlert = observer(({ children }: ErrorAlertProp) => {
  const classes = useStyle();
  console.log(toJS(ErrorStore.errorText));
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={ErrorStore.isOpenError}
      autoHideDuration={6000}
      onClose={() => {
        ErrorStore.isOpenError = false;
      }}
    >
      <Alert severity="error">{ErrorStore.errorText}</Alert>
    </Snackbar>
  );
});
