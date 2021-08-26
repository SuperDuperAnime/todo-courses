import { makeAutoObservable, toJS } from "mobx";
import {
  CategoriesType,
  ActiveViewType,
  CategoriesViewType,
} from "./types/types";
import store from "./store";

//todo классы лучше называть с большой буквы
class LayoutStore {
  mobPanel = false;
  //todo здесь тоже, будет CategoriesType
  categoryView: CategoriesViewType = "anime";
  isContentOpen = false;
  constructor() {
    makeAutoObservable(this);
  }
  toggleContent(isOpen: boolean) {
    this.isContentOpen = isOpen;
  }
  toggleMobPanel(isOpen: boolean) {
    this.mobPanel = isOpen;
    console.log(this.mobPanel);
  }

  setActiveCategory() {
    this.categoryView = store.category;
  }
  setCategoriesView(category: CategoriesViewType) {
    this.categoryView = category;
  }
}

export default new LayoutStore();
