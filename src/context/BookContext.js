import { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [search, setSearch] = useState("dune");
  const [booksArray, setBooksArray] = useState([]);

  const values = {
    search,
    setSearch,
    booksArray,
    setBooksArray,
  };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

export const useBook = () => useContext(BookContext);
