export interface DocsCloudSigninSuccess {
  status: number;
  token?: string;
  user?: unknown;
  [key: string]: unknown;
}

export interface DocsCloudSigninError {
  status: number;
  error: string | Record<string, unknown>;
  message?: string;
  raw?: string;
}

export type DocsCloudSigninResponse =
  | DocsCloudSigninSuccess
  | DocsCloudSigninError
  | { status: 400; message: string }
  | { status: 405; error: string }
  | { status: 500; error: string };