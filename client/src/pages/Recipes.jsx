import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import drank from '../assets/drank-1.jpg';
import React, { useState } from 'react';


const Recipes = () => {
    const accordionData= {
        Recipe:"Recipe",
        Content: "Lorem stuff"
    };

    const {Recipe, Content} = accordionData;

    const [isActive, setIsActive] = useState(false);

    
    return (
    <div className='bg-cover bg-[url("./assets/pexels-rachel-claire-5863518.jpg")] relative h-screen w-full m-0 p-0'>
        <div className="row relative border-4 border-green-500 w-full h-1/6"></div>
        <div className="m-0 p-0 flex items-center border-4 border-red-500">
            <div className="float-left w-1/5 m-3.5 p-4 backdrop-blur border-4 border-white">
                <h4 className="text-white bg-green-950 text-4xl font-yellow text-center">Drink Name</h4>
                <img src={drank}/>
                {/* <h4 className="text-white bg-green-950 text-4xl font-yellow text-center">Recipe</h4> */}
                
                <React.Fragment>
                <div className="accordion">
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                            <div className="text-white bg-green-950 text-4xl font-yellow text-center">{Recipe}
                            <div>{isActive ? '-' : '+'}</div>
                            </div>
                            
                        </div>
                    {isActive && <div className="accordion-content">{Content}</div>}
                    </div>
                    </div>
                </React.Fragment>
                
            

            </div>
</div>

</div>
    );
};

export default Recipes;