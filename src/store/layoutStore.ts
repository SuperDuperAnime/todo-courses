import { makeAutoObservable, toJS } from "mobx";
import { CategoriesType, ActiveViewType } from "./types";
import store from "./store";

//todo классы лучше называть с большой буквы
class LayoutStore {
  
  activeView: ActiveViewType = "results";
  mobPanel = false;
  //todo здесь тоже, будет CategoriesType
  categoryView = "anime";

  constructor() {
    makeAutoObservable(this);
  }

  toggleMobPanel(isOpen: boolean) {
    this.mobPanel = isOpen;
  }

  setActiveCategory() {
    this.categoryView = store.category;
  }

  toggleActiveView(activeView: ActiveViewType) {
    this.activeView = activeView;
  }
}

export default new LayoutStore();
