import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;
  
  const getBookData = async () => {

    try {
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`)
      .then((res) => {
        console.log(res.data.items)
        setBookData(res.data.items);
      })
    } catch(error) {
      console.log(error);
    }
  };
  console.log(bookData);


  useEffect(() => {
    getBookData();
  }, [])
 

  const values = {
    search,
    setSearch,
    bookData,
    setBookData,
    getBookData,
  };
  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
