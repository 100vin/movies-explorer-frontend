import { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState(document.documentElement.clientWidth);
  
  useLayoutEffect(() => {
    let timeOutId = null;

    function updateSize() {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => setSize(document.documentElement.clientWidth), 100);
    }

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}

export default useWindowSize;
