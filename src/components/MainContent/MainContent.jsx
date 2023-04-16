import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import BookCard from "../BookCard/BookCard";
import { Grid } from "@mui/material";
import { useBooks } from "../../context/BooksContext";

function MainContent() {
  const { bookData } = useBooks();

  return (
    <main>
      <div className="main-head">
        <SearchBar />
      </div>

      <div className="books-list">
        {bookData.length > 0 && <h2 className="book-list--header">Kitaplar</h2>}
        <div className="books-list--list">
          <Grid>
            <Grid
              container
              item
              xs={12}
              alignItems="center"
              justify="center"
              flexWrap="wrap"
            >
              <Grid container item sm={6} lg={3}>
                <Grid container item lg={12} >
                  {bookData.map((item) => (
                    <BookCard item={item} key={item.id} />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
