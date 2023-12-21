import { ErrorResponse } from '@interfaces/api/error';

export class ResponseError extends Error {
  errorData: ErrorResponse;

  constructor(errorData: ErrorResponse) {
    super();
    this.errorData = errorData;
  }
}

class Fetch {
  private baseURL: string;
  private accessToken: string | undefined;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_BASE_URL;

    if (import.meta.env.DEV) {
      this.accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
    }
  }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(this.accessToken && { Authorization: `Bearer ${this.accessToken}` }),
      },
    });
    const data: T = await response.json();
    return data;
  }

  async post<TData>({
    path,
    headers,
    body,
  }: {
    path: string;
    headers?: HeadersInit;
    body: object;
  }) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        ...(this.accessToken && { Authorization: `Bearer ${this.accessToken}` }),
        ...headers,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new ResponseError(data);
    }

    return data as TData;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }
}

const client = new Fetch();

export default client;
