import { useEffect, useRef } from 'react';

type ObserverProps = {
  fetchData: () => void;
}

const Observer = ({ fetchData }: ObserverProps) => {
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      },
      { threshold: 1 }
    );

    const observerTargetCurrent = observerTarget.current;

    if (observerTargetCurrent) {
      observer.observe(observerTargetCurrent);
    }

    return () => {
      if (observerTargetCurrent) {
        observer.unobserve(observerTargetCurrent);
      }
    };
  }, [observerTarget, fetchData]);

  return <div ref={observerTarget} />;
};

export default Observer;
