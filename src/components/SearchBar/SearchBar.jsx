import React from 'react'

function SearchBar() {
  return (
    <div className='searchBar'>
        <form className='form'>
            <input className='searchInput' type="search" placeholder='Search for a book...' />
            <button className='searchButton'>Ara</button>
        </form>
    </div>
  )
}

export default SearchBar