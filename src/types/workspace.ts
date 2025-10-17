export type WorkspaceStep = 'WORKSPACE_CREATION' | 'MEMBER_INVITATION';

export type LoadingState =
  | { type: 'IDLE' }
  | { type: 'CREATING_WORKSPACE' }
  | { type: 'INVITING_MEMBERS'; processedCount: number; totalCount: number };

export type ErrorState =
  | { type: 'NONE' }
  | { type: 'WORKSPACE_CREATION_ERROR'; message: string }
  | { type: 'MEMBER_INVITATION_ERROR'; message: string }
  | {
      type: 'VALIDATION_ERROR';
      field: 'workspaceName' | 'invitedEmails' | 'root';
      messages: ReadonlyArray<string>;
    };

export interface WorkspaceFormData {
  readonly workspaceName: string;
  readonly invitedEmails: ReadonlyArray<string>;
}

export interface FormErrors {
  readonly workspaceName: ReadonlyArray<string>;
  readonly invitedEmails: ReadonlyArray<string>;
  readonly root: ReadonlyArray<string>;
}

export interface WorkspaceState {
  readonly currentStep: WorkspaceStep;
  readonly loadingState: LoadingState;
  readonly errorState: ErrorState;
  readonly formData: WorkspaceFormData;
  readonly formErrors: FormErrors;
  readonly workspaceId: string | null;
  readonly workspaceUrl: string | null;
}

export interface WorkspaceCreationResult {
  readonly id: string;
  readonly url: string;
}

export type InvitationResult =
  | { readonly email: string; readonly success: true }
  | { readonly email: string; readonly success: false; readonly error: string };
