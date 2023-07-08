"use client"


import React, { useEffect } from 'react'
import Medusa from "@medusajs/medusa-js"
import { useState } from 'react'

const medusa = new Medusa({ baseUrl:"http://localhost:9000", maxRetries: 3 })

const Proba = () => {

  const [product,postaviProducts]=useState()

  //RADI!
//   const dohvatiProduct=()=>
//   {
 
// medusa.products.list()
// .then(({ products, limit, offset, count }) => {
//   console.log(products);
//   postaviProducts(products[0].title)
// });
//   }

  useEffect(()=>{
    medusa.products.search({
      q: 'Shirt'
    })
    .then(({ hits }) => {
      postaviProducts(hits)
    });
  })
 



//   const medusa = new Medusa({ baseUrl:"http://localhost:9000", maxRetries: 3 })
// medusa.products.list()
// .then(({ products, limit, offset, count }) => {
//   console.log(products);
//   postaviProducts(products[0].title)
// });

console.log("nesto")

  return (
    <div>
       <div>{product}</div> 
    </div>
  )
}

export default Proba

