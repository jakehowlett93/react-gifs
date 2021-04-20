import React from 'react';

const Search = (props) => {
  const { searchGifs } = props;
  const handleSearch = (event) => {
    searchGifs(event.target.value);
  };

  return (
    <input type="text" className="form-search" onChange={handleSearch} />
  );
};

export default Search;
