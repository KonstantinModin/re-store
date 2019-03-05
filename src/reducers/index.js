const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 280
    
};

const updateCartItems = (cartItems, idx, item) => {
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

const updateCartItem = (book, item = {}, act = 1) => {
    const { id = book.id, 
        count = 0, 
        title = book.title } = item; 

    return {
        id,
        title,
        count: count + act,
        total: book.price * (count + act)
    };
};


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
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const itemIndex = state.cartItems.findIndex(({ id })=> id === bookId);
            const item = state.cartItems[itemIndex];
            const newItem = updateCartItem(book, item);
          
            return {           
                ...state,
                cartItems: updateCartItems(state.cartItems, itemIndex, newItem)                
            };
        
        case 'BOOK_DECREASED':
            {const bookId = action.payload;  
            const book = state.books.find((book) => book.id === bookId);          
            const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
            const item = state.cartItems[itemIndex];

            const newItem = updateCartItem(book, item, -1);
        
            return {           
                ...state,
                cartItems: updateCartItems(state.cartItems, itemIndex, newItem)                
            };}


        case 'BOOK_DELETED':
            {const bookId = action.payload;  
                    
            const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);            
                console.log(itemIndex);
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, itemIndex),               
                    ...state.cartItems.slice(itemIndex + 1)
                ]
            }          
            
        }




        default: 
            return state;
    }
};

export default reducer;