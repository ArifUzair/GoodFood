import React from 'react';

const HeadlineCards=()=>{
    return(
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card  */}
            <div className='rounded-xl relative'>  
            {/* Overlay  */}
                <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's out,BOGO's out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl px-3'>Order Now</button>
                </div>
                <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className='rounded-xl relative'>  
            {/* Overlay  */}
                <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants </p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl px-3'>Order Now</button>
                </div>
                <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover     rounded-xl' src="https://images.pexels.com/photos/15476361/pexels-photo-15476361/free-photo-of-big-tasty-hamburger-on-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2" alt="" />
            </div>
            <div className='rounded-xl relative'>  
            {/* Overlay  */}
                <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2 pt-4'>Exciting Juicy Burgers</p>
                <p className='px-2'>Grab fast</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl px-3'>Order Now</button>
                </div>
                <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/17182459/pexels-photo-17182459/free-photo-of-hands-holding-cola-can-and-flying-burger-ingredients.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
        </div>
    )
}

export default HeadlineCards;