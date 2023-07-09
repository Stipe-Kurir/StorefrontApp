"use client"

import React from 'react'
import { useState } from 'react'
import Medusa from "@medusajs/medusa-js"

const medusa = new Medusa({ 
  baseUrl:  "http://localhost:9000", 
  maxRetries: 3, 
})

const Filter = ({setProducts}) => {

  const [category,setCategory]=useState("")

 
const changeCategory=(e)=>
   {
    if(e.target.value==="")
    {
      medusa.products.list({
      })
      .then(({ products, limit, offset, count }) => {
        setProducts(products)
      }) 
      setCategory(e.target.value)
    
    }  
    else{
      medusa.products.list({
        category_id: [e.target.value],
      })
      .then(({ products, limit, offset, count }) => {
        setProducts(products)
      }) 
      setCategory(e.target.value)
    }

    }

  return (
    <div className="gap-1 w-full">
     <p>Choose a category</p>
            <select  className='hover:cursor-pointer w-full pt-1 pb-1 sm:pt-2 sm:pb-2 pl-2 font-bold  bg-zinc-100 text-[16px] border border-black ' required  value={category} onChange={changeCategory} >
                  <option value={""}>All</option>
                  <option value={"pcat_pants"}>Pants</option>
                  <option value={"pcat_shirts"}>Shirts</option>
                  <option value={"pcat_merch"}>Merch</option>
              </select>
    </div>
  )
}

export default Filter
