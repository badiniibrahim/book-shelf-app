import { Book } from "../domain/entities/ Book";
import { BookRepository } from "../domain/repositories/BookRepository";
import { ShelfRepository } from "../domain/repositories/ShelfRepository";

export class GetBooksByShelf {
  constructor(
    private bookRepository: BookRepository,
    private shelfRepository: ShelfRepository
  ) {}

  async execute(
    shelfId: string,
    offset?: number,
    limit?: number
  ): Promise<Book[]> {
    const bookIds = await this.shelfRepository.getBooksFromShelf(
      shelfId,
      offset,
      limit
    );
    const books = await Promise.all(
      bookIds.map((id) => this.bookRepository.getBookById(id))
    );
    return books;
  }
}
