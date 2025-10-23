import { useQuery } from '@tanstack/react-query';

import { workspaceApi } from '@/api/apiClient';
import type { WorkspaceDTO } from '@/api/models/WorkspaceDTO';

export const useRqGetWorkspacesListByUserId = (token: string) => {
  return useQuery({
    queryKey: ['workspaces-list-by-user', token],
    queryFn: async () => {
      const allWorkspaces = await workspaceApi.getAllWorkspaces(
        `Bearer ${token}`
      );

      const filteredWorkspaces: Array<WorkspaceDTO> = [];
      console.log(`Fetching workspaces`);

      for (const workspace of allWorkspaces) {
        // const members = await workspaceApi.listAllWorkspaceMembers(workspace.id!);
        // console.log("members:", members, "workspaceId:", workspace.id);

        // const isMember = members.some((member: User) => {
        //   console.log(`Checking if user ${userId} is a member of workspace ${workspace.name} - ${member.id}:`);

        //   return member.id === userId
        // });
        // console.log(`Workspace: ${workspace.name}, isMember: ${isMember}`);

        // if (isMember) {
        //   filteredWorkspaces.push(workspace);
        // }
        filteredWorkspaces.push(workspace);
      }

      return filteredWorkspaces;
    },
    enabled: !!token, // don’t run if no userId
  });
};
