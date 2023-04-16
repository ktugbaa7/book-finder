import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function BookCard( { item } ) {
  
  return (
    <Card
      sx={{
        width: 500,
        ":hover": {
          transition: "0.4s",
          color: "red",
          transform: "scale(1.02)",
        },
        boxShadow: 3,
        borderRadius: 3,
        padding: 2,
        margin: 3,
        border: 1,
        borderColor: "rgb(197, 107, 122)",
        
      }}
    >
      <CardMedia sx={{ height: 250, borderRadius: 3 }}
       image={item.volumeInfo.imageLinks // ???????
              ? item.volumeInfo.imageLinks.thumbnail
              : require("../../assets/bookimg.jpg")} title="books" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.volumeInfo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.volumeInfo.subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.volumeInfo.authors}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
