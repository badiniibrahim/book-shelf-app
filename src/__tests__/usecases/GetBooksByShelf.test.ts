import { Book } from "@/src/domain/entities/ Book";
import { BookRepository } from "@/src/domain/repositories/BookRepository";
import { ShelfRepository } from "@/src/domain/repositories/ShelfRepository";
import { GetBooksByShelf } from "@/src/usecases/GetBooksByShelf";

describe("GetBooksByShelf", () => {
  let getBooksByShelf: GetBooksByShelf;
  let mockBookRepository: jest.Mocked<BookRepository>;
  let mockShelfRepository: jest.Mocked<ShelfRepository>;

  beforeEach(() => {
    mockBookRepository = {
      getBookById: jest.fn(),
    };
    mockShelfRepository = {
      getShelfList: jest.fn(),
      getBooksFromShelf: jest.fn(),
    };
    getBooksByShelf = new GetBooksByShelf(
      mockBookRepository,
      mockShelfRepository
    );
  });

  test("should fetch books by shelf ID", async () => {
    const shelfId = "shelf1";
    const mockBookIds = ["book1", "book2"];
    const mockBooks: Book[] = [
      {
        id: "book1",
        title: "Book Title 1",
        authors: [
          { id: "author1", name: "Author Name 1", slug: "author-name-1" },
        ],
        book: { id: "book1", slug: "book-title-1" },
        image: "https://example.com/book1.png",
        description: "Book Description 1",
        isbn: "1234567890",
        publisher: "Publisher Name 1",
      },
      {
        id: "book2",
        title: "Book Title 2",
        authors: [
          { id: "author2", name: "Author Name 2", slug: "author-name-2" },
        ],
        book: { id: "book2", slug: "book-title-2" },
        image: "https://example.com/book2.png",
        description: "Book Description 2",
        isbn: "0987654321",
        publisher: "Publisher Name 2",
      },
    ];

    mockShelfRepository.getBooksFromShelf.mockResolvedValue(mockBookIds);
    mockBookRepository.getBookById.mockImplementation((id: string) =>
      Promise.resolve(mockBooks.find((book) => book.id === id)!)
    );

    const result = await getBooksByShelf.execute(shelfId);

    expect(mockBookRepository.getBookById).toHaveBeenCalledTimes(
      mockBookIds.length
    );
    expect(result).toEqual(mockBooks);
  });

  test("should handle errors when fetching books from the shelf", async () => {
    const shelfId = "shelf1";
    const error = new Error("Failed to fetch book IDs");

    mockShelfRepository.getBooksFromShelf.mockRejectedValue(error);

    await expect(getBooksByShelf.execute(shelfId)).rejects.toThrow(error);
  });

  test("should handle errors when fetching books by ID", async () => {
    const shelfId = "shelf1";
    const mockBookIds = ["book1", "book2"];

    mockShelfRepository.getBooksFromShelf.mockResolvedValue(mockBookIds);
    mockBookRepository.getBookById.mockImplementation(() =>
      Promise.reject(new Error("Failed to fetch book"))
    );

    await expect(getBooksByShelf.execute(shelfId)).rejects.toThrow(
      "Failed to fetch book"
    );
  });

  test("should fetch books with offset and limit", async () => {
    const shelfId = "shelf1";
    const offset = 0;
    const limit = 2;
    const mockBookIds = ["book1", "book2"];
    const mockBooks: Book[] = [
      {
        id: "book1",
        title: "Book Title 1",
        authors: [
          { id: "author1", name: "Author Name 1", slug: "author-name-1" },
        ],
        book: { id: "book1", slug: "book-title-1" },
        image: "https://example.com/book1.png",
        description: "Book Description 1",
        isbn: "1234567890",
        publisher: "Publisher Name 1",
      },
      {
        id: "book2",
        title: "Book Title 2",
        authors: [
          { id: "author2", name: "Author Name 2", slug: "author-name-2" },
        ],
        book: { id: "book2", slug: "book-title-2" },
        image: "https://example.com/book2.png",
        description: "Book Description 2",
        isbn: "0987654321",
        publisher: "Publisher Name 2",
      },
    ];

    mockShelfRepository.getBooksFromShelf.mockResolvedValue(mockBookIds);
    mockBookRepository.getBookById.mockImplementation((id: string) =>
      Promise.resolve(mockBooks.find((book) => book.id === id)!)
    );

    const result = await getBooksByShelf.execute(shelfId, offset, limit);

    expect(mockShelfRepository.getBooksFromShelf).toHaveBeenCalledWith(
      shelfId,
      offset,
      limit
    );
    expect(result).toEqual(mockBooks);
  });
});
