import { useEffect, RefObject } from 'react';

export const useOnClickOutside = (
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: () => void,
  active = true,
): void => {
  useEffect(() => {
    if (!active) return;
    const listener = (event: any) => {
      const refs = Array.isArray(ref) ? ref : [ref];
      let isClickOutside = false;
      console.log({ ref });

      refs.forEach((r) => {
        if (!r.current || r.current.contains(event.target)) {
          console.log('current', r.current);
          isClickOutside = true;
          return;
        }
      });
      console.log('a', isClickOutside);
      event.stopPropagation();
      if (!isClickOutside) handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      if (!active) return;
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, active]);
};
