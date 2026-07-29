import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

export const NoteItem = () => {
  return (
    <Card>
      <CardHeader
        title="Note title"
        disableTypography={true}
        sx={{ fontSize: "1rem", fontWeight: 500 }}
      />
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </CardContent>
      <CardActions>10.5.2026</CardActions>
    </Card>
  );
};
