import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/main.css';


const API_URL = 'http://localhost:8000/api/'

const MainPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${API_URL}categories/`);
                setCategories(response.data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <h1 className='main'>Категории:</h1>
            <ul className='ball'>
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/categories/${category.id}`}> - {category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { MainPage };

