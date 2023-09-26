import React, { useState } from 'react';
import DrinkItem from '../components/DrinkItem';
import {backgroundImage} from '../utils/constants';
import chile from '../assets/chile-lime.webp';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import { QUERY_THOUGHTS } from '../utils/queries';
import { useQuery } from '@apollo/client';




const ChileLimeSublime = () => {

    const { loading, data } = useQuery(QUERY_THOUGHTS);
    const thoughts = data?.thoughts || [];

    const ingredients = ' 1 tablespoon pink peppercorns\n1 lime\n2 dried chiles de arbol, crushed\n3 cups fresh pineapple juice\n1/2 cup sugar\npinch of sea salt\n9 cups club soda, divided';

    const ingredientsList = ingredients.split('\n').map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ));

      const directions = 'Crush peppercorns with a mortar and pestle or the side of a chef’s knife.\n Remove zest from lime in wide strips with a vegetable peeler. Place in a bowl. Add peppercorns, whole chiles de árbol, pineapple juice, sugar, and salt and stir until most of sugar is dissolved. Transfer to a 1-qt. jar or an airtight container. Cover and chill 8–12 hours. \n Strain juice through a fine-mesh sieve into another medium bowl (you should have about 3 cups); discard solids.\nTo make 1 drink, mix ¼ cup juice with ¾ cup club soda in a measuring glass; taste and add more juice if you want it sweeter. Pour into an ice-filled glass. Garnish with a lime wedge and crushed chile de árbol.\nDo Ahead: Juice can be infused and strained 3 days ahead. Cover and chill.';

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
            img= {chile}
            name= 'Chile Lime Sublime'
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

export default ChileLimeSublime;