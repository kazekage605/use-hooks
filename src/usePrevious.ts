import { useEffect, useRef } from 'react';

const usePrevious = <T>(value: T) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
