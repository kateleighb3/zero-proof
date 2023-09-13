import React, { useState } from 'react';

const DrinkItem = ({name, img}) => {
    return(

        
        
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-500/50 group hover:bg-gradient-to-r from-rose-900 to-purple-950 cursor-pointer'>
            <img src={img} alt={title} className='group-hover:opacity-10'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold text-orange-500 tracking-wider text-center'>
                    {title}
                </h3>
                <p className='pb-4 pt-2 text-orange-500 font-semibold text-center'>{tech}</p>
            </div>
        </div>
        
    );
};



export default ResumeItem