import axios from "axios";

const getBooks = async (search) => {
  try {
    const {
      data: { items },
    } = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}&maxResults=40`
    );

    return items;
  } catch (err) {
    console.log(err);
  }
};

export default getBooks;
