import { Shelf } from "../../domain/entities/Shelf";
import { ShelfRepository } from "../../domain/repositories/ShelfRepository";
import apiClient from "./apiClient";

export class ShelfService implements ShelfRepository {
  async getBooksFromShelf(
    shelfId: string,
    offset?: number,
    limit?: number
  ): Promise<string[]> {
    try {
      const response = await apiClient.get(`/shelves/${shelfId}/forms`, {
        params: { offset, limit },
      });

      if (!Array.isArray(response.data)) {
        throw new Error("Invalid data format received for books");
      }

      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to fetch books from shelf:", error.message);
        if (error.message.includes("Network Error")) {
          throw new Error(
            "Network error: Unable to fetch books from the shelf"
          );
        } else {
          throw new Error(`Error fetching books from shelf: ${error.message}`);
        }
      } else {
        console.error("An unknown error occurred:", error);
        throw new Error(
          "An unknown error occurred while fetching books from shelf"
        );
      }
    }
  }

  async getShelfList(offset?: number, limit?: number): Promise<Shelf[]> {
    try {
      const response = await apiClient.get(
        `/users/5a8411b53ed02c04187ff02a/shelves`,
        { params: { offset, limit } }
      );

      if (!Array.isArray(response.data)) {
        throw new Error("Invalid data format received for shelves");
      }

      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to fetch shelf list:", error.message);
        if (error.message.includes("Network Error")) {
          throw new Error("Network error: Unable to fetch shelf list");
        } else {
          throw new Error(`Error fetching shelf list: ${error.message}`);
        }
      } else {
        console.error("An unknown error occurred:", error);
        throw new Error(
          "An unknown error occurred while fetching the shelf list"
        );
      }
    }
  }
}
