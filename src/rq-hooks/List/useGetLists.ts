import { listApi } from '@/api/apiClient';
import { useQuery } from '@tanstack/react-query';

const useGetLists = (boardId: string) => {
  return useQuery({
    queryKey: ["lists-list", boardId],
    queryFn: async () => {
      return listApi.getLists(boardId);
    }
  })
}

export default useGetLists;