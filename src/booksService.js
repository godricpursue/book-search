import axios from "axios";
import { API_KEY } from "./env";

const getBooks = async (search) => {
  try {
    const {
      data: { items },
    } = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=40`
    );

    return items;
  } catch (err) {
    console.log(err);
  }
};

export default getBooks;
