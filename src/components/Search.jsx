import React, { useState } from "react";
import { useBook } from "../context/BookContext";

function Search() {
  const { setSearch } = useBook();
  const [input, setInput] = useState("");
  const searchIconSVG = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M17 17L21 21"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#ffffff"
          strokeWidth="2"
        ></path>{" "}
      </g>
    </svg>
  );

  const submitForm = (e) => {
    e.preventDefault();
    if (input === "") {
      return false;
    }
    setSearch(input);
    setInput("");
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="flex flex-row justify-center items-center space-x-2">
        <input
          className="text-xl font-light shadow-xl px-2 py-1 rounded-xl focus:outline-none capitalize"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="h-6 w-6">{searchIconSVG}</button>
      </div>
    </form>
  );
}

export default Search;
