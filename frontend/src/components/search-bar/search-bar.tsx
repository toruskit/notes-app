import TextField from "@mui/material/TextField";

export const SearchBar = () => {
  return (
    <TextField
      label="Search categories"
      fullWidth={true}
      size="small"
      sx={{ mt: 3, mb: 6 }}
    />
  );
};
