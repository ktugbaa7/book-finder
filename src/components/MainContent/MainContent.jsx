import React from "react";
import BookCard from "../BookCard/BookCard";
import { Container, Grid } from "@mui/material";
import { useBooks } from "../../context/BooksContext";

function MainContent() {
  const { bookData } = useBooks();

  return (
    <main>
      <div className="books-list">
        {bookData.length > 0 && (
          <h2 className="books-list--header">BOOKS</h2>
        )}
        <div className="books-list--list">
          <Container>
            <Grid container spacing={3}>
              {bookData.map((item) => (
                <Grid item sx={{ mt: 3 }} xs={12} sm={6} md={4} lg={3}>
                  <BookCard item={item} key={item.id} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>  
    </main>
  );
}

export default MainContent;
