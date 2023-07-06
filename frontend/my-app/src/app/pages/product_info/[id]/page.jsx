"use client"

import Select from '@/app/components/Select'
import React from 'react'
import { useState,useEffect } from 'react'
import {AiOutlineClose}  from 'react-icons/ai'
import { useParams } from "next/navigation"

import Medusa from "@medusajs/medusa-js"


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
// console.log(prodImg.length)


  //ako je neki odjevni predmet onda ce imat izbor velicina,boja i količina
  //ako je MERCH->šalica ili neš onda samo ce imat izbor kolicina i eventualno boja ako ima
  //to ces tavit ka uvjet ovisno o ID



  return (
    

    <div className=" flex justify-center items-center w-full h-screen ">
        {
            !description ? 
         <div className='grid w-[400px]  lg:w-4/6   bg-slate-400 sm:grid-cols-1 lg:grid-cols-2  gap-9'>
         
         <div className='w-full sm:w-full sm:h-full bg-red-200 flex flex-col justify-center items-center gap-2'>
            
            
            <img className="w-[300px]" src={product.thumbnail}/> 
          

           <div className='w-full sm:w-full sm:h-full flex flex-row justify-center items-center gap-2'>
            {prodImg.map((product)=>(
                <img key={product.id} className='w-[80px] h-[80px]'  src={product.url}/>
            ))}

           {/* <img className='w-[80px] h-[80px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"/> */}
           </div>
         </div>

         <div className='w-full sm:w-full sm:h-full bg-red-400 flex flex-col justify-start ' >
           <div className='w-full p-3 bg-orange-200 font-bold text-[30px] '>{product.title}</div>
           <div className='w-full p-3 bg-orange-200 text-[20px]'>30 € </div>
           <div className='w-full p-3 bg-orange-200 text-[12px] color-grey-200 '>{/*product.description*/} description</div>
           
           {/* <div className='w-full p-3 bg-orange-200  '>{productV.prices[1].amount} €</div> */}

           <div className='w-full p-3 bg-orange-200  flex '>
              <div className='w-[70%] bg-white flex justify-center'>
                    <select className='w-full pt-2 pb-2' id="opcije" name="opcije">
                      {productV.map((product) => (
                            <option key={product.id} value={product.title}>{product.title}</option>   
                        ))}
                    </select>
              </div>
           </div>
                          {/* ZADRZI OVE BOJE JER NEMA BOJA U BAZI */}
           <div className='w-full p-3 bg-orange-200 flex '>
             <Select opcija="color" opcija_prva="White" opcija_druga="Black" opcija_treca="Blue"/>
           </div>

           <div className='w-full p-3 bg-orange-200 flex  '>
             <input className='w-[70%] pt-2 pb-2' type="number" id="number_items" value={numProducts} onChange={changeNumber} name="number_items"
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

