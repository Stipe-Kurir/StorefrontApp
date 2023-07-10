import React from 'react'
import ShowDetail from './ShowDetail'
import {AiOutlineClose}  from 'react-icons/ai'

const ProductDetail = ({setDescription,description,product}) => {
  return (
     <div className='absolute top-[300px] w-[300px]  lg:w-[600px] bg-white flex flex-col shadow-2xl'>
            <div className='w-full flex justify-end pt-2 pr-2'>
            <AiOutlineClose size={15} className=" text-black font-bold cursor-pointer" onClick={()=>setDescription(!description)}/>
            </div>
            <div className='w-full flex flex-col items-center pb-2 font-bold text-[20px] sm:text-[25px]'>
              <p>PRODUCT DETAILS</p>
            </div>
            <div className='w-full flex flex-col justify-start pl-2 pb-2 gap-1 text-[12px] sm:text-[16px] '>
              <ShowDetail name="Name" value={product.title}/>
              <ShowDetail name="Description" value={product.description}/>
              <ShowDetail name="Material" value={product.material}/>
              <ShowDetail name="Weight" value={product.weight}/>
              <ShowDetail name="Length" value={product.length}/>
              <ShowDetail name="Height" value={product.height}/>
              <ShowDetail name="Origin country" value={product.origin_country}/>
            </div>
            </div>
  )
}

export default ProductDetail
