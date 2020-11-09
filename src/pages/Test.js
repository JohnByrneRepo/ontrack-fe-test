import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Constants from '../constants';
import BooksList from '../components/BooksList';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ books: [], count: 0 });

  async function fetchData(page) {
    const result = await axios.post('http://nyx.vima.ekt.gr:3000/api/books', {
      page: page ? page : parseInt(query.get('page')) || 1,
      itemsPerPage: 20,
      filters: JSON.parse(query.get('filters')) || [],
    });
    setLoading(false);
    setData(result.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const updateFilters = (searchText) => {
    if (searchText.length > 3) {
      const filters = JSON.stringify([{
        type: "all",
        values: [searchText]
      }]);

      document.location = `/books?page=1&itemsPerPage=${Constants.PAGE_SIZE}&filters=${filters}`
    }
  }
  
  return (
    <div>
      <Pagination page={query.get('page') || 1} count={data.count} filters={query.get('filters')} refresh={fetchData}/>
      <Search search={updateFilters}/>
      <BooksList data={data} loading={loading}/>
    </div>
  );
}

export default App;
