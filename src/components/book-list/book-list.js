import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';


import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import './book-list.css';
import compose from '../../utils';

class BookList extends Component {

    componentDidMount() {  
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul>
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

const mapStateToProps = ( state) => {    
    return { books: state.books };
};
console.log(compose);
const mapDispatchToProps = {
    booksLoaded
};
export default compose(
                    withBookstoreService(),
                    connect(mapStateToProps, mapDispatchToProps))
                    (BookList);