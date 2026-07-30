import CardContent from "@mui/material/CardContent";
import { SxProps, Theme } from "@mui/material/styles";

export interface NoteBodyProps {
  description?: string;
}

export const NoteBody = ({ description }: NoteBodyProps) => {
  return <CardContent sx={styles.container}>{description}</CardContent>;
};

const styles: Record<string, SxProps<Theme>> = {
  container: {
    p: 0,
  },
};
