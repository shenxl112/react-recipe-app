import React from 'react';
import style from './recipe.module.css';

// const Recipe = ({title, calories, image}) => {
//     return (  //return jsx
//         <div>
//             <h1>{title}</h1>
//             <p>{calories}</p>
//             <img src={image} alt=""></img>
//         </div>
//     ); 
// }

const Recipe = (props) => {
    return (  //return jsx
        <div className={style.recipe}>
            <img className={style.image} src={props.image} alt=""></img>
            <h1>{props.title}</h1>
            <p>{props.calories.toFixed(0)} Calories</p>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;