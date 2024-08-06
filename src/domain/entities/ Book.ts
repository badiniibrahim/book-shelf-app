export interface Author {
  id: string;
  name: string;
  slug: string;
}

export interface Book {
  id: string;
  title: string;
  authors: Author[];
  book: {
    id: string;
    slug: string;
  };
  image: string;
  description: string;
  isbn: string;
  publisher: string;
}
