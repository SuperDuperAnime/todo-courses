import { makeAutoObservable } from "mobx";

class LoaderStore {
  loading = false;
  constructor() {
    makeAutoObservable(this);
  }
  closeLoader() {
    this.loading = false;
  }
  openLoader() {
    this.loading = true;
  }
}

export default new LoaderStore();
