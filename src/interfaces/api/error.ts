export interface ErrorResponse {
  abCode: string;
  errorContent: ErrorContent;
}

interface ErrorContent {
  message: string;
  hint: string;
  httpCode: number;
  payload?: number;
}
