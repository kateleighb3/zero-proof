import React, { useState } from 'react';
import DrinkItem from '../components/DrinkItem';
import {backgroundImage} from '../utils/constants';
import tango from '../assets/turmeric-tango.webp';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import { QUERY_THOUGHTS } from '../utils/queries';
import { useQuery } from '@apollo/client';




const TurmericTango = () => {

    const { loading, data } = useQuery(QUERY_THOUGHTS);
    const thoughts = data?.thoughts || [];

    const ingredients = '1 2" piece of peeled turmeric\n1 2" piece of peeled ginger\n1/2 lemon\n3 tablespoons agave syrup\nSparkling water\nCayenne pepper';

    const ingredientsList = ingredients.split('\n').map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ));

      const directions = 'Pass turmeric, ginger, and lemon (with peel) through a juicer (OR chop turmeric and ginger and puree in a blender with agave syrup, 1 tablespoon of fresh lemon juice and 1/3 cup of water. Then strain.)\nStir in agave syrup\nServe juice over ice, topped off with sparkling water and a sprinkle of cayenne pepper';

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
            img= {tango}
            name= 'Turmeric Tango'
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

export default TurmericTango;