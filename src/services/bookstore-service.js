export default class BookstoreService {
    data = [
        {
            id:1, 
            title: 'War and Peace', 
            author: 'L.Tolstoy', 
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91tgg1BvjKL._AC._SR360,460.jpg'
        },
        {
            id:2, 
            title: 'Eugene Onegin', 
            author: 'A.Pushkin', 
            price: 25,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/5172dBvaxAL._AC._SR360,460.jpg'
        }
    ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.75) {
                    resolve(this.data);
                } else {
                    reject(new Error('Something bad happend'))
                };
            }, 700);
        });
    };
};