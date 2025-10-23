import { useMutation } from '@tanstack/react-query';

import type { WorkspaceDataDTO } from '@/api';
import { workspaceApi } from '@/api/apiClient';
// import { queryClient } from '@/providers/ReactQuery';

const useRqCreateWorkspace = (token: string) => {
  return useMutation({
    mutationKey: ['createWorkspace'],
    mutationFn: async (data: WorkspaceDataDTO) => {
      return workspaceApi.createWorkspace(`Bearer ${token}`, data);
    },
    onSuccess: async () => {
      // await queryClient.invalidateQueries({ queryKey: ['workspace-list'] });
    },
  });
};

export default useRqCreateWorkspace;
