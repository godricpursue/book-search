import React, { useState } from "react";
import { useBook } from "../context/BookContext";
import Detail from "./Detail";

function Books() {
  const { booksArray } = useBook();
  const [modal, setModal] = useState(false);

  const toggleModal = (index) => {
    setModal({ open: !modal.open, index });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center py-10">
        {booksArray &&
          booksArray.length > 0 &&
          booksArray.map((book, index) => {
            let thumbnail =
              book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.thumbnail;
            let title = book.volumeInfo.title;
            let authors = book.volumeInfo.authors;
            let preview = book.volumeInfo.previewLink;
            if (
              thumbnail !== undefined &&
              title !== undefined &&
              authors !== undefined
            ) {
              return (
                <div
                  key={index}
                  className="m-10 flex flex-col justify-center items-center w-80"
                >
                  <div className="  h-80 w-56  ">
                    <img
                      className=" object-cover h-full"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-row justify-center items-center divide-x-2 p-2 text-xs">
                    <a
                      href={preview}
                      target="_blank"
                      className="px-2 hover:underline"
                    >
                      Preview
                    </a>
                    <button
                      onClick={() => toggleModal(index)}
                      href=""
                      className="px-2 hover:underline"
                    >
                      Details
                    </button>
                    {modal.open && (
                      <Detail index={modal.index} toggleModal={toggleModal} />
                    )}
                  </div>
                  <div className=" divide-y-2 uppercase text-center text-sm">
                    <p>{title}</p>
                    <p className=" break-words">
                      {authors.map((name, i) => `${i > 0 ? "," : ""} ${name}`)}
                    </p>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </>
  );
}

export default Books;
