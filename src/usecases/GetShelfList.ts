import { Shelf } from "../domain/entities/Shelf";
import { ShelfRepository } from "../domain/repositories/ShelfRepository";

export class GetShelfList {
  constructor(private shelfRepository: ShelfRepository) {}

  async execute(offset?: number, limit?: number): Promise<Shelf[]> {
    return this.shelfRepository.getShelfList(offset, limit);
  }
}
