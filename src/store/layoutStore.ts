import { makeAutoObservable, toJS } from "mobx";
import { CategoriesType } from "./types";
import store from "./store";

//todo классы лучше называть с большой буквы
class layoutStore {
  //todo хорошо бы протипизировать через literals union, тип будет 'results' | 'content'
  activeView = "results";
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

  toggleActiveView(activeView: string) {
    this.activeView = activeView;
  }
}

export default new layoutStore();
