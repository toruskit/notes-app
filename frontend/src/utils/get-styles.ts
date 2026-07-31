import type { SxProps, Theme } from "@mui/material/styles";

export const getStyles = <T extends Record<string, SxProps<Theme>>>(styles: T) => {
  return styles;
}