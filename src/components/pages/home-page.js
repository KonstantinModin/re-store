import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    return (
        <div>
            Home Page
            <BookList books={[
                {id:1, title: 'War and Peace', author: 'L.Tolstoy'},
                {id:2, title: 'Eugene Onegin', author: 'A.Pushkin'}
            ]} />
        </div>
    );
};

export default HomePage;