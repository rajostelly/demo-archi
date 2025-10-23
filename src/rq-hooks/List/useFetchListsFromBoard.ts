import { useQuery } from '@tanstack/react-query';

import { listApi } from '@/api/apiClient';

const useFetchListsFromBoard = (boardId: string) => {
  return useQuery({
    queryKey: ['lists', boardId],
    queryFn: async () => {
      return listApi.getLists(boardId);
    }
  })
}

export default useFetchListsFromBoard;
