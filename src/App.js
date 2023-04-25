import "./App.css";
import Search from "./components/Search";
import Books from "./components/Books";
import { useBook } from "./context/BookContext";
import getBooks from "./booksService";
import { useEffect, useState } from "react";

function App() {
  const { search, booksArray, setBooksArray } = useBook();
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async (search) => {
    setBooksArray([]);
    setIsLoading(true);
    const books = await getBooks(search);
    setBooksArray((prev) => [...prev, ...books]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (search.length > 0) {
      handleFetch(search);
    }
  }, [search]);

  return (
    <>
      <div className="flex flex-col h-80 justify-center items-center bg-slate-600 w-full">
        <h1 className=" text-2xl mb-6 text-white">Book Search using React</h1>
        <Search />
      </div>
      <div className="container">
        {isLoading ? <p>Loading... </p> : <Books />}
      </div>
    </>
  );
}

export default App;
