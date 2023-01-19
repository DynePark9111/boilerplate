import { useEffect, useState } from "react";

type initialValue = string | Function;

export default function useLocalStorage(
  key: string,
  initialValue: initialValue
) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

function getSavedValue(key: string, initialValue: initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key) || "{}");
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}
