import "whatwg-fetch";
import "@testing-library/jest-dom";

import { server } from "./server";

window.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
})) as any;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
