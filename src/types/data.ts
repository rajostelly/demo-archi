export interface ISignupForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISigninForm {
  email: string;
  password: string;
}

export interface IWorkspaceForm {
  workspaceName: string;
}

export interface IInviteForm {
  invitedEmails: Array<string>;
}
