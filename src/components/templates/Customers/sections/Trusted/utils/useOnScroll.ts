import { RefObject, useEffect, useState } from "react";

const useOnScroll = (containerRef: RefObject<HTMLUListElement | null>) => {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd]   = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const { scrollLeft, clientWidth, scrollWidth } = el;
      setAtStart(scrollLeft <= 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
    };

    el.addEventListener('scroll', onScroll);
    onScroll();

    return () => el.removeEventListener('scroll', onScroll);
  }, [containerRef]);

  return { atStart, atEnd };
}

export { useOnScroll }