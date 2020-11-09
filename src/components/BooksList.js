import React, { Fragment } from 'react';

function BooksList(props) {
  return (
    <Fragment>
      {props.loading ? <div>Loading...</div> :
      <div>
        {props.data.books.map(item => (
          <div className="book" key={item.id}>
            <div className="title">{item.book_title}</div>
            <div className="info">Author: {item.book_author}</div>
            <div className="info">City: {item.book_publication_city}</div>
            <div className="info">Country: {item.book_publication_country}</div>
            <div className="info">Year: {item.book_publication_year}</div>
            <div className="info">Pages: {item.book_pages}</div>
          </div>
        ))}
      </div>}
    </Fragment>
  );
}

export default BooksList;
