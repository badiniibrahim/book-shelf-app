// BookCard.test.tsx
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import BookCard from "@/src/presentation/components/BookCard";
import "@testing-library/jest-dom";

const mockBook = {
  id: "book1",
  title: "Book Title",
  authors: [{ id: "author1", name: "Author Name", slug: "author-name" }],
  book: { id: "book1", slug: "book-title" },
  image:
    "https://storage.googleapis.com/s4-bucket/reaaad/User/5a8411b53ed02c04187ff02a-9551fb941e261bf9c1eafa5ad7dfc9aa.png?GoogleAccessId=dragonstone-production@glose-platform.iam.gserviceaccount.com&Expires=32503680000&Signature=DI5dnNp/C/zwO/QeC92Vm%2Bx2wtRmwdRfEBJiiiRS23kRrPo0vkUxq5lUI0BK8b3oN4i7VrFcdgxl7I5EDOZYSrd5VbNLxMPE7%2BVmuGmU0g5FjAhMxFp7j2HYVGXkkcFI4PArgDwy2ys1oQJV2s1r7aTphsLAYM57unpIm88TP45vZ9WPUudTsjIqCHcWH8%2BoUK9VHyAC8/ODfkBlU8SyRM%2BLbPSI9nmKr0XgZJOI9M69i2kpbceG8fIYhifn/gbEqQ6E1kahOvgYUMLFudMwrT/4vpwvaw2HIsb9vNdSb/XXQrIcJwD/RCiA/tmG2nLCa4fRF2S9js1cmT8w/FbmwA%3D%3D",
  description: "Book Description",
  isbn: "1234567890",
  publisher: "Publisher Name",
};

describe("BookCard", () => {
  afterEach(() => cleanup());

  test("renders book cover image correctly", () => {
    render(<BookCard {...mockBook} />);
    const coverImage = screen.getByAltText("fund");
    expect(coverImage).toBeInTheDocument();
  });

  test("renders book publisher correctly", () => {
    render(<BookCard {...mockBook} />);
    const publisherElements = screen.getAllByText(mockBook.publisher);
    expect(publisherElements.length).toBeGreaterThan(0);
    publisherElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  test("renders book ISBN correctly", () => {
    render(<BookCard {...mockBook} />);
    expect(screen.getByText(`Isbn ${mockBook.isbn}`)).toBeInTheDocument();
  });

  test("renders author image correctly", () => {
    render(<BookCard {...mockBook} />);
    const authorImage = screen.getByAltText("user");
    expect(authorImage).toBeInTheDocument();
  });
});
