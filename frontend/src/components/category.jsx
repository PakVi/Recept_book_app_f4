import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import '../styles/category.css';


const API_URL = 'http://localhost:8000/api/'

function Category() {
    const { categoryId} = useParams();
    const [recipes, setRecipes] = useState([]);
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const fetchRecipesByCategory = async () => {
            try {
                const response = await axios.get(`${API_URL}categories/${categoryId}/recipes/`);
                const resp = await axios.get(`${API_URL}categories/${categoryId}`);
                setRecipes(response.data);
                setCat(resp.data.name)

            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipesByCategory();
    }, [categoryId]);

    if (!recipes) {
        return <div>Загрузка...</div>
    }

    return (

        <div>
            <h2>категория рецептов - {cat} </h2>

            <ul className='ball'>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}> - {recipe.title}</Link>
                    </li>
                ))}

            </ul>

        </div>
    );
}

export { Category };