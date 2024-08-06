import React, { FC } from "react";
import { motion } from "framer-motion";
import BookCard from "@/src/presentation/components/BookCard";
import { Book } from "@/src/domain/entities/ Book";

type Props = {
  bookList: Book[];
};

const BookList: FC<Props> = ({ bookList }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {bookList.length > 0 &&
        bookList.map((book) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BookCard {...book} />
          </motion.div>
        ))}
    </div>
  );
};

export default BookList;
