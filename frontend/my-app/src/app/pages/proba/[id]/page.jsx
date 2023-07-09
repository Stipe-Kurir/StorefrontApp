"use client"

import React, { useEffect, useState } from "react"
import Medusa from "@medusajs/medusa-js"
import { storeProductCategoryKeys } from "medusa-react"
import products from "../../products/page"




const medusa = new Medusa({ baseUrl:"http://localhost:9000" , maxRetries: 3 })

function proba() {

// medusa.collections.retrieve(collection_id)
// .then(({ collection }) => {
//   console.log(collection.id);
// });

const [cat,setCat]=useState([])
const [prod,setProd]=useState([])

useEffect(() => {
  
  medusa.products.retrieve("prod_01H49B6FEJ1CG5V0S7PWREV51K")
  .then(({ product }) => {
    setCat(product.variants)
    setProd(product.images)
  });

})

// medusa.productCategories.list()
// .then(({ product_categories, limit, offset, count }) => {
//   setCat(product_categories)
//   // console.log(product_categories.length);
// });

// })





return (

  <div>
  { //ZA MAPIRANJE VARIANTS!!
  cat.map((product) => (
    <div key={product.id}>
        <p>{product.title},{product.prices[1].amount} </p> 
      </div>
           

      
       
      ))}
      { //ZA MAPIRANJE SLIKA->stavit da korisnik moze vidjeti obe strane!!
      prod.map((product)=>
      <div key={product.id}>
        <img src={product.url}/>
      </div>
      )}
        
  </div>
 




)

}

export default proba







// const medusa = new Medusa({ 
//   baseUrl:  "http://localhost:9000", 
//   maxRetries: 3, 
// })

// function proba() {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     medusa.products.list()
//     .then(({ products, limit, offset, count }) => {
//       // ignore pagination for sake of example
//       setProducts(products)
//     })
//   })

 


  
//   return (
//     <ul>
//       {products.map((product) => (
//             <li key={product.id}>
//               {product.title} , {product.images[0].url}
//             </li>
         
//       ))}
//     </ul>
//   )
// }

// export default proba