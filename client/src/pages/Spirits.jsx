import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import path from '../assets/path.jpg';
import seed from '../assets/seedlip.jpg';
import curious from '../assets/curious-2.jpg';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';
import { backgroundImage } from '../utils/constants'





const Spirits = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
        
    return (
          <main className={`m-0 p-0 w-full min-h-screen bg-fixed bg-repeat relative bg-cover bg-[url("./assets/${backgroundImage}")]`}>
              {/* <div class="bg-repeat-y w-full bg-cover" style="background-image: url('./assets)"> */}
            <div className="row relative w-full h-36 "></div>
              <h2 className="feature-sign p-4 mt-2">Featured</h2>
             <div className="mt-8 p-0 flex justify-center items-center">
                <div className="flex flex-col justify-center">
                  <div className='grid grid-cols-3 gap-12'>
                    
                <Link to='/'>
                    <div className='mb-8 backdrop-blur'>
                    <h4 className="title-sign">Seedlip</h4>
                  <div className="text-white p-8 text-center">
                    <img src ={seed} alt="brooklyn effects na beer" className="w-72 h-80" />
                  </div>
                  </div>
                  </Link>
        
                  <Link to='/'>
                  <div className='backdrop-blur'>
                    <h4 className="title-sign">Curious Elixir No 2</h4>
                  <div className="text-white p-8 text-center">
                    <img src ={curious} alt="brooklyn effects na beer" className="w-72 h-80" />
                  </div>
                  </div>
                  </Link>
        
                  <Link to='/'>
                  <div className='backdrop-blur'>
                    <h4 className="title-sign">Pathfinder</h4>
                  <div className="text-white p-8 text-center">
                    <img src ={path} alt="brooklyn effects na beer" className="w-72 h-80" />
                  </div>
                  </div>
                  </Link>




                
        
                </div>
                </div>
              </div>
              <ThoughtForm />
              {/* </div> */}

              <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              // title="Reviews..."
            />
          )}
        </div>
            </main>
          );
        };
export default Spirits;