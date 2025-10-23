import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import type { MoveListDto } from '@/api';
import { listApi } from '@/api/apiClient';
import { queryClient } from '@/providers/ReactQuery';
import { useAuthStore } from '@/stores/auth';

const useMoveList = () => {
  const token = useAuthStore(state => state.token) ?? '';

  return useMutation({
    mutationKey: ['moveList'],
    mutationFn: async ({
      listId,
      moveData,
    }: {
      listId: string;
      moveData: MoveListDto;
    }) => {
      // Set authorization header before making the request
      if (token) {
        const { OpenAPI } = await import('@/api/core/OpenAPI');
        OpenAPI.HEADERS = {
          ...OpenAPI.HEADERS,
          Authorization: `Bearer ${token}`,
        };
      }

      return listApi.moveList(listId, moveData);
    },
    onSuccess: async () => {
      // Invalidate all list-related queries to refresh the data
      await queryClient.invalidateQueries({
        queryKey: ['fetchLists'],
      });

      // Also invalidate board queries since list order affects board
      await queryClient.invalidateQueries({
        queryKey: ['fetchBoards'],
      });

      toast.success('List moved successfully');
    },
    onError: error => {
      console.error('Error moving list:', error);

      if (error && typeof error === 'object') {
        const apiError = error as { status?: number; message?: string };
        if (apiError.status === 500) {
          toast.error('Unable to move list - please try again later');
        } else if (apiError.status === 401) {
          toast.error('Unauthorized - please log in again');
        } else if (apiError.status === 400) {
          toast.error('Invalid list data');
        } else {
          toast.error(
            `Failed to move list: ${apiError.message || 'Unknown error'}`
          );
        }
      } else {
        toast.error('Failed to move list');
      }
    },
  });
};

export default useMoveList;
