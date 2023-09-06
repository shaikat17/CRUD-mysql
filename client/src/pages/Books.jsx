import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
            const res = await axios("http://localhost:5000/books")
            setBooks(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllBooks()
    }, [])

    return (
        <div>
            <h1>Shaikat Book Shop</h1>
            <div className="books">
                {books.map(book => {
                    return (
                        <div className="book" key={book.id}>
                            {book.cover && <img src={book.cover} alt={book.name} /> }
                            <h2>{book.name}</h2>
                            <p>{book.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Books;