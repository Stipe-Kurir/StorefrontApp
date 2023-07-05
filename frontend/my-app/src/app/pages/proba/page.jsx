"use client"

import React, { useEffect, useState } from "react"
import Medusa from "@medusajs/medusa-js"



const medusa = new Medusa({ baseUrl:"http://localhost:9000" , maxRetries: 3 })

function proba() {

// medusa.collections.retrieve(collection_id)
// .then(({ collection }) => {
//   console.log(collection.id);
// });

const [cat,setCat]=useState([])

useEffect(() => {
medusa.productCategories.list()
.then(({ product_categories, limit, offset, count }) => {
  setCat(product_categories)
  // console.log(product_categories.length);
});

})



return (
 
  <ul>
    {cat.map((product) => (
        <li key={product.id}>
            {product.name} 
        </li>
       
  ))}
   </ul> 
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