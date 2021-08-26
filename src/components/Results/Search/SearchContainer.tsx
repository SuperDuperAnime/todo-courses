import React, { useEffect, useState } from "react";
import store from "../../../store/store";
import { observer } from "mobx-react-lite";
import LayoutStore from "../../../store/LayoutStore";
import { categories } from "../../Category/Category";
import ErrorStore from "../../../store/ErrorStore";
import { Search } from "./Search";

export const SearchContainer = observer(() => {
  const [textInput, setTextInput] = useState("");
  const validator = () => {
    if (textInput.length <= 3) {
      ErrorStore.changeTextError("Введите больше 3 букв");
      ErrorStore.toggleAlertError(true);
      return;
    } else {
      store.startSearchWithDelay(4000, textInput);
      LayoutStore.setActiveCategory();
    }
  };
  useEffect(() => {
    if (store.category === "favorite") store.startSearch(textInput);
  }, [textInput]);
  const activeCategory = LayoutStore.categoryView;
  const startSearch = () => {
    store.category === "favorite" ? store.startSearch(textInput) : validator();
  };

  return (
    <Search
      textInput={textInput}
      setTextInput={setTextInput}
      startSearch={startSearch}
      activeCategory={activeCategory}
      categories={categories}
    />
  );
});
