import { makeAutoObservable } from "mobx";

class ErrorStore {
  errorStatus: number = 0;
  errorText: string = "";
  isOpenError = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleAlertError(open: boolean) {
    this.isOpenError = open;
  }

  changeTextError(text: string) {
    this.errorText = text;
  }

  changeStatusError(status: number) {
    this.errorStatus = status;
  }

  catchingErrors(error: any) {
    this.toggleAlertError(true);
    this.changeStatusError(error.response.status);
    this.changeTextError(error.response.data.message);
  }
}

export default new ErrorStore();
