import CardHeader from "@mui/material/CardHeader";
import { SxProps, Theme } from "@mui/material/styles";

export interface NoteHeaderProps {
  title?: string;
}

export const NoteHeader = ({ title }: NoteHeaderProps) => {
  return (
    <CardHeader title={title} disableTypography={true} sx={styles.title} />
  );
};

const styles: Record<string, SxProps<Theme>> = {
  title: { fontSize: "1rem", fontWeight: 600, p: 0 },
};
