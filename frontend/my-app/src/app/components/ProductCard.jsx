import React from 'react'

const ProductCard = ({name,image}) => {
  return (
    <div className="flex flex-col justify-start items-center w-full cursor-pointer shadow-2xl">
      
      <div className='w-full h-full flex justify-center'>
        <img className='w-full h-[250px]  md:h-[280px] lg:h-[340px] xl:h-[350px] 2xl:h-[450px]' src={image}></img>
      </div>

      <div className='flex justify-center items-center  pt-4 pb-4 bg-slate-500 hover:underline 
      font-bold text-zinc-100 text-[14px] md:text-[16px] w-full'>{name}</div>


    </div>
  )
}

export default ProductCard
