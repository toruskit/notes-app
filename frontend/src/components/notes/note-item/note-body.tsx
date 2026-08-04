import CardContent from "@mui/material/CardContent";
import type { Styles } from "../../../types/types";

export interface NoteBodyProps {
  description?: string;
}

export const NoteBody = ({ description }: NoteBodyProps) => {
  return <CardContent sx={styles.container}>{description}</CardContent>;
};

const styles: Styles = {
  container: {
    p: 0,
    lineHeight: 1.4,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
};
