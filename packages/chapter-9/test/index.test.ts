import { init } from "@rematch/core";
import T from "prop-types";
import createTypedStatePlugin from "../src";

const BASE_MODEL = {
  name: 'user',
  state: {
    name: "Sergio",
    age: 23,
  },

  reducers: {
    update: (_, { name, age }) => ({
      name,
      age,
    }),
  },
};

describe("Rematch Plugin Typed State", () => {
  it("should throw a warning when one type is invalid", () => {
    globalThis.console.warn = jest.fn();

    const user = {
      ...BASE_MODEL,
      typings: {
        name: T.string.isRequired,
        age: T.number.isRequired,
      },
    };

    const { dispatch } = init({
      models: { user },
      plugins: [createTypedStatePlugin()],
    });

    dispatch.user.update({ name: undefined, age: 26 });
    expect(globalThis.console.warn).toHaveBeenCalledTimes(1);
    expect(globalThis.console.warn).toHaveBeenCalledWith(
      "[Rematch]: The property `name` is marked as required in `user`, but its value is `undefined`."
    );
  });
  it("should throw TWO warnings when two types are invalid", () => {
    globalThis.console.warn = jest.fn();

    const user = {
      ...BASE_MODEL,
      typings: {
        name: T.string.isRequired,
        age: T.number.isRequired,
      },
    };

    const { dispatch } = init({
      models: { user },
      plugins: [createTypedStatePlugin()],
    });

      dispatch.user.update({ name: undefined, age: "26" });
      expect(globalThis.console.warn).toHaveBeenCalledTimes(2);
      expect(globalThis.console.warn).toHaveBeenNthCalledWith(
        1,
        "[Rematch]: The property `name` is marked as required in `user`, but its value is `undefined`."
      );
      expect(globalThis.console.warn).toHaveBeenNthCalledWith(
        2,
        "[Rematch]: Invalid property `age` of type `string` supplied to `user`, expected `number`."
      );
  });

  it("work with dynamic model", () => {
    globalThis.console.warn = jest.fn();

    const user = {
      ...BASE_MODEL,
      typings: {
        name: T.string.isRequired,
        age: T.number.isRequired,
      },
    };

    const store = init({
      models: {},
      plugins: [createTypedStatePlugin()],
    });

    store.addModel(user);
    store.dispatch.user.update({ name: undefined, age: 26 });
    expect(globalThis.console.warn).toHaveBeenCalledTimes(1);
    expect(globalThis.console.warn).toHaveBeenCalledWith(
      "[Rematch]: The property `name` is marked as required in `user`, but its value is `undefined`."
    );
  });
});
