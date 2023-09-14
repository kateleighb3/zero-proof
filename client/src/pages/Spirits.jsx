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
import path from '../assets/path.jpg';
import seed from '../assets/seedlip.jpg';
import curious from '../assets/curious-2.jpg';



const Spirits = () => {

        
    return (
            <main className='w-full min-h-screen bg-fixed bg-repeat relative bg-cover bg-[url("./assets/pexels-rachel-claire-5863518.jpg")]'>
              {/* <div class="bg-repeat-y w-full bg-cover" style="background-image: url('./assets)"> */}
              <div className="row relative w-full h-36 "></div>
              <h2 className="feature-sign p-4 mt-2">Featured</h2>
             <div className="mt-8 p-0 flex justify-center items-center">
                <div className="flex flex-col justify-center">
                <div className='grid grid-cols-3 gap-12'>
                    
                    <div className='backdrop-blur'>
                    <h4 className="title-sign">Brooklyn Effects</h4>
                  <div className="text-white p-8 text-center">
                    <img src ={seed} alt="brooklyn effects na beer" className="w-72 h-80" />
                  </div>
                  </div>
        
                  <div className='backdrop-blur'>
                    <h4 className="title-sign">Athletic Brewing</h4>
                  <div className="text-white p-8 text-center">
                    <img src ={curious} alt="brooklyn effects na beer" className="w-72 h-80" />
                  </div>
                  </div>
        
                  <div className='backdrop-blur'>
                    <h4 className="title-sign">Lagunitas Hoppy Refresher</h4>
                  <div className="text-white p-8 text-center">
                    <img src ={path} alt="brooklyn effects na beer" className="w-72 h-80" />
                  </div>
                  </div>




                
        
                </div>
                </div>
              </div>
              {/* </div> */}
            </main>
          );
        };
export default Spirits;