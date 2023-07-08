"use client"

import React from 'react'
import { useState } from 'react'
import Medusa from "@medusajs/medusa-js"

const medusa = new Medusa({ 
  baseUrl:  "http://localhost:9000", 
  maxRetries: 3, 
})

const Filter = ({category,setCategory,setProductCategory}) => {


const changeCategory=(e)=>
    {  
        medusa.products.list({
        category_id: [e.target.value],
      })
      .then(({ products, limit, offset, count }) => {
        setProductCategory(products)
      }) 

      setCategory(e.target.value)
      console.log(e.target.value)
    
    }

  return (
    <div className="gap-1 w-full">
     <p>Choose a category</p>
            <select  className='cursor-pointer w-full pt-1 pb-1 sm:pt-2 sm:pb-2 pl-2  bg-zinc-100 text-[16px] border border-black ' required  value={category} onChange={changeCategory} >
                  <option value={""}>Sve</option>
                  <option value={"pcat_pants"}>Pants</option>
                  <option value={"pcat_shirts"}>Shirts</option>
                  <option value={"pcat_merch"}>Merch</option>
              </select>
    </div>
  )
}

export default Filter
