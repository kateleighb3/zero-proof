import { Link } from 'react-router-dom';
import Modal from './Modal';
import React, { useState } from 'react';



const MocktailItem = ({img, title, recipe}) => {

    // const [openModal, setOpenModal] = useState(false);

    return(
        // <div className='border-4 border-white relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-500/50 group hover:bg-gradient-to-r from-rose-900 to-purple-950 cursor-pointer'>
        <div className= 'flip-card'>
            {/* <Modal open = {openModal} onClose={()=> setOpenModal(false)} /> */}
            <div className = 'flip-card-inner'>
                <div className= 'flip-card-front flex justify-center items-center flex-col'>
            {/* <div className = "text-center text-2xl"> */}
            {/* <h2 className="font-yellow text-orange-500">{title}</h2> */}
            <h3 className='drink-sign'>
                {title}
                </h3>
            <img src={img} className='object-fit h-72 w-50' alt={title}/>
        
            {/* <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='drink-sign'>
                    {title}
                </h3> */}
                </div>

                <div className='flip-card-back flex flex-col justify-center'>
                    <h3>{title}</h3>
                    <Link to={`../${recipe}`}>
                    <button className= 'modalBtn border-2 border-white m-4 p-2'>Recipe</button>
                    </Link>
                    
                    {/* <Link to="/"><p className= 'p-4'>Recipe</p></Link> */}
                    {/* <Link to="/"><p>Reviews</p></Link> */}
                {/* <p className='pb-4 pt-2 text-orange-500 font-semibold text-center'>{tech}</p> */}
            </div>
            </div>
            

         </div>

         
        
        
    );
};


export default MocktailItem