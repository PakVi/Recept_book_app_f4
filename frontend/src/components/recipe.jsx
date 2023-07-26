import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";
import '../styles/recipe.css';


const API_URL = 'http://localhost:8000/api/'

function Recipe() {
    const { recipeId} = useParams();
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`${API_URL}recipes/${recipeId}`);
                setRecipe(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipe();
    }, []);

    if (!recipe) {
        return <div>Загрузка...</div>
    }

    return (
        <div>
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.photo} alt="картинка" className='image'/>
                    <p className='description'>{recipe.description}</p>
                    <h4>Ингридиенты:</h4>
                    <p className='ing'>{recipe.ingredients}</p>
                    <h4>Рецепт приготовления:</h4>
                    <p className='rec'>{recipe.recipe}</p>
                </div>
        </div>
    )
}

export { Recipe }