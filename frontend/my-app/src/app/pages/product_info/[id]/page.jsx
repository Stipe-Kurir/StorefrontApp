"use client"

import React from 'react'
import { useState,useEffect } from 'react'
import {AiOutlineClose}  from 'react-icons/ai'
import { useParams } from "next/navigation"

import Medusa from "@medusajs/medusa-js"
import ProductCardImage from '@/app/components/ProductCardImage'
import ProductVariant from '@/app/components/ProductVariant'
import ShowDetail from '@/app/components/ShowDetail'


const medusa = new Medusa({ 
  baseUrl:  "http://localhost:9000", 
  maxRetries: 3, 
})


const product_info = () => {


  const params=useParams();

  const [description,setDescription]=useState(false)
  const [product,setProduct]=useState([])
  const [productV,setProductV]=useState([])
  const [prodImg,setProdImg]=useState([])

  const [numProducts,setNumProducts]=useState(1)
  const [currentVPrice,setCurrentVPrice]=useState("")
  const [defaultPrice,setDefaultPrice]=useState()



  const changeDetails=()=>{
    setDescription(!description)
  }
  const changeNumber=(e)=>{
    setNumProducts(e.target.value)
  }

  useEffect(() => {
    medusa.products.retrieve(params.id)
    .then(({ product }) => {
      setProduct(product)
      setProductV(product.variants)
      setProdImg(product.images)
      setDefaultPrice(product.variants[0].prices[0].amount)
    });
  },[])
  

  return (
    

    <div className=" flex justify-center w-full h-screen ">
        {
            !description ? 
         <div className='absolute top-28 sm:top-40 lg:top-60 grid w-[60%] sm:w-[50%] lg:w-4/6 sm:grid-cols-1 lg:grid-cols-2 pb-5'>
         
     
         <div className='w-full sm:w-full  bg-slate-300 flex flex-col justify-center items-center gap-2'>

          <ProductCardImage slike={prodImg} slika={product.thumbnail}/>
            
         </div>
      
         <div className='w-full sm:w-full  bg-white flex flex-col items-center lg:items-start' >

           <div className='w-[80%] p-3 font-bold text-[20px] sm:text-[30px]'>{product.title}</div>
           <div className='w-[80%] p-3  text-[15px] sm:text-[20px] ' key={product.id}>
                  {currentVPrice==="" 
                  ?
                  <p>{defaultPrice} € </p> 
                  :
                  <p>{currentVPrice} € </p> 
                   }
                </div>
           <div className='w-[80%] p-3 text-[13px] hidden sm:block sm:text-[16px] color-grey-200 '>{product.description}</div>

           <div className='w-[80%] p-3   flex '>
              <div className='w-full bg-white flex justify-center'>

            <ProductVariant productV={productV} setProductV={setProductV} setCurrentVPrice={setCurrentVPrice}/> 

            </div>
           </div>  


           <div className='w-[80%] p-3 flex  '>
              <input className='w-full bg-zinc-100  pt-3 pb-3 pl-3 font-bold outline-none' type="number" id="number_items" value={numProducts} onChange={changeNumber} name="number_items"
               min="1" max="10"/> 
                      
           </div>

           {/* STAVI DA TE VRATI NA PRODUCTS STRANICU  ili ako stignes napravi cart stranicu*/}
           <div className=' w-[80%] p-3  flex '>
             <button className='w-full bg-slate-300 font-bold pt-3 pb-3'>Add to cart</button>
           </div>
           
           <div className='w-[80%] p-3'>
             <button onClick={changeDetails} className="hover:underline">Product Details</button>
           </div>
         </div>

       </div>

          :

          <div className='absolute top-[300px] w-[300px]  lg:w-[600px] bg-white flex flex-col shadow-2xl'>
            <div className='w-full flex justify-end pt-2 pr-2'>
            <AiOutlineClose size={15} className=" text-black font-bold cursor-pointer" onClick={changeDetails}/>
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

      }

      </div> 
  )

}

export default product_info

