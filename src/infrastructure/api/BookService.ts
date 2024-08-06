import { Book } from "@/src/domain/entities/ Book";
import { BookRepository } from "../../domain/repositories/BookRepository";
import apiClient from "./apiClient";

export class BookService implements BookRepository {
  async getBookById(bookId: string): Promise<Book> {
    const response = await apiClient.get(`/forms/${bookId}`);
    return response.data;
  }
}
