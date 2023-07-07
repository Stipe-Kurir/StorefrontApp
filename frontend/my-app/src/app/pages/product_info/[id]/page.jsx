"use client"

import Select from '@/app/components/Select'
import React from 'react'
import { useState,useEffect } from 'react'
import {AiOutlineClose}  from 'react-icons/ai'
import { useParams } from "next/navigation"

import Medusa from "@medusajs/medusa-js"
import ProductCardImage from '@/app/components/ProductCardImage'


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
    });
  } )

  
  //ZA SLIKE NEMOJ KORISTIT MAP JER TI NES NECE NGEO PROBAJ SA INDEXOM!!
  //  console.log(prodImg.length)


  //ako je neki odjevni predmet onda ce imat izbor velicina,boja i količina
  //ako je MERCH->šalica ili neš onda samo ce imat izbor kolicina i eventualno boja ako ima
  //to ces tavit ka uvjet ovisno o ID



  return (
    

    <div className=" flex justify-center w-full h-screen ">
        {
            !description ? 
         <div className='absolute top-28 sm:top-40 lg:top-60 grid  lg:w-4/6  sm:grid-cols-1 lg:grid-cols-2 pb-5 '>
         
         <div className='w-full sm:w-full sm:h-full bg-red-200 flex flex-col justify-center items-center gap-2'>

          <ProductCardImage slike={prodImg} slika={product.thumbnail}/>
            
         </div>

         <div className='w-full sm:w-full sm:h-full bg-red-400 flex flex-col justify-start ' >
           <div className='w-full p-3 bg-orange-200 font-bold text-[30px] '>{product.title}</div>
           <div className='w-full p-3 bg-orange-200 text-[20px]'>30 € </div>
           <div className='w-full p-3 bg-orange-200 text-[12px] color-grey-200 '>{product.description}</div>
           
           {/* <div className='w-full p-3 bg-orange-200  '>{productV.prices[1].amount} €</div> */}

           <div className='w-full p-3 bg-orange-200  flex '>
              <div className='w-[70%] bg-white flex justify-center'>
                    <select className='cursor-pointer w-full pt-3 pb-3 pl-2 border-none bg-white text-[16px] ' id="opcije" name="opcije">
                      {productV.map((product) => (
                            <option className='cursor-pointer' key={product.id} value={product.title}>{product.title}</option>   
                        ))}
                    </select>
              </div>
           </div>
                          {/* necemo zadrzat,nego sa varijantama biramo*/}
                          {/*Pri kraj dana probaj->kad odabere varijantu da promini sliku*/ }
           {/* <div className='w-full p-3 bg-orange-200 flex '>
             <Select opcija="color" opcija_prva="White" opcija_druga="Black" opcija_treca="Blue"/>
           </div> */}

           <div className='w-full p-3 bg-orange-200 flex  '>
              <input className='w-[80px] sm:w-[20%] pt-3 pb-3 pl-3 outline-none' type="number" id="number_items" value={numProducts} onChange={changeNumber} name="number_items"
               min="1" max="10"/> 
                      
           </div>

           {/* STAVI DA TE VRATI NA PRODUCTS STRANICU  ili ako stignes napravi cart stranicu*/}
           <div className='w-full p-3 bg-orange-200 flex '>
             <button className='w-[70%] bg-slate-300 pt-3 pb-3'>Add to cart</button>
           </div>
           
           <div className='w-full p-3 bg-orange-200 '>
             <button onClick={changeDetails} className="hover:underline">Product Details</button>
           </div>
         </div>

       </div>

      
          :
          /*IZMISLI NEKE PODATKE ZA PRODUCT DETAILS JER U BAZI IH NEMAS */

          <div className='w-[400px]  lg:w-4/6   bg-slate-400 flex flex-col justify-center  gap-9 '>
            <div className='w-full flex justify-end pt-3 pr-3'>
            <AiOutlineClose size={20} className=" text-black font-bold cursor-pointer" onClick={changeDetails}/>
            </div>
            <div>SVE O PROIZVODU</div>
            </div>


      }

      </div> 
  )

}

export default product_info

