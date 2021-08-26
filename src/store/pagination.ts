import { makeAutoObservable } from "mobx";
import { CardType, CategoriesViewType } from "./types/types";
import axios from "axios";
import store from "./store";
import LayoutStore from "./LayoutStore";
import loaderStore from "./loaderStore";
import {
  animeShortFactory,
  animeTopFactory,
  CardGeneral,
  characterShortFactory,
  characterTopFactory,
} from "./factory";
import {
  animeGuard,
  characterGuard,
  topAnimeGuard,
  topCharactersGuard,
} from "./types/guards";

class Pagination {
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

  favoriteCheck(data: CardGeneral[]) {
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
    console.log("зашли в создание");
    switch (this.active) {
      case "topAnime": {
        return `https://api.jikan.moe/v3/top/anime/${this.currentPage.topAnime}`;
      }
      case "topCharacters": {
        return `https://api.jikan.moe/v3/top/characters/${this.currentPage.topCharacters}`;
      }
      case "character": {
        console.log("создан запрос для персонажей");
        return `https://api.jikan.moe/v3/${store.action}/character?q=${store.textSearch}&limit=30&page=${this.currentPage.characters}`;
      }
      case "anime": {
        console.log("создан запрос для Аниме");
        return `https://api.jikan.moe/v3/${store.action}/anime?q=${store.textSearch}&limit=30&page=${this.currentPage.anime}`;
      }
      case "favorite": {
        return "";
      }
    }
  }

  async startPagination() {
    console.log("pagination start");
    if (store.category !== "favorite") loaderStore.loading = true;
    await axios
      .get(
        //todo proverka
        this.createPaginationString()
      )
      .then((res) => {
        console.log(this.createPaginationString());
        if (res.data.top !== undefined) {
          return res.data.top as CardType[];
        }
        if (res.data.results !== undefined) {
          return res.data.results as CardType[];
        }
      })
      .then((res) => {
        if (res === undefined) return;
        this.setFetching(false);
        console.log("проверка");
        store.data = [];
        let newCards = res.map((el) => {
          if (animeGuard(el)) {
            return animeShortFactory(el);
          }
          if (characterGuard(el)) {
            return characterShortFactory(el);
          }
          if (topCharactersGuard(el)) {
            return characterTopFactory(el);
          }
          if (topAnimeGuard(el)) {
            return animeTopFactory(el);
          }
        });
        console.log(newCards);
        if (LayoutStore.categoryView === "anime") {
          console.log("конкат");
          store.lastAnime = store.lastAnime.concat(newCards as CardGeneral[]);
          store.data = store.lastAnime;
          this.currentPage.anime += 1;
        }

        if (LayoutStore.categoryView === "character") {
          //todo протипизировать нормально
          store.lastCharacter = store.lastCharacter.concat(
            newCards as CardGeneral[]
          );
          store.data = store.lastCharacter;
          this.currentPage.characters += 1;
        }
        if (LayoutStore.categoryView === "topAnime") {
          console.log("я присваиваю к топАниме");
          store.topAnime = store.topAnime.concat(newCards as CardGeneral[]);
          store.data = store.topAnime;
          this.currentPage.topAnime += 1;
        }
        if (LayoutStore.categoryView === "topCharacters") {
          console.log("я присваиваю к топПерсонажам");
          store.topCharacter = store.topCharacter.concat(
            newCards as CardGeneral[]
          );
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

  async startPaginationWithDelay() {
    console.log("start");
    await setTimeout(async () => {
      if (store.isThrottle) {
        setTimeout(() => {
          store.isThrottle = false;
        }, 2000);
        return;
      }
      await this.startPagination();
    }, 2000);
    store.isThrottle = true;
  }
  // startPaginationWithDelay() {
  //   console.log("pagination");
  //   if (store.isThrottle) {
  //     console.log("тротл");
  //     store.isWaiting = true;
  //     console.log("ждем снятия ограничения");
  //     return;
  //   } else {
  //     console.log("startsearch");
  //     store.isThrottle = true;
  //     this.startPagination();
  //   }
  //   setTimeout(() => {
  //     console.log("4сек прошло снимаем ограничение");
  //     store.isThrottle = false;
  //     if (store.isWaiting) {
  //       console.log("ограничение снято, запрос отправлен");
  //       this.startPagination();
  //     } else {
  //       console.log("ограничение снято, запрос не отправлялся");
  //       return;
  //     }
  //   }, 4000);
  //
  //   store.isWaiting = false;
  // }
}

export const paginationStore = new Pagination();
