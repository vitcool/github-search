import { useEffect } from 'react';

type UseInfiniteScrollProps = {
  fetchData: () => void;
  isLoading: boolean;
};

const THRESHOLD = 100;

const useInfiniteScroll = ({
  fetchData,
  isLoading,
}: UseInfiniteScrollProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom =
        document.documentElement.scrollHeight -
          (document.documentElement.scrollTop + window.innerHeight) <=
        THRESHOLD;

      if (isScrolledToBottom && !isLoading) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchData, isLoading]);
};

export { useInfiniteScroll };
