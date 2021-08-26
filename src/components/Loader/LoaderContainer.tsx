import React from "react";
import { Loader } from "./Loader";
import { observer } from "mobx-react-lite";

export const LoaderContainer = observer(() => {
  return <Loader />;
});
