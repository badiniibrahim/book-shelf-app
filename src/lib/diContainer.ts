import { BookService } from "@/src/infrastructure/api/BookService";
import { ShelfService } from "@/src/infrastructure/api/ShelfService";
import { GetBooksByShelf } from "@/src/usecases/GetBooksByShelf";
import { GetShelfList } from "@/src/usecases/GetShelfList";

export class DIContainer {
  private static instance: DIContainer;

  private constructor() {}

  static getInstance() {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  get bookService() {
    return new BookService();
  }

  get shelfService() {
    return new ShelfService();
  }

  get getBooksByShelf() {
    return new GetBooksByShelf(this.bookService, this.shelfService);
  }

  get getShelfList() {
    return new GetShelfList(this.shelfService);
  }
}
