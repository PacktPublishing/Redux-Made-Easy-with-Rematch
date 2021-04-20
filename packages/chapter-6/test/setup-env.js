import "whatwg-fetch";
import "@testing-library/jest-dom";

import { server } from "./server";

window.IntersectionObserver = jest.fn(function () {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
