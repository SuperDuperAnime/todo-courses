import { makeAutoObservable } from "mobx";
import axios from "axios";
import { toJS } from "mobx";
import { animeData } from "./Category/anime";
import { naruto } from "./Category/q=Naruto";
import { CardType, CategoriesType, IResponse } from "./types";
import LayoutStore from "./LayoutStore";


class store {
  textInput = "";
  action = "search";
  category: CategoriesType = "anime";
  content: CardType | null = null;
  data: CardType[] = [];
  favorite: CardType[] = [];
  canIStartSearch = true;
  loading = false;

  constructor() {
    makeAutoObservable(this);
    this.startProgram();
  }

  startProgram() {
    let locStorage = localStorage.getItem("favoriteArr");
    if (locStorage !== null) {
      this.favorite = JSON.parse(locStorage);
    }
    console.log(toJS(this.favorite));
  }

  setTextInput(input: string) {
    this.textInput = input;
    console.log(this.textInput);
  }

  setCategory(select: CategoriesType) {
    LayoutStore.categoryView = "";
    this.content = null;
    this.data = [];
    if (select === "favorite") {
      this.data = this.favorite;
      LayoutStore.categoryView = "favorite";
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
    //todo тут лучше использовать метод findIndex
    let pos = this.favorite
      .map(function(e) {
        return e.mal_id;
      })
      .indexOf(this.content.mal_id);
    //let indexOfCheck2 = this.favorite.filter(item => item.mal_id !== this.content.mal_id)

    //todo ts ignore тут не нужен, все ж и без него работает

    // @ts-ignore
    if (pos !== -1 || pos === 0) {
      this.content.isFavorite = false;
      this.favorite.splice(pos, 1);
    } else {
      this.content.isFavorite = true;
      this.favorite.unshift(this.content);
    }
    localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite));
  }


  apiDelay4second() {
    setTimeout(() => {
      this.canIStartSearch = true;
    }, 4000);
  }


  async startSearch(textInput: string) {
    console.log("Кнопка нажата");
    if (this.category === "favorite") {
      return;
    }
    if (!this.canIStartSearch) return;
    this.loading = true;


    await axios
      .get<IResponse>(
        `https://api.jikan.moe/v3/${this.action}/${this.category}?q=${textInput}&limit=5&page=1`
      )
      .then((res) => {
        res.data.results.forEach((e) => {
          console.log(e);
          this.favorite
            .map((event) => {
              return event.mal_id;
            })
            .includes(e.mal_id)
            ? (e.isFavorite = true)
            : (e.isFavorite = false);
        });
        this.data = res.data.results;
        console.log(toJS(this.data));
      })
      .catch((error) => console.log(error.response))
      .then(() => {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
    console.log("ответ получен");
    this.canIStartSearch = false;
    this.apiDelay4second();
  }
}

export default new store();
