import { useEffect } from 'react';

type UseInfiniteScrollProps = {
  fetchData: () => void;
  isLoading: boolean;
};

const useInfiniteScroll = ({
  fetchData,
  isLoading,
}: UseInfiniteScrollProps) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isLoading
      ) {
        return;
      }
      fetchData();
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchData, isLoading]);
};

export { useInfiniteScroll };
