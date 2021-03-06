import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import booksData from "../books.json";
import { Link } from "react-router-dom";

const BooksList = () => {
  const booksObj = booksData.results.books;
  const booksObjtop10 = booksObj.slice(0, 10);

  return (
    <React.Fragment>
      
      <section className="message-list">
          
          <section className="message -left">
            <i className="nes-mario"></i>
            <div className="nes-balloon from-left">
              <p>Top 10 books</p>
            </div>
          </section>

        </section>
     
    
      {booksObjtop10.map((book) => {
        return (
          <Link
            key={book.rank}
            to={`/${book.rank}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="books">
              <Row>
                <Col xs={12} md={4} lg={4}>
                  <Image
                    className="img"
                    src={book.book_image}
                    rounded
                    style={{ width: "165px", height: "250px" }}
                  />
                </Col>
                <Col xs={12} md={8} lg={8} className="mt-3">
                  <h4 key={book.rank}>
                    {book.rank}: {book.title}
                  </h4>
                  <p>By {book.author}</p>
                </Col>
              </Row>
            </div>
          </Link>
        );
      })}
    </React.Fragment>
  );
};

export default BooksList;
