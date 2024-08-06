// BookList.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import BookList from "@/src/presentation/components/BookList";
import "@testing-library/jest-dom";
import { Book } from "@/src/domain/entities/ Book";

const mockBooks: Book[] = [
  {
    id: "book1",
    title: "Book Title 1",
    authors: [{ id: "author1", name: "Author Name 1", slug: "author-name-1" }],
    book: { id: "book1", slug: "book-title-1" },
    image:
      "https://storage.googleapis.com/s4-bucket/reaaad/User/5a8411b53ed02c04187ff02a-9551fb941e261bf9c1eafa5ad7dfc9aa.png?GoogleAccessId=dragonstone-production@glose-platform.iam.gserviceaccount.com&Expires=32503680000&Signature=DI5dnNp/C/zwO/QeC92Vm%2Bx2wtRmwdRfEBJiiiRS23kRrPo0vkUxq5lUI0BK8b3oN4i7VrFcdgxl7I5EDOZYSrd5VbNLxMPE7%2BVmuGmU0g5FjAhMxFp7j2HYVGXkkcFI4PArgDwy2ys1oQJV2s1r7aTphsLAYM57unpIm88TP45vZ9WPUudTsjIqCHcWH8%2BoUK9VHyAC8/ODfkBlU8SyRM%2BLbPSI9nmKr0XgZJOI9M69i2kpbceG8fIYhifn/gbEqQ6E1kahOvgYUMLFudMwrT/4vpwvaw2HIsb9vNdSb/XXQrIcJwD/RCiA/tmG2nLCa4fRF2S9js1cmT8w/FbmwA%3D%3D",
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
      "https://storage.googleapis.com/s4-bucket/reaaad/User/5a8411b53ed02c04187ff02a-9551fb941e261bf9c1eafa5ad7dfc9aa.png?GoogleAccessId=dragonstone-production@glose-platform.iam.gserviceaccount.com&Expires=32503680000&Signature=DI5dnNp/C/zwO/QeC92Vm%2Bx2wtRmwdRfEBJiiiRS23kRrPo0vkUxq5lUI0BK8b3oN4i7VrFcdgxl7I5EDOZYSrd5VbNLxMPE7%2BVmuGmU0g5FjAhMxFp7j2HYVGXkkcFI4PArgDwy2ys1oQJV2s1r7aTphsLAYM57unpIm88TP45vZ9WPUudTsjIqCHcWH8%2BoUK9VHyAC8/ODfkBlU8SyRM%2BLbPSI9nmKr0XgZJOI9M69i2kpbceG8fIYhifn/gbEqQ6E1kahOvgYUMLFudMwrT/4vpwvaw2HIsb9vNdSb/XXQrIcJwD/RCiA/tmG2nLCa4fRF2S9js1cmT8w/FbmwA%3D%3D",
    description: "Book Description 2",
    isbn: "0987654321",
    publisher: "Publisher Name 2",
  },
];

describe("BookList", () => {
  test("renders a list of books", () => {
    render(<BookList bookList={mockBooks} />);

    mockBooks.forEach((book) => {
      expect(screen.getByText(book.title)).toBeInTheDocument();
    });

    mockBooks.forEach((book) => {
      expect(screen.getByText(book.description)).toBeInTheDocument();
    });

    mockBooks.forEach((book) => {
      const publisherElements = screen.getAllByText(book.publisher);
      expect(publisherElements.length).toBeGreaterThan(0);
    });
  });

  test("renders no books when bookList is empty", () => {
    render(<BookList bookList={[]} />);

    const bookCards = screen.queryAllByAltText("fund");
    expect(bookCards).toHaveLength(0);
  });
});
