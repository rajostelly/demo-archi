import { useQuery } from '@tanstack/react-query';

import { workspaceApi } from '@/api/apiClient';

const useFetchWorkspaceById = ({
  token,
  workspaceId,
}: {
  token: string;
  workspaceId: string;
}) => {
  return useQuery({
    queryKey: ['workspace', workspaceId],
    queryFn: async () => {
      return await workspaceApi.getWorkspaceById(
        `Bearer ${token}`,
        workspaceId
      );
    },
    enabled: !!workspaceId && !!token,
  });
};

export default useFetchWorkspaceById;
