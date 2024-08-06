import { Shelf } from "@/src/domain/entities/Shelf";
import { User } from "@/src/domain/entities/user";

export class ShelfEntity implements Shelf {
  id: string;
  slug: string;
  lastModified: number;
  title: string;
  user?: User;

  constructor(
    id: string,
    slug: string,
    lastModified: number,
    title: string,
    user?: User
  ) {
    this.id = id;
    this.slug = slug;
    this.lastModified = lastModified;
    this.title = title;
    this.user = user;
  }
}

describe("ShelfEntity", () => {
  test("should create a ShelfEntity with valid properties", () => {
    const user: User = {
      id: "user1",
      name: "User One",
      username: "user_one",
      cover: "https://example.com/cover.jpg",
      image: "https://example.com/image.jpg",
    };
    const shelf = new ShelfEntity(
      "shelf1",
      "shelf-slug",
      Date.now(),
      "Shelf Title",
      user
    );

    expect(shelf).toBeDefined();
    expect(shelf.id).toBe("shelf1");
    expect(shelf.slug).toBe("shelf-slug");
    expect(shelf.lastModified).toBeGreaterThan(0);
    expect(shelf.title).toBe("Shelf Title");
    expect(shelf.user).toEqual(user);
  });

  test("should create a ShelfEntity without a user", () => {
    const shelf = new ShelfEntity(
      "shelf2",
      "shelf-slug-2",
      Date.now(),
      "Shelf Title 2"
    );

    expect(shelf).toBeDefined();
    expect(shelf.id).toBe("shelf2");
    expect(shelf.slug).toBe("shelf-slug-2");
    expect(shelf.lastModified).toBeGreaterThan(0);
    expect(shelf.title).toBe("Shelf Title 2");
    expect(shelf.user).toBeUndefined();
  });
});
