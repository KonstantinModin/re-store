import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';


import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import './book-list.css';
import compose from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({ books }) => {
    return (
        <ul className="book-list">
            {
                books.map(( book ) => {
                    return (
                        <li key={book.id}><BookListItem book={book}/></li>
                    );
                })
            }
        </ul>
    );
};
class BookListContainer extends Component {

    componentDidMount() {  
        this.props.fetchBooks();       
    }

    render() {
        const { books, loading, error } = this.props;
        if (loading) return <Spinner />;
        if (error) return <ErrorIndicator error={error} />;
        return <BookList books={books}/>
    };
};

const mapStateToProps = ( { books, loading, error }) => {    //state передаёт через пропс
    return { books, loading, error };
};


const mapDispatchToProps = (dispatch, { bookstoreService } ) => {   // передать события в пропс, предварительно импортировать
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
};
export default compose(
                    withBookstoreService(),
                    connect(mapStateToProps, mapDispatchToProps)
                    )(BookListContainer);