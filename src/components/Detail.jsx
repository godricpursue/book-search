import React from "react";
import { useBook } from "../context/BookContext";

function Detail({ index, toggleModal }) {
  const { booksArray } = useBook();

  const cancelSVG = (
    <svg
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>cancel</title>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <g
            id="work-case"
            fill="#474747"
            transform="translate(91.520000, 91.520000)"
          >
            {" "}
            <polygon
              id="Close"
              points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
            >
              {" "}
            </polygon>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
  const {
    volumeInfo: {
      authors,
      categories,
      description,
      title,
      imageLinks: { thumbnail },
    },
  } = booksArray[index];

  return (
    <>
      <div className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/2 h-1/2 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative w-full h-96 p-6 flex">
              <div className="absolute right-4 top-4">
                <button onClick={() => toggleModal(index)} className=" w-6 h-6">
                  {cancelSVG}
                </button>
              </div>
              <div className="absolute h-72 w-56 left-10 top-14 ">
                <img className=" object-cover h-full" src={thumbnail} alt="" />
              </div>
              <div className="absolute right-10 top-16 w-1/2 h-20 bg-black-100 bg-opacity-20">
                <h1 className=" px-5 text-black-500 font-semibold text-base">
                  {title}
                </h1>
                <h2 className=" px-5 text-black-500 font-normal text-sm">
                  {authors.map((name, i) => `${i > 0 ? "," : ""} ${name}`)}
                </h2>
                <h3 className=" px-5 font-light text-black-300 text-xs">
                  {categories.map((name, i) => `${i > 0 ? "," : ""} ${name}`)}
                </h3>
              </div>
              <div className="absolute right-10 bottom-8 w-1/2 h-44 overflow-x-hidden overflow-y-auto bg-slate-200 bg-opacity-40 rounded">
                <p className=" px-5 my-2 text-black-500  text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Detail;
