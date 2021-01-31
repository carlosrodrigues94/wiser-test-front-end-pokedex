/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type IStateReturnType<T> = [T, Dispatch<SetStateAction<T>>];

function useThemeStorage<T>(
  key: string,
  initialValue: any,
): IStateReturnType<T> {
  const [state, setState] = useState(() => {
    const themeStorage = localStorage.getItem(key);

    if (themeStorage) {
      return JSON.parse(themeStorage);
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useThemeStorage;
