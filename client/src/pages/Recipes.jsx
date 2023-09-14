import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import drank from '../assets/drank-1.jpg';
import mai from '../assets/maitai.jpg';
import pina from '../assets/pinacolada.jpg';
import cherry from '../assets/cherry-lemon-bomb.jpg';
import minty from '../assets/minty-mango-split.jpg';
import React, { useState } from 'react';
import RecipeItem from '../components/RecipeItem';



const Recipes = () => {

        
    return (
    <div className='bg-cover bg-fixed bg-[url("./assets/palm-1.jpg")] relative min-h-screen w-full m-0 p-0'>
        <div className="row relative w-full h-28"></div>
        <div id="recipes" className="m-0 p-0 flex items-center justify-center min-h-screen">
        <div className='ml-4 mr-4 grid grid-cols-4 gap-12'>
            {/* <div className="float-left w-1/5 m-3.5 p-4 backdrop-blur border-4 border-white"> */}
                {/* <h4 className="text-white bg-green-950 text-4xl font-yellow text-center">Drink Name</h4> */}
                <Link to="/"><RecipeItem img={minty} title="Minty Mango Split" /></Link>
                <Link to="/"><RecipeItem img={drank} title="Zombie" /></Link>
                <Link to="/"><RecipeItem img={pina} title="Pina Colada" /></Link>
                <Link to="/"><RecipeItem img={cherry} title="Cherry Lemon Bomb" /></Link>
                {/* <h4 className="text-white bg-green-950 text-4xl font-yellow text-center">Recipe</h4> */}

            </div>
</div>
</div>
// </div>
    );
};

export default Recipes;