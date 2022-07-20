import React, {useEffect, useState} from 'react';

function Popular(props) {

    // const [popular,setPopular]=useState([]);

    const [popular,setPopular]=useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular=async ()=>{
        const api=await fetch('https://api.spoonacular.com/recipes/random?apiKey=ec2df15c2abd45769b40f8c7cad212b5&number=9');
        const data= await api.json();
        setPopular(data.recipes);
        console.log(data);

    }
    return (
        <div>
            {popular.map((recipe)=>{
              return(
                  <p>
                      {recipe.title}
                  </p>
              )
            })}
        </div>
    );
}

export default Popular;