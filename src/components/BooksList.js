import React from "react";
import { Container } from "react-bootstrap";

import booksData from "../books.json";

const BooksList = () => {
  const booksObj = booksData.results.books;

  return (
    <React.Fragment>
      <Container>
        <h1>BooksList</h1>
        {booksObj.map((book) => {
          return (
            <h2 key={book.rank}>
              {book.rank}: {book.title}
            </h2>
          );
        })}
        {/* <button type="button" className="nes-btn is-primary">
          Button
        </button> */}
      </Container>
    </React.Fragment>
  );
};

export default BooksList;
