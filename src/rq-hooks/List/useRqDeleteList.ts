import { ListDataDto } from "@/api";
import { listApi } from "@/api/apiClient";
import { queryClient } from "@/providers/ReactQuery";
import { useMutation } from "@tanstack/react-query";

const useRqDeletList = (
  boardId: string,
) => {
  return useMutation({
    mutationKey: ['deleteList'],
    mutationFn: async (listId: string) => {
      return listApi.deleteList(listId);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["lists", boardId] });
      await queryClient.resetQueries({ queryKey: ["lists", boardId] });
    }
  });
}

export default useRqDeletList;