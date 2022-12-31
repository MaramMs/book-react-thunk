import React from "react";

function BookList({ isLoading, books, isloggedIn, dispatch, deleteBook,getBook }) {
  const booksList =
    books.length > 0
      ? books.map((item) => (
          <li
            className="list-group-item d-flex  justify-content-between align-items-center"
            key={item.id}
          >
            <div>{item.title}</div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary" onClick={()=>getBook(item.id)}>
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                disabled={!isloggedIn}
                onClick={() =>
                  dispatch(
                    deleteBook(item)
                )
                .unwrap()
                .then((originalPromiseResult) => {
                  // handle result here
                  console.log(originalPromiseResult);
                })
                .catch((rejectedValueOrSerializedError) => {
                  // handle error here
                })
                }
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "there is no books now";
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "loading..." : <ul className="list-group">{booksList}</ul>}
    </div>
  );
}

export default BookList;
