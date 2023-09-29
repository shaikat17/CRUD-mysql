import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [book, setBook] = useState({
        name: "",
        desc: "",
        price: null,
        cover: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBook( prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:5000/books", book)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(book)

    return (
        <div className="app">
            <div className='form'>
            <h1>Add New Book</h1>
            <input type="text" placeholder='name' onChange={handleChange} name='name' />
            <input type="text" placeholder='desc' onChange={handleChange} name='desc' />
            <input type="number" placeholder='price' onChange={handleChange} name='price' />
            <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
            <button onClick={handleClick}>ADD</button>
        </div>
        </div>
    );
};

export default Add;