import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shelf } from "@/src/domain/entities/Shelf";
import BookList from "@/src/presentation/components/BookList";
import { Book } from "@/src/domain/entities/ Book";

interface ShelfTabsProps {
  shelves: Shelf[];
  selectedShelf: string | null;
  setSelectedShelf: (shelfId: string) => void;
  books: Book[];
}

const ShelfTabs: React.FC<ShelfTabsProps> = ({
  shelves,
  selectedShelf,
  setSelectedShelf,
  books,
}) => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Tabs
        value={selectedShelf || ""}
        className="w-[1500px] mt-9"
        onValueChange={(value) => setSelectedShelf(value)}
      >
        <TabsList className="grid w-full grid-cols-3">
          {shelves.map((item, index) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              data-testid={`tabs-trigger-shelf-${index + 1}`}
            >
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {shelves.map((item) => (
          <TabsContent
            key={item.id}
            value={item.id}
            data-testid={`tabs-content-${item.id}`}
          >
            {selectedShelf === item.id && <BookList bookList={books || []} />}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
};

export default ShelfTabs;
