import React from 'react';

const SearchBox = ({ SearchChange }) => {
  return (
    <div className="pa2">
      <input
        type='search'
        className='pa3 ba bg-lightest-blue b--green'
        placeholder='Search Robot'
        onChange={SearchChange}
      />
    </div>
  );
}

export default SearchBox;