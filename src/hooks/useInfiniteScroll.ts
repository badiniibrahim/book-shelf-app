import { useCallback } from "react";

type UseInfiniteScrollParams = {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
};

export function useInfiniteScroll({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: UseInfiniteScrollParams) {
  return useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      try {
        const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
        if (typeof fetchNextPage !== "function") {
          throw new Error("fetchNextPage is not a function");
        }

        if (
          scrollHeight - scrollTop <= clientHeight + 10 &&
          hasNextPage &&
          !isFetchingNextPage
        ) {
          fetchNextPage();
        }
      } catch (error) {
        console.error("Error in useInfiniteScroll:", error);
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );
}
