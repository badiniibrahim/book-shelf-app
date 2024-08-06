import { Shelf } from "@/src/domain/entities/Shelf";
import { ShelfRepository } from "@/src/domain/repositories/ShelfRepository";
import { GetShelfList } from "@/src/usecases/GetShelfList";

describe("GetShelfList", () => {
  let getShelfList: GetShelfList;
  let mockShelfRepository: jest.Mocked<ShelfRepository>;

  beforeEach(() => {
    mockShelfRepository = {
      getShelfList: jest.fn(),
      getBooksFromShelf: jest.fn(),
    };
    getShelfList = new GetShelfList(mockShelfRepository);
  });

  test("should call getShelfList with correct parameters", async () => {
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

    mockShelfRepository.getShelfList.mockResolvedValue(mockShelves);

    const offset = 0;
    const limit = 10;
    const result = await getShelfList.execute(offset, limit);

    expect(mockShelfRepository.getShelfList).toHaveBeenCalledWith(
      offset,
      limit
    );
    expect(result).toEqual(mockShelves);
  });

  test("should handle errors from repository", async () => {
    const error = new Error("Failed to fetch shelves");
    mockShelfRepository.getShelfList.mockRejectedValue(error);

    await expect(getShelfList.execute()).rejects.toThrow(error);
  });

  test("should call getShelfList without parameters", async () => {
    const mockShelves: Shelf[] = [
      {
        id: "shelf1",
        slug: "shelf-1",
        lastModified: Date.now(),
        title: "Shelf 1",
      },
    ];

    mockShelfRepository.getShelfList.mockResolvedValue(mockShelves);

    const result = await getShelfList.execute();

    expect(mockShelfRepository.getShelfList).toHaveBeenCalledWith(
      undefined,
      undefined
    );
    expect(result).toEqual(mockShelves);
  });
});
