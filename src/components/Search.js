import React, { useRef } from 'react';

const Search = (props) => {
  const searchForm = useRef(null)
  return (
    <ul className="search-container">
      <li class="search-form-list search-form-offset">
        <label>Search:</label>
      </li>
      <li class="search-form-list">
        <form ref={searchForm}>
          <input name={'search'} className="search"/>
        </form>
      </li>
      <li class="search-form-list search-form-offset">
        <button className="btn btn-primary" onClick={() => {
          return props.search(searchForm.current['search'].value)
        }}>
          Submit
        </button>
      </li>
    </ul>
  );
}

export default Search;
