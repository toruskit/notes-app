import { Controller, useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import type { Styles } from "src/types/types";
import Stack from "@mui/material/Stack";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { options } from "src/constants/contstants";
import { noteSchema } from "src/schemas/note.schema";

export interface NoteAddFormProps {
  formId: string;
}

export type NoteFormData = z.infer<typeof noteSchema>;

export const NoteAddForm = ({ formId }: NoteAddFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: "",
      description: "",
      category: [],
    },
  });

  const onSubmit = (data: NoteFormData) => {
    console.log(data);
  };

  return (
    <Stack
      spacing={2}
      component="form"
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 2 }}
    >
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Title"
            size="small"
            error={!!errors.title}
            helperText={errors.title?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Description"
            size="small"
            error={!!errors.description}
            helperText={errors.description?.message}
            multiline
            rows={4}
          />
        )}
      />

      <Controller
        name="category"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Autocomplete
            multiple
            options={options}
            value={value || []}
            onChange={(_, newValue) => onChange(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                label="Category"
                error={!!errors.category}
                helperText={errors.category?.message}
              />
            )}
            sx={styles.autocomplete}
          />
        )}
      />
    </Stack>
  );
};

const styles: Styles = {
  autocomplete: {
    ".MuiChip-root": {
      m: 0,
      mx: 0.2,
      height: "28px",
    },
  },
};
