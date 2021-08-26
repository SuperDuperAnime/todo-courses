import { makeAutoObservable } from "mobx";
import store from "./store";

class FavoriteStore {
  constructor() {
    makeAutoObservable(this);
  }
  initialCheckFavorite = (mal_id: number) => {
    return store.favorite
      .map((el) => {
        return el.mal_id;
      })
      .includes(mal_id);
  };
}
export default new FavoriteStore();
