import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    const handleDelete = async (id) => {
        console.log(id)
        try {
            await axios.delete(`http://localhost:5000/books/${id}`)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='app'>
            <div>
            <h1>Shaikat Book Shop</h1>
            <div className="books">
                {books.map(book => {
                    return (
                        <div className="book" key={book.id}>
                            {book.cover && <img src={book.cover} alt={book.name} /> }
                            <h2>{book.name}</h2>
                            <p>{book.desc}</p>
                            <p>{book.price}</p>
                            <button className='delete' onClick={() => handleDelete(book.id)}>Delete</button>
                            <button className='update'>Update</button>
                        </div>
                    )
                })}
            </div>
            <button><Link to="/add">Add New Book</Link></button>
            </div>
        </div>
    );
};

export default Books;