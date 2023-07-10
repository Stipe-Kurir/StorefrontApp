import React from 'react'
import { useState } from 'react'

const ProductCardImage = ({images,image}) => {

    const [currentImage,setCurrentImage]=useState("")

  return (
    <>

      <div className='w-full flex justify-center' >
            {currentImage==="" ?
              <img className='w-[300px]' src={image}/> :
              <img className='w-[300px]' src={currentImage}/>
            }   
      </div>

      <div className='w-full pb-2 flex flex-row justify-center gap-1 flex-wrap '>  
            {
            images.map((product)=>(
                  <img className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] opacity-80 cursor-pointer " key={product.id} onClick={()=>setCurrentImage(product.url)} src={product.url}/>
            ))} 

      </div>
    </>
    
  )
}

export default ProductCardImage

