import { makeAutoObservable, toJS } from "mobx";
import {CategoriesType, ActiveViewType} from "./types";
import store from "./store";

//todo классы лучше называть с большой буквы
class LayoutStore {
  
  activeView: ActiveViewType = "results";
  mobPanel = false;
  //todo здесь тоже, будет CategoriesType
  categoryView:CategoriesType = "anime";

  constructor() {
    makeAutoObservable(this);
  }

  toggleMobPanel(isOpen: boolean) {
    this.mobPanel = isOpen;
    console.log(this.mobPanel)
  }

  setActiveCategory() {
    this.categoryView = store.category;
  }
setCategoriesView(category: CategoriesType){
    this.categoryView = category
}
  toggleActiveView(activeView: ActiveViewType) {
    this.activeView = activeView;
  }
}

export default new LayoutStore();
