import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import { CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import img from "../../assets/bookimg.jpg";

function BookDetails() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#ffff", m: 3 }}>
          <Grid
            container
            sx={{ p: 4 }}
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 6, md: 12 }}
          >
            <Grid item xs={6}>
              <CardMedia image={img} sx={{ height: 500, maxWidth: "auto" }} />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ m: 2 }} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica,
                kljfdk slkdjflsjd kfjsdkfjksd kfjsdkfjksdl kljskdfjsdk
                skdjfksdjf ksdjfksd.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default BookDetails;
