import CardHeader from "@mui/material/CardHeader";
import type { Styles } from "../../../types/types";

export interface NoteHeaderProps {
  title?: string;
}

export const NoteHeader = ({ title }: NoteHeaderProps) => {
  return (
    <CardHeader title={title} disableTypography={true} sx={styles.title} />
  );
};

const styles: Styles = {
  title: { fontSize: "1rem", fontWeight: 600, p: 0 },
};
