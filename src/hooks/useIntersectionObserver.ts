import { useEffect, useState } from 'react';

interface Props extends IntersectionObserverInit {
  onIntersect: IntersectionObserverCallback;
  triggerOnce?: boolean;
}

const DEFAULT_THRESHOLD = 1.0;

export const useIntersectionObserver = ({
  root,
  rootMargin = '0px',
  threshold = DEFAULT_THRESHOLD,
  onIntersect,
  triggerOnce = false,
}: Props) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) {
      return;
    }

    let observer: IntersectionObserver;
    if (triggerOnce) {
      observer = new IntersectionObserver(onIntersectOnce(onIntersect, triggerOnce, target), {
        root,
        rootMargin,
        threshold,
      });
    } else {
      observer = new IntersectionObserver(onIntersect, { root, rootMargin, threshold });
    }

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [root, rootMargin, onIntersect, threshold, target, triggerOnce]);

  return [setTarget];
};

const onIntersectOnce = (
  callback: IntersectionObserverCallback,
  triggerOnce: boolean,
  target: HTMLElement
) => {
  return (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    callback(entries, observer);

    if (target && triggerOnce && Boolean(entries?.some((entry) => entry.isIntersecting))) {
      observer.unobserve(target);
    }
  };
};
