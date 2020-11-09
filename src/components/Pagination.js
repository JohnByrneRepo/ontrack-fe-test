import React from 'react';
import {Link} from 'react-router-dom';
import Constants from '../constants';

const Pagination = (props) => {
  const getPages = (pageNumber, count) => {
    const pageCount = Math.ceil(count / Constants.PAGE_SIZE);
    let start = pageNumber - 2;

    if (pageNumber < 3) {
      start = 1;
    }
    if (pageNumber > 5 && pageNumber > pageCount - 2) {
      start = pageCount - 4;
    }

    let ret = [];
    let end = start + 5;

    if (end > pageCount) {
      end = pageCount;
    }

    for (let i = start; i < end + 1; i++) {
      ret.push(i);
    } 
    return ret;
  }

  return (
    <div>
      {parseInt(props.page) !== 1 ? <li className="btn">
        <Link
          to={`/books?page=1&itemsPerPage=${Constants.PAGE_SIZE}&filters=${props.filters}`}
          onClick={() => props.refresh(1)}>
          First
        </Link>
      </li> : <li className="btn disabled">First</li>}
      {parseInt(props.page) > 1 ? <li className="btn">
        <Link
          to={`/books?page=${parseInt(props.page) - 1}&itemsPerPage=${Constants.PAGE_SIZE}&filters=${props.filters}`}
          onClick={() => props.refresh(parseInt(props.page) - 1)}>
          Prev
        </Link>
      </li> : <li className="btn disabled">Prev</li>}
      {getPages(parseInt(props.page), parseInt(props.count)).map(page =>
        <li key={page} className={`btn ${props.page === page.toString() ? 'btn-primary' : ''}`}>
        <Link
          to={`/books?page=${page}&itemsPerPage=${Constants.PAGE_SIZE}&filters=${props.filters}`}
          onClick={() => props.refresh(page)}>
          {page}
        </Link>
        </li>
      )}
      {parseInt(props.page) < Math.ceil(props.count / Constants.PAGE_SIZE) ? <li className="btn">
        <Link
          to={`/books?page=${parseInt(props.page) + 1}&itemsPerPage=${Constants.PAGE_SIZE}&filters=${props.filters}`}
          onClick={() => props.refresh(parseInt(props.page) + 1)}>
          Next
        </Link>
      </li> : <li className="btn disabled">Next</li>}
      {parseInt(props.page) !== Math.ceil(props.count / Constants.PAGE_SIZE) ? <li className="btn">
        <Link
          to={`/books?page=${Math.ceil(props.count / Constants.PAGE_SIZE)}&itemsPerPage=${Constants.PAGE_SIZE}&filters=${props.filters}`}
          onClick={() => props.refresh(Math.ceil(props.count / Constants.PAGE_SIZE))}>
          Last
        </Link>
      </li> : <li className="btn disabled">Last</li>}
    </div>
  );
}

export default Pagination;
