import { Book } from "../entities/ Book";

export interface BookRepository {
  getBookById(bookId: string): Promise<Book>;
}
