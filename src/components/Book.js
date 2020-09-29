import React from "react";
import { useParams } from "react-router-dom";
import booksData from "../books.json";
import { Row, Col, Image } from "react-bootstrap";

const Book = () => {
  const { id } = useParams();
  const book = booksData.results.books[id - 1];
  const buyLinks = book.buy_links;
  const badgeClasses = [
    "is-dark",
    "is-primary",
    "is-success",
    "is-warning",
    "is-error",
  ];
  console.log(buyLinks);

  return (
    <React.Fragment>
      <Row>
        <Col lg={3}>
          <Image
            src={book.book_image}
            rounded
            style={{ width: "165px", height: "250px" }}
          ></Image>
        </Col>
        <Col lg={9}>
          <Row className="mt-3">
            <h4>{book.title}</h4>
            <p>By {book.author}</p>
          </Row>
          <Row>
            <p>{book.description}</p>
          </Row>
          <Row>
            {buyLinks.map((link) => {
              return (
                <span className="mr-1">
                  <a
                    href={link.url}
                    className="nes-badge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="is-dark badge-text">{link.name}</span>
                  </a>
                </span>
              );
            })}
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Book;
