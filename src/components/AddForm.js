import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "../store/bookSlice";

function AddForm() {
  const title = useRef();
  const des = useRef();
  const price = useRef();
  const dispatch = useDispatch();
  const {isloggedIn} = useSelector(state => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      des: des.current.value,
    };
    dispatch(insertBook(data));
  };
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2> Insert a Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              ref={title}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              ref={price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              ref={des}
              className="form-control"
              id="Description"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={!isloggedIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
