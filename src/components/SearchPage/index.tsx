import TextField from '@mui/material/TextField';
import { useGetRepos } from 'hooks/index';

const SearchPage = () => {
  const { data } = useGetRepos();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  console.log('data', data);

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Name of repository"
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchPage;
