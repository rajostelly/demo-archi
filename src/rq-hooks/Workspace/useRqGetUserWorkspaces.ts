import { useQuery } from '@tanstack/react-query';

import { workspaceApi } from '@/api/apiClient';

/**
 * React Query hook to fetch all workspaces for the current user
 * @param token - The authentication token
 * @returns Query result with user's workspaces
 */
export const useRqGetUserWorkspaces = (token: string) => {
  return useQuery({
    queryKey: ['user-workspaces', token],
    queryFn: async () => {
      return workspaceApi.getAllWorkspaces(`Bearer ${token}`);
    },
    enabled: !!token,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export default useRqGetUserWorkspaces;
