import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Shelf } from "@/src/domain/entities/Shelf";
import { Book } from "@/src/domain/entities/ Book";
import ShelfTabs from "@/src/presentation/pages";

const mockShelves: Shelf[] = [
  {
    id: "shelf1",
    slug: "shelf-1",
    lastModified: Date.now(),
    title: "Shelf 1",
  },
  {
    id: "shelf2",
    slug: "shelf-2",
    lastModified: Date.now(),
    title: "Shelf 2",
  },
  {
    id: "shelf3",
    slug: "shelf-3",
    lastModified: Date.now(),
    title: "Shelf 3",
  },
];

const mockBooks: Book[] = [
  {
    id: "book1",
    title: "Book Title 1",
    authors: [{ id: "author1", name: "Author Name 1", slug: "author-name-1" }],
    book: { id: "book1", slug: "book-title-1" },
    image:
      "https://storage.googleapis.com/s4-bucket/reaaad/User/5a8411b53ed02c04187ff02a-9551fb941e261bf9c1eafa5ad7dfc9aa.png",
    description: "Book Description 1",
    isbn: "1234567890",
    publisher: "Publisher Name 1",
  },
  {
    id: "book2",
    title: "Book Title 2",
    authors: [{ id: "author2", name: "Author Name 2", slug: "author-name-2" }],
    book: { id: "book2", slug: "book-title-2" },
    image:
      "https://storage.googleapis.com/s4-bucket/reaaad/User/5a8411b53ed02c04187ff02a-9551fb941e261bf9c1eafa5ad7dfc9aa.png",
    description: "Book Description 2",
    isbn: "0987654321",
    publisher: "Publisher Name 2",
  },
];

describe("ShelfTabs", () => {
  const setSelectedShelf = jest.fn();

  test("renders shelf tabs correctly", () => {
    render(
      <ShelfTabs
        shelves={mockShelves}
        selectedShelf={null}
        setSelectedShelf={setSelectedShelf}
        books={mockBooks}
      />
    );

    mockShelves.forEach((shelf) => {
      expect(screen.getByText(shelf.title)).toBeInTheDocument();
    });
  });

  test("renders books for the selected shelf", () => {
    render(
      <ShelfTabs
        shelves={mockShelves}
        selectedShelf="shelf1"
        setSelectedShelf={setSelectedShelf}
        books={mockBooks}
      />
    );

    mockBooks.forEach((book) => {
      expect(screen.getByText(book.title)).toBeInTheDocument();
    });
  });

  test("renders no books when there are no books for the selected shelf", () => {
    render(
      <ShelfTabs
        shelves={mockShelves}
        selectedShelf="shelf1"
        setSelectedShelf={setSelectedShelf}
        books={[]}
      />
    );

    const bookCards = screen.queryAllByAltText("fund");
    expect(bookCards).toHaveLength(0);
  });
});
