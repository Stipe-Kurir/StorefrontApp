"use client"


import React from 'react'
import Medusa from "@medusajs/medusa-js"
import { useState } from 'react'

const Proba = () => {

  const [product,postaviProducts]=useState()

  //RADI!
  const dohvatiProduct=()=>
  {
    const medusa = new Medusa({ baseUrl:"http://localhost:9000", maxRetries: 3 })
medusa.products.list()
.then(({ products, limit, offset, count }) => {
  console.log(products);
  postaviProducts(products[0].title)
});
  }

//   const medusa = new Medusa({ baseUrl:"http://localhost:9000", maxRetries: 3 })
// medusa.products.list()
// .then(({ products, limit, offset, count }) => {
//   console.log(products);
//   postaviProducts(products[0].title)
// });

console.log("nesto")
  return (
    <div>
      PROBA 
      <button onClick={dohvatiProduct}>DOHVATI</button>
       <div>{product}</div> 
    </div>
  )
}

export default Proba

