import { useQuery } from "@tanstack/react-query";
import { DIContainer } from "@/src/lib/diContainer";

const diContainer = DIContainer.getInstance();

export function useShelfList() {
  const {
    data: shelves,
    isLoading: shelvesLoading,
    error: shelvesError,
  } = useQuery({
    queryKey: ["shelves"],
    queryFn: async () => {
      try {
        return await diContainer.getShelfList.execute();
      } catch (error) {
        console.error("Error fetching shelf list:", error);
        throw new Error("Failed to fetch shelf list.");
      }
    },
    staleTime: 1000 * 60 * 5,
  });

  return { shelves, shelvesLoading, shelvesError };
}
