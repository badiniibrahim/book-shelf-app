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
    queryFn: async () => await diContainer.getShelfList.execute(),
  });
  return { shelves, shelvesLoading, shelvesError };
}
