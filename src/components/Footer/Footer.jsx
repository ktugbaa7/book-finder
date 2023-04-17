import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        margin: "auto",
        
        backgroundColor: "#b9b9b9ab",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        marginBottom: "100px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Book Finder
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router | SCSS | Book API`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              Copyright ©2023
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
