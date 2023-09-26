import { useState } from 'react';
import { Link } from 'react-router-dom';
import {backgroundImage} from '../utils/constants';



const Drinks = () => {
  

  return (
    <main className={`w-full h-screen relative bg-cover bg-[url("./assets/${backgroundImage}")]`}>
      {/* <div className=> */}
     <div className="m-0 p-0 flex justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center">
        <div className='grid grid-cols-3 gap-12'>
          <div className="text-white border-2 border-white p-10 backdrop-blur text-center">
          <Link to="/mocktails">
          <div className='mock-sign'>
                Mocktails
                </div>
            </Link>
          </div>

          <div className="text-white border-2 border-white p-10 backdrop-blur text-center">
          <Link to="/spirits">
          <div className='spirit-sign'>
                Spirits
                </div>
            </Link>
          </div>

          <div className="text-white border-2 border-white p-10 backdrop-blur text-center">
          <Link to="/beer">
          <div className='beer-sign'>
                Beer
                </div>
            </Link>
          </div>

        </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
};

export default Drinks;
