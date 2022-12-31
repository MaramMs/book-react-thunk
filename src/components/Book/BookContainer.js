import React, { useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BookList from "./BookList";
import { getBooks, deleteBook } from "../../store/bookSlice";

import "./book.css";
import { useDispatch, useSelector } from "react-redux";

function BookContainer() {
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.books);
  const { isloggedIn } = useSelector((state) => state.auth);
  const [selectedBook, setSelectedBook] = useState({});
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getBook = (id) => {
    const selectedBook = books.find((item) => item.id === id);
    setSelectedBook((...prev) => {
      return { ...prev, ...selectedBook };
    });
  };
  return (
    <>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BookList
            isLoading={isLoading}
            books={books}
            isloggedIn={isloggedIn}
            deleteBook={deleteBook}
            dispatch={dispatch}
            getBook={getBook}
          />
        </div>
        <div className="col side-line">
          <BookInfo selectedBook={selectedBook} />
        </div>
      </div>
    </>
  );
}

export default BookContainer;
