import React, { useState } from 'react';
import DrinkItem from '../components/DrinkItem';
import {backgroundImage} from '../utils/constants';
import chai from '../assets/chai-lax.webp';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import { QUERY_THOUGHTS } from '../utils/queries';
import { useQuery } from '@apollo/client';




const ChaiLax = () => {

    const { loading, data } = useQuery(QUERY_THOUGHTS);
    const thoughts = data?.thoughts || [];

    const ingredients = '1/2 cup sugar\n1/2 cup fresh lime juice\n8-12 oz club soda\n4 whole star anise pods\n4 lemon twists\n2 chai tea bags';

    const ingredientsList = ingredients.split('\n').map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ));

      const directions = 'Add tea bags and 1 cup of boiling water in a bowl; cover and let sit 8-10 minutes.\nAdd sugar; stir to dissolve.\nDiscard tea bags and let cool.\nStir chai syrup and lime juice in a large jar to combine.\nDivide among 4 rocks glasses filled with ice and add 2-3 oz club soda to each. Garnish with anise pods and lemon twists.';

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
            img= {chai}
            name= 'Chai-lax and Enjoy'
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

export default ChaiLax;