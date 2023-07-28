import { useState } from 'react';

import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import { useDebounce, useInfiniteScroll } from 'hooks/index';
import { useSearchRepositories } from 'api/hooks';

import SearchField from 'components/SearchPage/components/SearchField';
import SearchResults from 'components/SearchPage/components/SearchResults';

const INPUT_DEBOUNCE_TIME = 500;

const SearchPage = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, INPUT_DEBOUNCE_TIME);
  const { data, isFetched, isLoading, requestNextPage } = useSearchRepositories({
    query: debouncedValue,
  });

  useInfiniteScroll({ fetchData: requestNextPage, isLoading });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ p: 2 }}>
      <Grid item sx={{ width: '100%' }}>
        <SearchField onChange={handleChange} />
      </Grid>

      <Grid item xs={12} sx={{ pt: 2 }}>
        <SearchResults
          repositories={data}
          isFetched={isFetched}
          isLoading={isLoading}
        />

        {isLoading && (
          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default SearchPage;
