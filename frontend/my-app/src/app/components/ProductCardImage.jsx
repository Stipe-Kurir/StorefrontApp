import React from 'react'
import { useState,useEffect } from 'react'

const ProductCardImage = ({slike,slika}) => {

    const [currentImage,setCurrentImage]=useState("")


  return (
    <>

     <div className='w-full flex justify-center pt-2 pl-2 pr-2' >
           {currentImage==="" ?
            <img className='w-[300px]' src={slika}/> :
            <img className='w-[300px]' src={currentImage}/>
           }   
    </div>

    <div className='w-full pb-2 flex flex-row justify-center gap-1 flex-wrap '>  
     {
     slike.map((product)=>(
          <img className="w-[80px] h-[80px] opacity-80 cursor-pointer " key={product.id} onClick={()=>setCurrentImage(product.url)} src={product.url}/>
    ))} 

    </div>
    </>
    
  )
}

export default ProductCardImage



 {/* {currentImage==="" ?
            <img className='w-[300px]' src={slika}/> :
            <img className='w-[300px]' src={currentImage}/>
         }   */}

        //  className={`${"w-[80px] h-[80px]"} ${currentImage===product.url ? "border border-black": "border border-red-500"} `}