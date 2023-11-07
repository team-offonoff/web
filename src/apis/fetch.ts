class Fetch {
  baseURL: string;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_BASE_URL;
  }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data: T = await response.json();
    return data;
  }

  post(path: string, body: BodyInit) {
    return fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });
  }
}

const client = new Fetch();

export default client;
