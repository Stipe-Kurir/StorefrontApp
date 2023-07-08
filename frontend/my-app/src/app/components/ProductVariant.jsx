"use client"

import React from 'react'

const ProductVariant = ({productV,setCurrentVPrice}) => {


  return (
    <>    
         <select className='cursor-pointer w-full pt-3 pb-3 pl-2 border-none bg-white text-[16px]' id="opcije" name="opcije"  >
            {productV.map((product) => (
                 <option className='cursor-pointer' onClick={()=>setCurrentVPrice(product.prices[0].amount)} key={product.id} value={product.title}>{product.title}</option>   
            ))}

        </select>

    </>
  )
}

export default ProductVariant
