import { useCallback, useState } from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';

import { useSearchRepositories } from 'api/hooks';

import { useDebounce } from 'hooks/index';

import RepositoriesList from 'components/SearchPage/components/RepositoriesList';
import Observer from 'components/IntersectionObserver';

const INPUT_DEBOUNCE_TIME = 500;

const SearchPage = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, INPUT_DEBOUNCE_TIME);
  const { data, isLoading, cursor, isFetched, fetchMore } =
    useSearchRepositories({
      query: debouncedValue,
    });

  const requestMore = useCallback(() => {
    console.log('cursor', cursor);
    fetchMore({
      variables: {
        after: cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEntries = fetchMoreResult?.search?.nodes || [];
        console.log(fetchMoreResult?.search);
        return {
          search: {
            edges: fetchMoreResult.search.edges,
            repositoryCount: fetchMoreResult.search.repositoryCount,
            nodes: [...previousResult.search.nodes, ...newEntries],
          },
        };
      },
    });
  }, [cursor, fetchMore]);

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
            label="Enter the name of repository"
            variant="outlined"
            onChange={handleChange}
            sx={{ width: '100%' }}
            placeholder='Type "react" to see the result'
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: 2 }}>
          {isLoading ? (
            <Grid container justifyContent="center">
              <Grid item>
                <CircularProgress />
              </Grid>
            </Grid>
          ) : (
            <RepositoriesList repositories={data} isFetched={isFetched} />
          )}
        </Grid>
      </Grid>
      <Observer fetchData={requestMore} />
    </Container>
  );
};

export default SearchPage;
