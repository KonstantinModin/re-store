import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';


import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import './book-list.css';
import compose from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class BookList extends Component {

    componentDidMount() {  
        this.props.fetchBooks();       
    }

    render() {
        const { books, loading, error } = this.props;
        if (loading) return <Spinner />;
        if (error) return <ErrorIndicator error={error} />;
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
};


const mapStateToProps = ( { books, loading, error }) => {    //state передаёт через пропс
    return { books, loading, error };
};


const mapDispatchToProps = (dispatch, ownProps) => {   // передать события в пропс, предварительно импортировать
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: () => {            
            dispatch(booksRequested());
            bookstoreService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((error) => dispatch(booksError(error))); 
        }
    }
};
export default compose(
                    withBookstoreService(),
                    connect(mapStateToProps, mapDispatchToProps)
                    )(BookList);