"use client"

import Select from '@/app/components/Select'
import React from 'react'
import { useState } from 'react'
import {AiOutlineClose}  from 'react-icons/ai'

const product_info = () => {

  const [description,setDescription]=useState(false)

  const changeDetails=()=>{
    setDescription(!description)
  }

  //ako je neki odjevni predmet onda ce imat izbor velicina,boja i količina
  //ako je MERCH->šalica ili neš onda samo ce imat izbor kolicina i eventualno boja ako ima
  //to ces tavit ka uvjet ovisno o ID
  return (

    <div className=" flex justify-center items-center w-full h-screen ">

        {
       
            description ? 
         <div className='grid w-[400px]  lg:w-4/6   bg-slate-400 sm:grid-cols-1 lg:grid-cols-2  gap-9'>
         
         <div className='w-full sm:w-full sm:h-full bg-red-200 flex justify-center items-center'>
           <img className="w-[300px] " src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"/>
         </div>

         <div className='w-full sm:w-full sm:h-full bg-red-400 flex flex-col justify-start ' >
           <div className='w-full p-3 bg-orange-200 font-bold text-[30px] '>Medusa Hoodie</div>
           <div className='w-full p-3 bg-orange-200  '>350 €</div>
           <div className='w-full p-3 bg-orange-200 text-[12px] color-grey-200 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
           <div className='w-full p-3 bg-orange-200  flex '>
           <Select opcija="velicina"opcija_prva="S" opcija_druga="M" opcija_treca="L" />
           </div>
           <div className='w-full p-3 bg-orange-200 flex '>
             <Select opcija="color" opcija_prva="White" opcija_druga="Black" opcija_treca="Blue"/>
           </div>
           <div className='w-full p-3 bg-orange-200 flex  '>
             <input className='w-[70%] pt-2 pb-2' type="number" id="kolicina" name="kolicina"
               min="1" max="10"/>
           </div>
           <div className='w-full p-3 bg-orange-200 flex '>
             <button className='w-[70%] bg-slate-300 pt-3 pb-3'>Add to cart</button>
           </div>
           <div className='w-full p-3 bg-orange-200 '>
             <button onClick={changeDetails} className="hover:underline">Product Details</button>
           </div>
         </div>

       </div>

      
          :
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


 {/* /* <div className='w-full h-full flex justify-center items-center bg-red-400'>
            <img className='w-[500px] h-[400px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"/>
          </div>
          <div className=' flex flex-col justify-start bg-orange-300'>
            <p>1</p>            
            <p>2</p>            
            <p>3</p>            
            <p>4</p>            
          </div> */ }