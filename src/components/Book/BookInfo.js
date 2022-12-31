import React from "react";

function BookInfo({selectedBook}) {
  return (
    <>
      <h2>Book Details</h2>
      {
        Object.keys(selectedBook).length > 0 ?
        (
          <div>
          <p>Title:{selectedBook.title}</p>
          <p>Inserted By:{selectedBook.userName}</p>
          <p>Price:{selectedBook.price}</p>
          <p>Des:{selectedBook.des}</p>
        </div>
 
        ) : (
          <div className="alert alert-secondary" role="alert">
          There is no book selected yet. Please select!
        </div>
        )
      }
      </>
 
  
  );
}

export default BookInfo;
