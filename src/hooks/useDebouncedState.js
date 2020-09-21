import { useState, useEffect } from "react";

function useDebouncedState(value, delay) {
  const [debouncedState, setDebouncedState] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedState(value);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return [debouncedState];
}

export default useDebouncedState;
