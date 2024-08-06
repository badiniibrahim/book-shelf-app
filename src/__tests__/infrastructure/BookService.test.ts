import { Book } from "@/src/domain/entities/ Book";
import apiClient from "@/src/infrastructure/api/apiClient";
import { BookService } from "@/src/infrastructure/api/BookService";

describe("BookService", () => {
  let bookService: BookService;

  beforeEach(() => {
    bookService = new BookService();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should return a book by ID", async () => {
    const bookId = "book1";
    const mockBook: Book = {
      id: "book1",
      title: "Book Title",
      authors: [{ id: "author1", name: "Author Name", slug: "author-name" }],
      book: { id: "book1", slug: "book-title" },
      image: "image-url",
      description: "Book Description",
      isbn: "1234567890",
      publisher: "Publisher Name",
    };

    // Mock de la réponse d'apiClient
    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockBook });

    const book = await bookService.getBookById(bookId);

    expect(apiClient.get).toHaveBeenCalledWith(`/books/${bookId}`);
    expect(book).toEqual(mockBook);
  });

  test("should handle errors when getting book by ID", async () => {
    const bookId = "book1";
    const error = new Error("Failed to fetch book");

    // Mock d'une réponse d'erreur
    (apiClient.get as jest.Mock).mockRejectedValue(error);

    await expect(bookService.getBookById(bookId)).rejects.toThrow(error);
  });
});
