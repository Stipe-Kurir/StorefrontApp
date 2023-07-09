"use client"

import React from 'react'
import { useState } from 'react'
import Medusa from "@medusajs/medusa-js"
import {FaMagnifyingGlass} from "react-icons/fa6"


const medusa = new Medusa({ 
    baseUrl:  "http://localhost:9000", 
    maxRetries: 3, 
  })

const SearchItem = ({setProducts}) => {

const [input,setInput]=useState("")
    
const changeSearchItem=(e)=>{
    setInput(e.target.value)
  }
 
const searchItem=(value)=>{
    if(value==="")
    {
       alert("Please enter item name")

    }else
    {
        medusa.products.list({
            handle:value,
           })
           .then(({ products }) => {
             setProducts(products)
             console.log("products iz search komponente",products)
             setInput("")
          });
    }
   
}

return (
        <div className='flex flex-row w-full justify-center'>
          <input type="text" className='border-b w-full border-gray-400 outline-none pt-3 pl-2 text-[12px] sm:text-[16px] bg-zinc-100'
          value={input} 
          placeholder='Search for item...' 
          onChange={changeSearchItem}/> 
          <button className='border-b border-gray-400 p-2 cursor-pointer bg-zinc-100' onClick={()=>searchItem(input)}>
            <FaMagnifyingGlass size={15} />
            </button>
        </div>
      
  )
}

export default SearchItem
