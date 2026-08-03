import { Controller, useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import type { Styles } from "src/types/types";
import Stack from "@mui/material/Stack";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { colors, options } from "src/constants/constants";
import { noteSchema } from "src/schemas/note.schema";
import {
  useAddNoteMutation,
  useGetNotesQuery,
  useUpdateNoteMutation,
} from "src/api/notes-api";
import { checkArray } from "src/utils/check-array";

export type NoteFormData = z.infer<typeof noteSchema>;

interface NoteDialogFormProps {
  onSuccess: () => void;
  activeNoteId: string | null;
}

export const NoteDialogForm = ({
  onSuccess,
  activeNoteId,
}: NoteDialogFormProps) => {
  const { existingNote } = useGetNotesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      existingNote: data?.find((note) => note.id === activeNoteId),
    }),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
    values: {
      title: existingNote?.title || "",
      description: existingNote?.description || "",
      category: checkArray(existingNote?.category) || [],
    },
  });

  const [addNote, { isLoading: isAdding }] = useAddNoteMutation();
  const [updateNote, { isLoading: isUpdating }] = useUpdateNoteMutation();

  const onSubmit = async (data: NoteFormData) => {
    try {
      if (activeNoteId) {
        await updateNote({
          id: activeNoteId,
          title: data.title,
          description: data.description,
          category: data.category,
        });
      } else {
        await addNote({
          title: data.title,
          description: data.description,
          category: data.category,
          color: [
            colors[Math.floor(Math.random() * colors.length - 1)],
          ].toString(),
          createdAt: new Date().toISOString(),
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error while saving note:", error);
    }
  };

  return (
    <Stack
      spacing={2}
      component="form"
      id="note-add-form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 2 }}
    >
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Title*"
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
            label="Description*"
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
                label="Category*"
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
