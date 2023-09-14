import React from 'react'

const RecipeItem = ({img, title}) => {
    return(
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-indigo-500/50 group hover:bg-gradient-to-r from-rose-900 to-purple-950 cursor-pointer'>
            {/* <div className = "text-center text-2xl"> */}
            {/* <h2 className="font-yellow text-orange-500">{title}</h2> */}
            <img src={img} alt={title} className='group-hover:opacity-10'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='drink-sign'>
                    {title}
                </h3>
                </div>
                {/* <p className='pb-4 pt-2 text-orange-500 font-semibold text-center'>{tech}</p> */}
            </div>
        // </div>
    );
};

export default RecipeItem