class Fetch {
  private baseURL: string;
  private accessToken: string | undefined;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_BASE_URL;
  }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(this.accessToken && { AccessToken: this.accessToken }),
      },
    });
    const data: T = await response.json();
    return data;
  }

  async post<T>({ path, headers, body }: { path: string; headers?: HeadersInit; body: object }) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        ...(this.accessToken && { AccessToken: this.accessToken }),
        ...headers,
      },
      body: JSON.stringify(body),
    });
    const data: T = await response.json();
    return data;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }
}

const client = new Fetch();

export default client;
