import { useInfiniteQuery } from "@tanstack/react-query";
import { DIContainer } from "@/src/lib/diContainer";
import { GetBooksByShelf } from "../usecases/GetBooksByShelf";

const diContainer = DIContainer.getInstance();
const getBooksByShelf = diContainer.getBooksByShelf as GetBooksByShelf;

export function useBooks(selectedShelf: string | null) {
  return useInfiniteQuery({
    queryKey: ["booksFromShelf", selectedShelf],
    queryFn: async ({ pageParam = 0 }) => {
      if (!selectedShelf) return [];
      return getBooksByShelf.execute(selectedShelf, pageParam, 20);
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 20 ? allPages.length * 20 : undefined;
    },
    enabled: !!selectedShelf,
    initialPageParam: 0,
  });
}
