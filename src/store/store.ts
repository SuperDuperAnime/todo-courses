import { makeAutoObservable, toJS } from "mobx";
import axios from "axios";
import {
  CategoriesType,
  IResponseNew,
  TopAnimeType,
  TopCharactersType,
} from "./types/types";
import LayoutStore from "./LayoutStore";
import ErrorStore from "./ErrorStore";
import { paginationStore } from "./pagination";
import loaderStore from "./loaderStore";
import {
  animeShortFactory,
  animeTopFactory,
  CardGeneral,
  characterShortFactory,
  characterTopFactory,
} from "./factory";
import { animeGuard, characterGuard } from "./types/guards";

class store {
  textSearch = "";
  action = "search";
  category: CategoriesType = "anime";
  content: CardGeneral | null = null;
  data: CardGeneral[] = [];
  topAnime: CardGeneral[] = [];
  topCharacter: CardGeneral[] = [];
  lastAnime: CardGeneral[] = [];
  lastCharacter: CardGeneral[] = [];
  favorite: CardGeneral[] = [];
  isThrottle = false;
  isWaiting = false;

  constructor() {
    makeAutoObservable(this);
    this.startProgram();
    this.getTopCharacters();
    this.getTopAnime().then(() => {
      //----------------->
      //this.data = this.topAnime
      LayoutStore.setCategoriesView("topAnime");
    });
  }

  startProgram() {
    let locStorage = localStorage.getItem("favoriteArr");
    if (locStorage !== null) {
      this.favorite = JSON.parse(locStorage);
      // this.scrollFavorite(locStorage)
    }
  }

  async setCategory(select: CategoriesType) {
    this.content = null;
    this.data = [];
    this.category = select;
    switch (select) {
      case "character":
        this.data = this.topCharacter;
        //todo сменить top
        paginationStore.active = "topCharacters";
        LayoutStore.categoryView = "topCharacters";
        break;
      case "anime":
        this.data = this.topAnime;
        paginationStore.active = "topAnime";
        LayoutStore.categoryView = "topAnime";
        break;
      case "favorite":
        this.data = this.favorite;
        LayoutStore.categoryView = "favorite";
        break;
      default:
        console.error(select);
    }
  }

  setContent(content: CardGeneral) {
    this.content = content;
    console.log(toJS(this.content));
  }

  setFavorite() {
    if (this.content === null) return;
    let pos = this.favorite.findIndex(
      (item) => item.mal_id == this.content?.mal_id
    );

    if (pos !== -1) {
      this.content.isFavorite = false;
      this.favorite.splice(pos, 1);
    } else {
      this.content.isFavorite = true;
      this.favorite.unshift(this.content);
    }
    localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite));
  }

  async getTopAnime() {
    loaderStore.loading = true;
    await axios
      .get(`https://api.jikan.moe/v3/top/anime/1`)

      .then<TopAnimeType[]>((res) => res.data.top)

      .then((res) => {
        let newCard = res.map((el) => animeTopFactory(el));
        this.topAnime = newCard;
        this.data = this.topAnime;
        paginationStore.active = "topAnime";
        paginationStore.currentPage.topAnime = 2;

        this.favoriteCheck(this.topAnime);
        return newCard;
      })
      .catch((error) => console.log(error.response))
      .then(() => {
        loaderStore.loading = false;
      });
  }

  async getTopCharacters() {
    loaderStore.loading = true;
    await axios
      .get(`https://api.jikan.moe/v3/top/characters/1`)
      .then<TopCharactersType[]>((res) => res.data.top)
      .then((res) => {
        let newCard = res.map((el) => characterTopFactory(el));
        this.topCharacter = newCard;
        this.data = this.topCharacter;
        paginationStore.active = "topCharacters";
        paginationStore.currentPage.topCharacters = 2;
        this.favoriteCheck(this.topCharacter);
        return newCard;
      })
      .catch((error) => console.log(error.response))
      .then(() => {
        loaderStore.loading = false;
      });
  }

  favoriteCheck(data: CardGeneral[]) {
    data.forEach((e) => {
      this.favorite
        .map((event) => {
          return event.mal_id;
        })
        .includes(e.mal_id)
        ? (e.isFavorite = true)
        : (e.isFavorite = false);
    });
  }

  async startSearch(textInput: string) {
    if (this.category === "favorite") {
      //let filterFavorite
      let filterFavorite = this.favorite.filter((item) => {
        return item.title.toLowerCase().includes(textInput.toLowerCase());
      });
      // return item.title?.toLowerCase().includes(textInput.toLowerCase())
      console.log(filterFavorite);
      this.data = filterFavorite;
      return;
    }
    loaderStore.loading = true;

    await axios
      .get(
        `https://api.jikan.moe/v3/${this.action}/${this.category}?q=${textInput}&limit=10&page=1`
      )
      .then<IResponseNew>((res) => res.data)
      .then((res) => {
        this.data = [];
        let newCards = res.results.map((el) => {
          if (animeGuard(el)) {
            return animeShortFactory(el);
          }
          if (characterGuard(el)) {
            return characterShortFactory(el);
          }
        });

        if (this.category === "anime") {
          this.lastAnime = newCards as CardGeneral[];
          this.data = this.lastAnime;
          paginationStore.active = "anime";
          paginationStore.currentPage.anime = 2;
        }
        if (this.category === "character") {
          this.lastCharacter = newCards as CardGeneral[];
          this.data = this.lastCharacter;
          paginationStore.active = "character";
          paginationStore.currentPage.characters = 2;
        }

        this.favoriteCheck(this.data);
      })
      .catch((error) => {
        ErrorStore.catchingErrors(error);
      })
      .then(() => {
        paginationStore.setFetching(false);
        setTimeout(() => {
          loaderStore.loading = false;
        }, 500);
      });
  }

  startSearchWithDelay(ms: number, textInput: string) {
    this.textSearch = textInput;
    if (this.isThrottle) {
      console.log("тротл");
      this.isWaiting = true;
      console.log("ждем снятия ограничения");
      return;
    } else {
      console.log("startsearch");
      this.isThrottle = true;
      this.startSearch(textInput);
    }
    setTimeout(() => {
      console.log("4сек прошло снимаем ограничение");
      this.isThrottle = false;
      if (this.isWaiting) {
        console.log("ограничение снято, запрос отправлен");
        this.startSearch(textInput);
      } else {
        console.log("ограничение снято, запрос не отправлялся");
        return;
      }
    }, ms);

    this.isWaiting = false;
  }
}

export default new store();
