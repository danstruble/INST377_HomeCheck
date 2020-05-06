import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Search = () => (
  <div className = 'search-box'>
    <input className='search-txt' type='text' name="" placeholder='Type to search'>
    </input>
    <a className='search-btn' href="#">
      <FontAwesomeIcon icon="fa-search" />
    </a>
  </div>
);

export default Search;