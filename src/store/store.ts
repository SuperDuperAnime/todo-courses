import { makeAutoObservable, toJS } from "mobx";
import axios from "axios";
import {
  animeGuard,
  CardType,
  CategoriesType,
  characterGuard,
  IResponse,
  IResponseTop,
  topAnimeGuard,
  topCharactersGuard,
} from "./types";
import LayoutStore from "./LayoutStore";
import ErrorStore from "./ErrorStore";
import { paginationStore } from "./pagination";

class store {
  textSearch = "";
  action = "search";
  category: CategoriesType = "anime";
  content: CardType | null = null;
  data: CardType[] = [];
  topAnime: CardType[] = [];
  topCharacter: CardType[] = [];
  lastAnime: CardType[] = [];
  lastCharacter: CardType[] = [];
  favorite: CardType[] = [];
  favoriteData: CardType[] = [];
  loading = false;
  isThrottle = false;
  isWaiting = false;

  constructor() {
    makeAutoObservable(this);
    this.startProgram();
    this.getTopAnime().then(() => {
      //----------------->
      //this.data = this.topAnime
      LayoutStore.setCategoriesView("topAnime");
    });

    this.getTopCharacters();
  }

  startProgram() {
    let locStorage = localStorage.getItem("favoriteArr");
    if (locStorage !== null) {
      this.favorite = JSON.parse(locStorage);
      // this.scrollFavorite(locStorage)
    }
  }

  setCategory(select: CategoriesType) {
    this.content = null;
    this.data = [];
    switch (select) {
      case "character":
        this.data = this.topCharacter;
        //todo сменить top
        LayoutStore.categoryView = "topCharacters";
        break;
      case "anime":
        this.data = this.topAnime;
        LayoutStore.categoryView = "topAnime";
        break;
      case "favorite":
        this.data = this.favorite;
        LayoutStore.categoryView = "favorite";
        break;
      default:
        console.error(select);
    }
    this.category = select;
    console.log(this.category);
  }

  setContent(content: CardType) {
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
    this.loading = true;
    await axios
      .get<IResponseTop>(`https://api.jikan.moe/v3/top/anime/1`)
      .then((res) => {
        this.topAnime = res.data.top;

        this.data = this.topAnime;
        paginationStore.currentPage.topAnime = 2;

        this.favoriteCheck(this.topAnime);
      })
      .catch((error) => console.log(error.response))
      .then(() => {
        this.loading = false;
      });
  }

  async getTopCharacters() {
    this.loading = true;
    axios
      .get<IResponseTop>(`https://api.jikan.moe/v3/top/characters/1`)
      .then((res) => {
        this.topCharacter = this.topCharacter.concat(res.data.top);
        paginationStore.currentPage.topCharacters = 2;
        this.favoriteCheck(this.topAnime);
      })
      .catch((error) => console.log(error.response))
      .then(() => {
        this.loading = false;
      });
  }

  favoriteCheck(data: CardType[]) {
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
        if (animeGuard(item)) {
          return item.title.toLowerCase().includes(textInput.toLowerCase());
          console.log(item);
        }
        if (characterGuard(item)) {
          return item.name.toLowerCase().includes(textInput.toLowerCase());
          console.log(item);
        }
        if (topAnimeGuard(item)) {
          return item.title.toLowerCase().includes(textInput.toLowerCase());
          console.log(item);
        }
        if (topCharactersGuard(item)) {
          return item.title.toLowerCase().includes(textInput.toLowerCase());
          console.log(item);
        }
      });
      // return item.title?.toLowerCase().includes(textInput.toLowerCase())
      console.log(filterFavorite);
      this.data = filterFavorite;
      return;
    }
    this.loading = true;

    await axios
      .get<IResponse>(
        `https://api.jikan.moe/v3/${this.action}/${this.category}?q=${textInput}&limit=10&page=1`
      )
      .then((res) => {
        this.data = [];
        if (this.category === "anime") {
          this.lastAnime = res.data.results;
          this.data = this.lastAnime;
          paginationStore.currentPage.anime = 2;
        }
        if (this.category === "character") {
          this.lastCharacter = res.data.results;
          this.data = this.lastCharacter;
          paginationStore.currentPage.characters = 2;
        }

        paginationStore.active = LayoutStore.categoryView;
        this.favoriteCheck(this.data);
      })
      .catch((error) => {
        ErrorStore.catchingErrors(error);
      })
      .then(() => {
        setTimeout(() => {
          this.loading = false;
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
