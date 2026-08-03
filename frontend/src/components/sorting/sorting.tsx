import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useDispatch } from "react-redux";
import { setSorting } from "src/store/notes-slice";
import type { Styles } from "src/types/types";

export const Sorting = () => {
  const dispatch = useDispatch();

  const handleSorting = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSorting(event.target.value));
  };

  return (
    <FormControl sx={styles.container}>
      <FormLabel>Sort by date:</FormLabel>
      <RadioGroup
        row
        defaultValue="ascending"
        name="sorting-radios"
        onChange={(event) => handleSorting(event)}
      >
        <FormControlLabel
          value="ascending"
          control={<Radio />}
          label="Newest"
        />
        <FormControlLabel
          value="descending"
          control={<Radio />}
          label="Oldest"
        />
      </RadioGroup>
    </FormControl>
  );
};

const styles: Styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    mb: 3,
  },
};
