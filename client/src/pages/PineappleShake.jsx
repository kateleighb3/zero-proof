import React, { useState } from 'react';
import DrinkItem from '../components/DrinkItem';
import {backgroundImage} from '../utils/constants';
import chile from '../assets/chile-lime.webp';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import { QUERY_THOUGHTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import pineapple from '../assets/pineapple-shake.jpg';




const PineappleShake = () => {

    const { loading, data } = useQuery(QUERY_THOUGHTS);
    const thoughts = data?.thoughts || [];

    const ingredients = '1 1/2 cups Fresh Pineapple\n2/3 cup granulated sugar\n2/3 cup water\ntiny pinch of salt\n1 whole egg\n1 spoonful cream\n 2oz cracked ice\nSoda water to fill';

    const ingredientsList = ingredients.split('\n').map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ));

      const directions = 'Make the pineapple syrup first:\nCut the rind off the pineapple and cut into 1/2 inch pieces\nPour the sugar onto the pineapple and stir to coat the pineapple\nLet the sugar and pineapple rest for at least 3 hours (or up to overnight) until the sugar draws out liquid from the fruit and looks syrupy\nAdd the water and heat gently over the stove just until all the sugar is finished dissolving\n Pour through a strainer into a jar for storage\nThe Pineapple Shake:\nIn a cocktail shaker with 2 large cubes of ice shake the egg, cream, and 2 oz pineapple syrup until frothy\nAdd to a glass and fill with soda water\nIf desired the cream can be added as a float at the end\n Add pineapple slice';

      const directionsList = directions.split('\n').map((direction, index) => (
        <li key={index}>{direction}</li>
      ));
    return (
        <main className={`w-full min-h-screen bg-fixed bg-repeat relative bg-cover bg-[url("./assets/${backgroundImage}")]`}>

            <div className="row relative w-full h-36"></div>
            {/* <div className = 'flex flex-row justify-center p-4'>
       <h1 className='text-4xl font-bold text-center text-white font-fascinate'>Chile Lime Sublime</h1>
       </div> */}
       <div className = 'flex flex-row justify-center'>
        <DrinkItem 
            img= {pineapple}
            name= 'Pineapple Shake'
            ingredients= {<ul className= 'list-disc'>{ingredientsList}</ul>}
            directions= {<ol className='list-decimal'>{directionsList}</ol>}
        />
        
    </div>
    <ThoughtForm />
    <div className="col-12 col-md-8 mb-3">
    {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              />
          )}
    </div>
        </main>
    )
};

export default PineappleShake;