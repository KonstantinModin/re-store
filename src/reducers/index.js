const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 280
    
};

const updateCartItems = (cartItems, idx, item) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),          
            ...cartItems.slice(idx + 1)
        ];
    }    
    
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (book, item = {}, q = 1) => {
    const { id = book.id, 
        count = 0, 
        title = book.title } = item; 

    return {
        id,
        title,
        count: count + q,
        total: book.price * (count + q)
    };
};

const updateOrder = (state, bookId, quantity) => {
    const { books, cartItems } = state;
    
    const book = books.find(({ id }) => id === bookId);
    const itemIndex = cartItems.findIndex(({ id })=> id === bookId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(book, item, quantity);
    
    return {           
        ...state,
        cartItems: updateCartItems(cartItems, itemIndex, newItem)                
    };
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        
        case 'BOOK_DECREASED':
            return updateOrder(state, action.payload, -1);

        case 'BOOK_DELETED':                   
            const item = state.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);      
        
        default: 
            return state;
    }
};

export default reducer;