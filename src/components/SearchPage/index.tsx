import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';

import { useSearchRepositories } from 'api/hooks';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { useDebounce } from 'hooks/index';

import RepositoriesList from 'components/SearchPage/components/RepositoriesList';

const INPUT_DEBOUNCE_TIME = 500;

const SearchPage = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, INPUT_DEBOUNCE_TIME);
  const { data, isLoading, isFetched, requestMore } = useSearchRepositories({
    query: debouncedValue,
  });

  useInfiniteScroll({ fetchData: requestMore, isLoading });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ padding: 2 }}
      >
        <Grid item sx={{ width: '100%' }}>
          <TextField
            id="outlined-basic"
            label="Name of repository"
            variant="outlined"
            onChange={handleChange}
            sx={{ width: '100%' }}
            placeholder='Type "react" to see the result'
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: 2 }}>
          <RepositoriesList
            repositories={data}
            isFetched={isFetched}
            isLoading={isLoading}
          />
          {isLoading && (
            <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
              <Grid item>
                <CircularProgress />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchPage;
