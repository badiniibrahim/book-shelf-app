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
      const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
      if (
        scrollHeight - scrollTop <= clientHeight &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );
}
