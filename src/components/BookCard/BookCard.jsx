import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function BookCard({ item }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: "scroll"
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item>
      <Card
        sx={{
          width: "100%",
          height: 450,
          ":hover": {
            transition: "0.4s",
            color: "red",
            transform: "scale(1.02)",
          },
          boxShadow: 3,
          
          padding: 2,
        }}
      >
        <CardMedia
          sx={{ height: 250 }}
          image={
            item.volumeInfo.imageLinks 
              ? item.volumeInfo.imageLinks.thumbnail
              : require("../../assets/bookimg.jpg")
          }
          title="books"
        />
        <CardContent sx={{ height: 120 }}>
          <Typography gutterBottom variant="h5" noWrap sx={{ textOverflow: "ellipsis"}}>
            {item.volumeInfo.title}
          </Typography>
          <Typography variant="body2" noWrap color="text.secondary" sx={{ textOverflow: "ellipsis", paddingBottom: 2 }}>
            {item.volumeInfo.subtitle}
          </Typography>
          <Typography variant="body2" noWrap color="text.secondary" sx={{ textOverflow: "ellipsis"}}>
            {item.volumeInfo.authors}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small">PREVIEW</Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {item.volumeInfo.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.volumeInfo.subtitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Published Date : {item.volumeInfo.publishedDate}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Page Count : {item.volumeInfo.pageCount}
          </Typography >
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.volumeInfo.description}
          </Typography >
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link href={item.volumeInfo.previewLink}>Details</Link>
          </Typography >
          
        </Box>
      </Modal>
    </Grid>
  );
}

export default BookCard;
