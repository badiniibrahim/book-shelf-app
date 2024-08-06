import { Shelf } from "../../domain/entities/Shelf";
import { ShelfRepository } from "../../domain/repositories/ShelfRepository";
import apiClient from "./apiClient";

export class ShelfService implements ShelfRepository {
  async getBooksFromShelf(
    shelfId: string,
    offset?: number,
    limit?: number
  ): Promise<string[]> {
    const response = await apiClient.get(`/shelves/${shelfId}/forms`, {
      params: { offset, limit },
    });
    return response.data;
  }

  async getShelfList(offset?: number, limit?: number): Promise<Shelf[]> {
    const response = await apiClient.get(
      `/users/5a8411b53ed02c04187ff02a/shelves`,
      { params: { offset, limit } }
    );
    return response.data;
  }
}
