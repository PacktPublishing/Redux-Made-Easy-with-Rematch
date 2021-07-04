import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import type { Dispatch } from "../store";

export const Header = () => {
  const dispatch = useDispatch<Dispatch>();
  const [value, setValue] = useState("");
  const debouncedDispatch = useMemo(
    () => debounce(dispatch.shop.SET_QUERY, 300),
    [dispatch]
  );

  useEffect(() => {
    debouncedDispatch(value !== "" && value);
  }, [value, debouncedDispatch]);
  return (
    <div className="grid grid-cols-0/5 grid-rows-1 bg-gray-900 p-3 gap-3 items-center fixed w-full z-10">
      <h1 className="text-white text-3xl font-extrabold tracking-tight underline">
        Ama
        <span className="bg-clip-text text-transparent bg-gradient-to-l from-purple-400 to-pink-200">
          zhop
        </span>
      </h1>

      <div className="relative">
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            onClick={() => {
              dispatch.shop.SET_QUERY(false);
              setValue("");
            }}
            type="button"
            className="text-sm shadow-sm p-1 bg-gradient-to-l from-purple-400 to-pink-200 rounded-lg text-white"
          >
            Reset
          </button>
        </span>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          className="p-2 rounded-md w-full"
          placeholder="Search products..."
        />
      </div>
    </div>
  );
};
