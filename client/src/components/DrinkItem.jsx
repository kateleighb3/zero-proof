import React, { useState } from 'react';

const DrinkItem = ({img, name, ingredients, directions}) => {
    return(

        <div className = 'overlay flex flex-row justify-center backdrop-blur'>
            <div className = 'drinkContainer flex flex-row justify-between m-2'>
                <div className='w-80 h-96 flex flex-col items-center mr-8 justify-center '>
                <img src={img} alt={name} className='object-fit' />
                </div>
                <div className = 'drinkContainerRight p-4 w-96 h-96 overflow-auto'>

                <div className = 'content text-white'>
                    <h2 className='font-bold font-yellow text-3xl mb-4'>{name}</h2>
                    <h3 className= 'text-2xl font-bold'>Ingredients</h3>
                    <p className='m-2'> {ingredients}</p>
                    <h3 className= 'text-2xl font-bold'>Directions</h3>
                    <p className='m-2'>{directions}</p>
                    </div>
                </div>
                </div>

        </div>
        
        
    );
};



export default DrinkItem