import { ListDataDto } from "@/api";
import { listApi } from "@/api/apiClient";
import { queryClient } from "@/providers/ReactQuery";
import { useMutation } from "@tanstack/react-query";

const useRqCreateList = (
  boardId: string,
) => {
  return useMutation({
    mutationKey: ['createList'],
    mutationFn: async (data: ListDataDto) => {
      return listApi.createList(boardId, data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["lists", boardId] });
      await queryClient.resetQueries({ queryKey: ["lists", boardId] });
    }
  });
}

export default useRqCreateList;
