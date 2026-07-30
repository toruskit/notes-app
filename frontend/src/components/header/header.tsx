import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Header = () => {
  return (
    <Box component="header" sx={{ mt: 3, py: 3 }}>
      <Typography variant="h1">Notes</Typography>
    </Box>
  );
};
