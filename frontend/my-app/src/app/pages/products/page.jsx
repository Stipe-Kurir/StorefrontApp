"use client"

import ProductCard from '@/app/components/ProductCard'
import Medusa from "@medusajs/medusa-js"
import React, { useEffect, useState } from "react"
import Link from 'next/link'


const medusa = new Medusa({ 
  baseUrl:  "http://localhost:9000", 
  maxRetries: 3, 
})

const products = () => {

  //POziv iz baze i onda šaljemo u ProductCard->slika,naziv,cijena!->i onda ce product card ispisati nasu karticu
  //klikom na product card ulazimo u stranicu product info-> na toj stranici imamo dodatne informacije o tom proizvodu
  //mozda je najbolje u product card poslat onda sve informacije o proizvodu i ispisati 3 koje nas zanimaju,
  //onda klik na product card otvara se info stranica sa ostalim podacima o proivodu!

const [productItems,setProductItems]=useState()

const [products, setProducts] = useState([])
const [select,setSelect]=useState(false);
const [category,setCategory]=useState("")

const [productsDefault,setProductsDefault]=useState([])


const changeCategory=(e)=>
{  
  if(e.target.value==="")
  {
    medusa.products.list({
          })
          .then(({ products, limit, offset, count }) => {
            setProducts(products)
            // console.log(products.length)
          }) 
  }

    medusa.products.list({
    category_id: [e.target.value],
  })
  .then(({ products, limit, offset, count }) => {
    setProducts(products)
    // console.log(products.length)
  }) 
  

setCategory(e.target.value)
console.log(category)
 
}

// const changeCategory=(e)=>{
//   setCategory(e.target.value)
//   // if(cat==="")
//   // {
//   //   medusa.products.list({
//   //   })
//   //   .then(({ products, limit, offset, count }) => {
//   //     setProducts(products)
//   //     // console.log(products.length)
//   //   }) 
   
//   // }

//   medusa.products.list({
//     category_id: [e.target.value],
//   })
//   .then(({ products, limit, offset, count }) => {
//     setProducts(products)
//     // console.log(products.length)
//   }) 
  

// }



// medusa.products.list({
//   category_id: [""],
// })
// .then(({ products, limit, offset, count }) => {
//   setProducts(products)
//   // console.log(products.length)
// })

// medusa.productCategories.list()
// .then(({ product_categories, limit, offset, count }) => {
//   console.log(product_categories.length)
//  "pcat_pants" pcat_shirts pcat_merch})


// useEffect(() => {
//   medusa.productCategories.list({
//   })
//   .then(({ product_categories, limit, offset, count }) => {
//     console.log(product_categories)
//     // ignore pagination for sake of example
//     // setProducts(products)
//   })
// })


//OVO zadrzi jer ti do dohvati odmah sve podatke i to zelis
// useEffect(() => {
//   medusa.products.list({
//   })
//   .then(({ products, limit, offset, count }) => {
//     // ignore pagination for sake of example
//     setProductsDefault(products)
//     setProducts(products)
//   })
// })


  return (
    <div className="flex justify-center items-center pt-20  w-full ">
      <div className=" flex justify-center items-center  flex-col  p-10 w-full h-full">
       
        <div className='sticky top-20 bg-red-300 w-9/12 flex justify-center items-center pt-6 pb-6 gap-3 flex-col z-10'>
          <div className="flex justify-center ">
            <input className='w-9/12' type="text" placeholder='Filter items by collection ...'></input>
          </div>
        </div>


        <div>
          <p>Choose a category</p>
          <select  name="stvari"  required value={category} onChange={changeCategory} >
                <option value={""}>Sve</option>
                <option value={"pcat_pants"}>pants</option>
                <option value={"pcat_shirts"}>shirts</option>
                <option value={"pcat_merch"}>merch</option>
                
            </select>
         
      
        </div>
        
       <div className= "w-9/12  justify-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 pt-4 ">
          {/* Ovdje ces mapirati, također i filtrirat pa ce se prikazat sta zelis */}
           {products.map((product) => (
            <Link key={product.id} href="/pages/product_info/[id]" as={`/pages/product_info/${product.id}`}>
            <ProductCard naziv={product.title} slika={product.images[0].url} />
            </Link>

      
       
      ))}  </div> 
    
     
      

{/* <div>
      <Link href="/pages/product_info/">
      <ProductCard  naziv="T-shirt"  slika={"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"}/> 
      </Link>
      </div>  */}



     

           
          {/* //   <Link href="/pages/product_info/">
          //  <ProductCard  naziv="T-shirt"  slika={"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"}/> 
          //  </Link>  */}
           {/* <ProductCard  naziv="T-shirt"  slika={"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"}/> 
           <ProductCard  naziv="T-shirt"  slika={"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"}/> 
           <ProductCard  naziv="T-shirt"  slika={"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"}/> 
           <ProductCard  naziv="T-shirt"  slika={"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"}/> 
           <ProductCard  naziv="T-shirt"  slika={"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"}/> 
           <ProductCard  naziv="T-shirt"  slika={"https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"}/>    */}

          {/* </div> */}
      </div>
      
    </div>
  )
}

export default products
