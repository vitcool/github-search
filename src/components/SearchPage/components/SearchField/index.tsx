import TextField from '@mui/material/TextField';

type SearchFieldProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchField = ({ onChange }: SearchFieldProps) => {
  return (
    <TextField
      id="outlined-basic"
      label="Name of repository"
      variant="outlined"
      sx={{ width: '100%' }}
      placeholder="Type repository name to see the result"
      onChange={onChange}
    />
  );
};

export default SearchField;
