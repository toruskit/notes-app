import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { categories } from "src/constants/constants";
import { setActiveCategories } from "src/store/notes-slice";

interface SearchBarFormData {
  activeCategories: string[];
}

export const SearchBar = () => {
  const { control } = useForm<SearchBarFormData>({
    values: {
      activeCategories: [],
    },
  });

  const dispatch = useDispatch();

  // Set selected categories as active for filtering
  const handleOnChange = (data: string[]) => {
    dispatch(setActiveCategories(data));

    return data;
  };

  return (
    <Controller
      name="activeCategories"
      control={control}
      render={({ field: { value, onChange } }) => (
        <Autocomplete
          multiple
          options={categories}
          sx={{ my: 3 }}
          value={value || []}
          onChange={(_, newValue) => onChange(handleOnChange(newValue))}
          renderInput={(params) => (
            <TextField {...params} size="small" label="Search Categories" />
          )}
        />
      )}
    />
  );
};
