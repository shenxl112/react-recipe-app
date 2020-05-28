import axios from 'axios';  // axios is used to make api call

// This file is for App.js
export const fetchData = async (country, i) => {  //we need call this func
    const APP_ID = "";
    const APP_KEY = "";
    const query = "bacon"

    try {
        const { data:{hits} }= await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

        // const modifiedData = {  //return an boject
        //     calories: hits.calories,
        //     ingredients: hits.ingredients,
        //     label: hits.label,
        //     image: hits.image,
            
        // }
        return hits;
    } catch (error) {
        console.log(error);
    }
}