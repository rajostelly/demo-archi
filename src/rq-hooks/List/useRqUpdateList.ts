import { ListDataDto } from '@/api';
import { listApi } from '@/api/apiClient';
import { queryClient } from '@/providers/ReactQuery';
import { useMutation } from '@tanstack/react-query';

const useRqUpdateList = (boardId: string, listId: string) => {
  return useMutation({
    mutationKey: ['updateList'],
    mutationFn: async (data: ListDataDto) => {
      return listApi.updateList(listId, data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['lists', boardId] });
      await queryClient.resetQueries({ queryKey: ['lists', boardId] });
    },
  });
};

export default useRqUpdateList;
