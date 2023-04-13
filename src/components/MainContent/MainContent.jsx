import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import BookCard from '../BookCard/BookCard'

function MainContent() {
  return (
    <main>
            <div className="main-head">
                <SearchBar />
            </div>
            <div>
                <div className="books-list">
                    
                        <BookCard
                            
                             />
                    
                </div>
            </div>
        </main>
  )
}

export default MainContent