import { makeAutoObservable } from "mobx";
import axios from "axios";
import { toJS } from "mobx";
import { animeData } from "./Category/anime";
import { naruto } from "./Category/q=Naruto";
import { CardType, CategoriesType, IResponse } from "./types";
import { log } from "util";
import layoutStore from "./layoutStore";

//todo классы лучше называть с большой буквы
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
  }

  setTextInput(input: string) {
    this.textInput = input;
    console.log(this.textInput);
  }

  setCategory(select: CategoriesType) {
    layoutStore.categoryView = "";
    this.content = null;
    this.data = [];
    if (select === "favorite") {
      //todo ошибок компиляции не надо
      this.data = this.favorite || null;
      layoutStore.categoryView = "favorite";
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
      .map(function (e) {
        return e.mal_id;
      })
      .indexOf(this.content.mal_id);
    //let indexOfCheck2 = this.favorite.filter(item => item.mal_id !== this.content.mal_id)

    //todo ts ignore тут не нужен, все ж и без него работает

    // @ts-ignore
    if (pos !== -1 || pos === 0) {
      this.content.isFavorite = false;
      this.favorite.splice(pos, 1);
      //todo сохранение в localStorage можно сделать реакцией, но можно и так
      // Эту строчку лучше вынести после if, что б не дублировать код
      localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite));
    } else {
      this.content.isFavorite = true;
      this.favorite.unshift(this.content);
      //todo Эту строчку лучше вынести после if, что б не дублировать код
      localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite));
    }
  }

  //todo это лучше делать сразу в конструкторе, а не вызывать из вьюхи
  startProgram() {
    let locStorage = localStorage.getItem("favoriteArr");
    if (locStorage !== null) {
      this.favorite = JSON.parse(locStorage);
    }
    console.log(toJS(this.favorite));
  }

  //todo этот метод по хорошему должен вызываться в startSeacrh, а не во вьюхе
  apiDelay4second() {
    this.canIStartSearch = true;
  }

  //
  // startSearch(array) {
  //     if (this.category === 'favorite') {
  //         return
  //     }
  //     if (this.canIStartSearch === false) return
  //     console.log('запрос отправлен')
  //     this.data = array
  //     console.log(toJS(this.data))
  //     console.log('ответ получен')
  //     this.canIStartSearch = false
  // }

  //todo почему не async?
  startSearch() {
    console.log("Кнопка нажата");
    if (this.category === "favorite") {
      return;
    }
    this.loading = true;

    //todo почему не await?
    axios
      .get<IResponse>(
        `https://api.jikan.moe/v3/${this.action}/${this.category}?q=${this.textInput}&limit=5&page=1`
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
      .catch((error) => console.log(error.response));
    //todo это лучше делать сразу после получения ответа
    setTimeout(() => {
      this.loading = false;
    }, 500);
    //todo здесь ответ ещё не получен
    console.log("ответ получен");
    this.canIStartSearch = false;
  }
}

export default new store();
