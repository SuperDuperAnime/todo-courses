import { makeAutoObservable } from "mobx";
import { CardType, CategoriesViewType } from "./types";
import axios from "axios";
import store from "./store";
import LayoutStore from "./LayoutStore";
import loaderStore from "./loaderStore";

class Pagination {
  textSearch = "";

  fetching = false;
  active: CategoriesViewType = "topAnime";
  currentPage = {
    topAnime: 1,
    topCharacters: 1,
    characters: 1,
    anime: 1,
    favorite: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setFetching(fetchingBoolean: boolean) {
    this.fetching = fetchingBoolean;
  }

  favoriteCheck(data: CardType[]) {
    data.forEach((e) => {
      store.favorite
        .map((event) => {
          return event.mal_id;
        })
        .includes(e.mal_id)
        ? (e.isFavorite = true)
        : (e.isFavorite = false);
    });
  }

  createPaginationString() {
    switch (this.active) {
      case "topAnime": {
        return `https://api.jikan.moe/v3/top/anime/${this.currentPage.topAnime}`;
      }
      case "topCharacters": {
        return `https://api.jikan.moe/v3/top/characters/${this.currentPage.topCharacters}`;
      }
      case "character": {
        return `https://api.jikan.moe/v3/${store.action}/character?q=${store.textSearch}&limit=10&page=${this.currentPage.characters}`;
      }
      case "anime": {
        return `https://api.jikan.moe/v3/${store.action}/anime?q=${store.textSearch}&limit=10&page=${this.currentPage.anime}`;
      }
      case "favorite": {
        return "";
      }
    }
  }

  async startPagination() {
    if (store.category !== "favorite") loaderStore.loading = true;
    await axios
      .get(
        //todo proverka
        this.createPaginationString()
      )
      .then((res) => {
        this.setFetching(false);
        console.log("проверка");
        store.data = [];
        if (LayoutStore.categoryView === "anime") {
          store.lastAnime = store.lastAnime.concat(
            res.data.results as CardType[]
          );
          store.lastAnime.forEach((el) => (el.category = "anime"));
          store.data = store.lastAnime;
          this.currentPage.anime += 1;
        }
        if (LayoutStore.categoryView === "character") {
          //todo протипизировать нормально
          store.lastCharacter = store.lastCharacter.concat(
            res.data.results as CardType[]
          );
          store.lastCharacter.forEach((el) => (el.category = "character"));
          store.data = store.lastCharacter;
          this.currentPage.characters += 1;
        }
        if (LayoutStore.categoryView === "topAnime") {
          store.topAnime = store.topAnime.concat(res.data.top as CardType[]);
          store.topAnime.forEach((el) => (el.category = "topAnime"));
          store.data = store.topAnime;

          this.currentPage.topAnime += 1;
        }
        if (LayoutStore.categoryView === "topCharacters") {
          store.topCharacter = store.topCharacter.concat(
            res.data.results as CardType[]
          );
          store.topCharacter.forEach((el) => (el.category = "topCharacters"));
          store.data = store.topCharacter;

          this.currentPage.topCharacters += 1;
        }
        this.favoriteCheck(store.data);
      })
      .catch((error) => {
        // ErrorStore.catchingErrors(error);
        console.log(error);
      })
      .then(() => {
        setTimeout(() => {
          loaderStore.loading = false;
        }, 500);
      })
      .finally(() => this.setFetching(false));
  }

  startPaginationWithDelay() {
    if (store.isThrottle) {
      console.log("тротл");
      store.isWaiting = true;
      console.log("ждем снятия ограничения");
      return;
    } else {
      console.log("startsearch");
      store.isThrottle = true;
      this.startPagination();
    }
    setTimeout(() => {
      console.log("4сек прошло снимаем ограничение");
      store.isThrottle = false;
      if (store.isWaiting) {
        console.log("ограничение снято, запрос отправлен");
        this.startPagination();
      } else {
        console.log("ограничение снято, запрос не отправлялся");
        return;
      }
    }, 4000);

    store.isWaiting = false;
  }
}

export const paginationStore = new Pagination();
