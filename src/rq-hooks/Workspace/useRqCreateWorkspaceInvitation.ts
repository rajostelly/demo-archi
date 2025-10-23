import { useMutation } from '@tanstack/react-query';

import type { CreateInvitationRequest } from '@/api';
import { invitationApi } from '@/api/apiClient';
import { queryClient } from '@/providers/ReactQuery';

const useRqCreateWorkspaceInvitation = (token: string) => {
  return useMutation({
    mutationKey: ['createWorkspaceInvitation'],
    mutationFn: async (data: CreateInvitationRequest) => {
      return invitationApi.createInvitation(`Bearer ${token}`, data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['workspace-list'] });
      // await queryClient.invalidateQueries({ queryKey: ['my-invitations'] });
    },
  });
};

export default useRqCreateWorkspaceInvitation;
