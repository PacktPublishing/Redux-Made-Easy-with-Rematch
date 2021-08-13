import Http from "redaxios";

const isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative"
class ApiClient {
  httpInstance: typeof Http;

  constructor() {
    this.httpInstance = Http.create({
      baseURL: isReactNative ? "http://10.0.2.2:8000" : "http://localhost:8000",
    });
  }

  async get(url: string, params?: Record<string, unknown>) {
    return this.httpInstance.get(url, { params });
  }

  async patch(
    url: string,
    body: Record<string, unknown>,
    params?: Record<string, unknown>
  ) {
    return this.httpInstance.patch(url, body, { params });
  }
}

export default ApiClient;
