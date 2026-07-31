import Box from "@mui/material/Box";
import { getStyles } from "src/utils/get-styles";

export const NoteBg = ({ color }: { color: string | undefined }) => {
  return <Box sx={{ backgroundColor: color, ...styles.bg }}></Box>;
};

const styles = getStyles({
  bg: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.4,
  },
});
