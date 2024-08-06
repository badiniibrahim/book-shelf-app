import { Shelf } from "../entities/Shelf";

export interface ShelfRepository {
  getShelfList(offset?: number, limit?: number): Promise<Shelf[]>;
  getBooksFromShelf(
    shelfId: string,
    offset?: number,
    limit?: number
  ): Promise<string[]>;
}
