"use client";

import React, { useState, useEffect } from "react";
import { useShelfList } from "@/src/hooks/useShelves";
import { useBooks } from "@/src/hooks/useBooks";
import { useInfiniteScroll } from "@/src/hooks/useInfiniteScroll";
import ShelfTabs from "@/src/presentation/pages";
import Hero from "@/components/shared/Hero";

export default function Home() {
  const [selectedShelf, setSelectedShelf] = useState<string | null>(null);

  const { shelves, shelvesLoading, shelvesError } = useShelfList();

  useEffect(() => {
    if (shelves && shelves.length > 0 && !selectedShelf) {
      setSelectedShelf(shelves[0].id);
    }
  }, [shelves, selectedShelf]);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useBooks(selectedShelf);

  const handleScroll = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  if (shelvesLoading || isLoading) return <p>Loading...</p>;
  if (shelvesError || error) return <p>Error loading data</p>;

  const books = data?.pages.flat() || [];

  return (
    <div>
      <Hero />
      <div
        onScroll={handleScroll}
        style={{ height: "100vh", overflowY: "scroll" }}
      >
        <ShelfTabs
          shelves={shelves || []}
          selectedShelf={selectedShelf}
          setSelectedShelf={setSelectedShelf}
          books={books}
        />
        {isFetchingNextPage && <p>Loading more...</p>}
      </div>
    </div>
  );
}
