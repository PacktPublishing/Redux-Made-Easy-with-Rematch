const INIT_VALUE = -1;
import React, { useEffect, useRef } from "react";

export function useDebounce(fn, delay: number, options: DebounceOptions = {}) {
  const [num, setNum] = useDebounceState(INIT_VALUE, delay);
  // save actual arguments when fn called
  const callArgRef = useRef(options.initArgs || []);
  // save real callback function
  const fnRef = useRef(fn);
  // wrapped function
  const trigger = useCallback(function () {
    callArgRef.current = [].slice.call(arguments);
    setNum((prev) => {
      return prev + 1;
    });
  }, []);
  // update real callback
  useEffect(function () {
    fnRef.current = fn;
  });
  useEffect(
    function () {
      if (num === INIT_VALUE && !options.imediate) {
        // prevent init call
        return;
      }
      return fnRef.current.apply(null, callArgRef.current);
    },
    [num, options.imediate]
  );
  return trigger;
}