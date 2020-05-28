import React, { useEffect, useState }from 'react';

import './App.css';
import Recipe from './Recipe';
import { fetchData } from './api';

const Header = () => {

    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('chicken');

    const APP_ID = "d0de53a8";
    const APP_KEY = "df46129edc92d4ca07b714f8286a9a0c";

    // useEffect(() => {  // search bar won't work
    //     const fetchAPI = async () => {
    //         setRecipes(await fetchData());
    //     }
    //     fetchAPI();
    // }, []);


    useEffect(() => {  // search working 
        const getRecipes = async () => {
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
            const data = await response.json();
            setRecipes(data.hits);
            console.log(data.hits);
    }
    getRecipes();
  }, [query]);

    const updateSearch = e => {  // onChange handler
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault(); // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        setQuery(search); // this will update after hit submit
        setSearch("");   // remove search text    "search-form" 
    }

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input
                    placeholder="Search Recipe Here"
                    className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch}>
                </input>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes" md={12}>
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients} 
                    />
                ))}
            </div>  
        </div>
        // {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */ }
    )
}

export default Header;