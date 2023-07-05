import React from 'react'

const ProductCard = ({naziv,slika}) => {
  return (
    <div className="flex flex-col justify-start bg-orange-200 w-full cursor-pointer">
      
      <div className='w-full h-full  bg-cyan-400 flex justify-center'>
        <img className='w-full h-full' src={slika}></img>
      </div>

      <div className='flex justify-center items-center w-full pt-4 pb-4 bg-slate-500 '>{naziv}</div>


    </div>
  )
}

export default ProductCard
