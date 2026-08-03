import TextField from "@mui/material/TextField";

export const SearchBar = () => {
  return (
    <TextField
      label="Search categories"
      fullWidth={true}
      size="small"
      sx={{ my: 3 }}
    />
  );
};
