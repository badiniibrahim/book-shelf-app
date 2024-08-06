// src/domain/entities/Book.test.ts

import { Author, Book } from "@/src/domain/entities/ Book";

export class BookEntity implements Book {
  id: string;
  title: string;
  authors: Author[];
  book: { id: string; slug: string };
  image: string;
  description: string;
  isbn: string;
  publisher: string;

  constructor(
    id: string,
    title: string,
    authors: Author[],
    book: { id: string; slug: string },
    image: string,
    description: string,
    isbn: string,
    publisher: string
  ) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.book = book;
    this.image = image;
    this.description = description;
    this.isbn = isbn;
    this.publisher = publisher;
  }
}

export function validateBook(book: Book): boolean {
  return (
    typeof book.id === "string" &&
    typeof book.title === "string" &&
    Array.isArray(book.authors) &&
    typeof book.book.id === "string" &&
    typeof book.book.slug === "string" &&
    typeof book.image === "string" &&
    typeof book.description === "string" &&
    typeof book.isbn === "string" &&
    typeof book.publisher === "string"
  );
}

describe("BookEntity", () => {
  test("should create a book with valid properties", () => {
    const authors: Author[] = [
      { id: "author1", name: "Author One", slug: "author-one" },
    ];
    const book = new BookEntity(
      "book1",
      "Book Title",
      authors,
      { id: "book1", slug: "book-title" },
      "https://example.com/image.jpg",
      "Book Description",
      "1234567890",
      "Publisher Name"
    );

    expect(book).toBeDefined();
    expect(book.id).toBe("book1");
    expect(book.title).toBe("Book Title");
    expect(book.authors).toEqual(authors);
    expect(book.book.id).toBe("book1");
    expect(book.book.slug).toBe("book-title");
    expect(book.image).toBe("https://example.com/image.jpg");
    expect(book.description).toBe("Book Description");
    expect(book.isbn).toBe("1234567890");
    expect(book.publisher).toBe("Publisher Name");
  });

  test("should validate a book object correctly", () => {
    const validBook: Book = {
      id: "book1",
      title: "Book Title",
      authors: [{ id: "author1", name: "Author One", slug: "author-one" }],
      book: { id: "book1", slug: "book-title" },
      image: "https://example.com/image.jpg",
      description: "Book Description",
      isbn: "1234567890",
      publisher: "Publisher Name",
    };

    expect(validateBook(validBook)).toBe(true);

    const invalidBook = { ...validBook, title: 123 }; // Invalid title
    expect(validateBook(invalidBook as any)).toBe(false);
  });
});
