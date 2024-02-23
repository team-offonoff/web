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
  }

  async get<TData>(path: string, qs?: Record<string, any>) {
    const queryString = qs ? `?${new URLSearchParams(qs).toString()}` : '';
    const response = await fetch(`${this.baseURL}${path}${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(this.accessToken && { Authorization: `Bearer ${this.accessToken}` }),
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new ResponseError(data);
    }

    return data as TData;
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

  async put<TData>({ path, headers, body }: { path: string; headers?: HeadersInit; body: object }) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        ...(this.accessToken && { Authorization: `Bearer ${this.accessToken}` }),
        ...headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new ResponseError(data);
    }

    // 응답 본문이 있는지 확인
    const text = await response.text();
    if (text) {
      // 응답 본문이 있으면 JSON으로 파싱
      const data = JSON.parse(text);
      return data as TData;
    } else {
      // 응답 본문이 없으면 null 반환
      return null;
    }
  }

  async delete<T>(path: string, body?: object): Promise<T> {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(this.accessToken && { Authorization: `Bearer ${this.accessToken}` }),
      },
      body: JSON.stringify(body),
    });
    const data: T = await response.json();
    return data;
  }

  async patch<TData>({
    path,
    headers,
    body,
  }: {
    path: string;
    headers?: HeadersInit;
    body: object;
  }) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PATCH',
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
