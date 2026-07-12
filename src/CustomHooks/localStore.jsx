import { useState, useEffect } from "react";

export function useLocalStorage(key, initValue) {
  // Set State and Get Item From Local Storage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch (err) {
      console.log(err.message);
      return initValue;
    }
  }); // Set Item
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (err) {
      console.error(err.message);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
