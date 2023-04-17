import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import { BooksProvider } from "./context/BooksContext";

function App() {
  

  return (
    <BooksProvider>
      <React.Fragment>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="content-wrap">
                  <MainContent
                   />
                </div>
              }
            />
            {/* <Route path="/details" element={<BookDetails />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.Fragment>
    </BooksProvider>
    
  );
}

export default App;
