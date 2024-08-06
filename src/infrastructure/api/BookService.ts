import { Book } from "@/src/domain/entities/ Book";
import { BookRepository } from "../../domain/repositories/BookRepository";
import apiClient from "./apiClient";

export class BookService implements BookRepository {
  async getBookById(bookId: string): Promise<Book> {
    try {
      const response = await apiClient.get(`/forms/${bookId}`);
      if (
        !response.data ||
        typeof response.data !== "object" ||
        !response.data.id
      ) {
        throw new Error("Invalid book data received");
      }
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to fetch book by ID:", error.message);

        if (error.message.includes("Network Error")) {
          throw new Error(
            "Network error: No response received from the server"
          );
        } else {
          throw new Error(`Unexpected error: ${error.message}`);
        }
      } else {
        console.error("An unknown error occurred:", error);
        throw new Error("An unknown error occurred");
      }
    }
  }
}
