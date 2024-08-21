import React from 'react';
import '../index.css'; 

const SearchBar = ({ onSearchTermChange }) => {
  const handleSearchTermChange = (e) => {
    onSearchTermChange(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearchTermChange}
      />
    </div>
  );
};

export default SearchBar;
