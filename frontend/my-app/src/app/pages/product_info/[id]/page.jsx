"use client"

import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from "next/navigation"

import Medusa from "@medusajs/medusa-js"
import ProductCardImage from '@/app/components/ProductCardImage'
import ProductVariant from '@/app/components/ProductVariant'
import Modal from '@/app/components/Modal'
import ProductDetail from '@/app/components/ProductDetail'


const medusa = new Medusa({ 
  baseUrl:  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL, 
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
  const [modal,setModal]=useState(false)


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
         <div className='absolute top-28 sm:top-40 lg:top-60 grid w-[60%] sm:w-[50%] lg:w-[60%] sm:grid-cols-1 lg:grid-cols-2 pb-5'>
         
     
         <div className='w-full sm:w-full  bg-slate-300 flex flex-col justify-center items-center gap-2'>

          <ProductCardImage images={prodImg} image={product.thumbnail}/>
            
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

           <div className=' w-[80%] p-3  flex '>
             <button className='w-full bg-slate-300 font-bold pt-3 pb-3 hover:underline' onClick={()=>setModal(!modal)}>Add to cart</button>
           </div>
           
           <div className='w-[80%] p-3'>
             <button onClick={()=>setDescription(!description)} className="hover:underline">Product Details</button>
           </div>
         </div>

       </div>

          :

          <ProductDetail setDescription={setDescription} description={description} product={product}/>

      }
      {
      modal===true && <Modal setModal={setModal} modal={modal} />
      }
        
      </div> 
  )

}

export default product_info

