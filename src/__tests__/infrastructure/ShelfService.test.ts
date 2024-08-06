import { ShelfService } from "@/src/infrastructure/api/ShelfService";
import { Shelf } from "../../domain/entities/Shelf";
import apiClient from "@/src/infrastructure/api/apiClient";

jest.mock("./apiClient");

const shelfService = new ShelfService();

describe("ShelfService", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should get books from shelf", async () => {
    const shelfId = "shelf1";
    const offset = 0;
    const limit = 10;
    const mockBookIds = ["book1", "book2"];

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockBookIds });

    const result = await shelfService.getBooksFromShelf(shelfId, offset, limit);
    expect(apiClient.get).toHaveBeenCalledWith(`/shelves/${shelfId}/forms`, {
      params: { offset, limit },
    });
    expect(result).toEqual(mockBookIds);
  });

  test("should get shelf list", async () => {
    const offset = 0;
    const limit = 10;
    const mockShelves: Shelf[] = [
      {
        id: "shelf1",
        slug: "shelf-1",
        lastModified: Date.now(),
        title: "Shelf 1",
      },
      {
        id: "shelf2",
        slug: "shelf-2",
        lastModified: Date.now(),
        title: "Shelf 2",
      },
    ];

    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockShelves });

    const result = await shelfService.getShelfList(offset, limit);
    expect(apiClient.get).toHaveBeenCalledWith(
      `/users/5a8411b53ed02c04187ff02a/shelves`,
      { params: { offset, limit } }
    );
    expect(result).toEqual(mockShelves);
  });

  test("should handle errors when getting books from shelf", async () => {
    const shelfId = "shelf1";
    const offset = 0;
    const limit = 10;
    const error = new Error("Failed to fetch books");

    (apiClient.get as jest.Mock).mockRejectedValue(error);

    await expect(
      shelfService.getBooksFromShelf(shelfId, offset, limit)
    ).rejects.toThrow(error);
  });

  test("should handle errors when getting shelf list", async () => {
    const offset = 0;
    const limit = 10;
    const error = new Error("Failed to fetch shelves");

    (apiClient.get as jest.Mock).mockRejectedValue(error);

    await expect(shelfService.getShelfList(offset, limit)).rejects.toThrow(
      error
    );
  });
});
