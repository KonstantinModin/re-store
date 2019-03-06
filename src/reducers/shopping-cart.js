
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
        price: book.price,
        total: book.price * (count + q)
    };
};

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems, orderTotal} } = state;
    
    const book = books.find(({ id }) => id === bookId);
    const itemIndex = cartItems.findIndex(({ id })=> id === bookId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(book, item, quantity);
    const newOrderTotal = cartItems.reduce((sum, item) => sum + item.total, 0) + quantity * newItem.price;

    return {           
        cartItems: updateCartItems(cartItems, itemIndex, newItem),
        orderTotal: newOrderTotal               
    };
}

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
       return {
            cartItems: [],
            orderTotal: 0
        };
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        
        case 'BOOK_DECREASED':
            return updateOrder(state, action.payload, -1);

        case 'BOOK_DELETED':                   
            const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);      
        
        default: 
            return state.shoppingCart;
    }
};

export default updateShoppingCart;