import BookCard from "@/src/presentation/components/BookCard";
import { Book } from "@/src/domain/entities/ Book";
import React, { FC } from "react";

type Props = {
  bookList: Book[];
};

const BookList: FC<Props> = ({ bookList }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {bookList.length > 0 &&
        bookList.map((book) => <BookCard key={book.id} {...book} />)}
    </div>
  );
};

export default BookList;
