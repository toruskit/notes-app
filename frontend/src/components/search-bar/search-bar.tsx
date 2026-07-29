import TextField from "@mui/material/TextField";
import { FC } from "react";

export const SearchBar: FC = () => {
  return (
    <TextField label="Search categories" fullWidth={true} sx={{ my: 3 }} />
  );
};
