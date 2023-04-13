import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../assets/bookimg.jpg";

function BookCard() {
  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 350,
        ":hover": {
          transition: "0.4s",
          color: "red",
        },
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <CardMedia sx={{ height: 250 }} image={img} title="books" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Javascript
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Kitap ismi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Kitap yazarı
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
