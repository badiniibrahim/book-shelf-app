export interface Author {
  id: string;
  name: string;
  slug: string;
}

export interface Book {
  id: string;
  title: string;
  authors: ReadonlyArray<Author>;
  book: {
    id: string;
    slug: string;
  };
  image: string;
  description: string;
  isbn: string;
  publisher: string;
}

export interface Book {
  id: string;
  title: string;
  authors: ReadonlyArray<Author>;
  book: {
    id: string;
    slug: string;
  };
  image: string;
  description: string;
  isbn: string;
  publisher: string;
}

type ISBN = string;

export interface Book {
  id: string;
  title: string;
  authors: ReadonlyArray<Author>;
  book: {
    id: string;
    slug: string;
  };
  image: string;
  description: string;
  isbn: ISBN;
  publisher: string;
}
