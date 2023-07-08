"use client"

import ProductCard from '@/app/components/ProductCard'
import Medusa from "@medusajs/medusa-js"
import React, { useEffect, useState } from "react"
import Link from 'next/link'
import Filter from '@/app/components/Filter'


const medusa = new Medusa({ 
  baseUrl:  "http://localhost:9000", 
  maxRetries: 3, 
})

const products = () => {

  //POziv iz baze i onda šaljemo u ProductCard->slika,naziv,cijena!->i onda ce product card ispisati nasu karticu
  //klikom na product card ulazimo u stranicu product info-> na toj stranici imamo dodatne informacije o tom proizvodu
  //mozda je najbolje u product card poslat onda sve informacije o proizvodu i ispisati 3 koje nas zanimaju,
  //onda klik na product card otvara se info stranica sa ostalim podacima o proivodu!


const [products, setProducts] = useState([])
const [category,setCategory]=useState("")
const [productCategory,setProductCategory]=useState([])



//OVO zadrzi jer ti do dohvati odmah sve podatke i to zelis
  useEffect(() => {
   medusa.products.list({
    })
    .then(({ products, limit, offset, count }) => {
      // ignore pagination for sake of example
      setProducts(products)
      })
  })


return (
    <div className="flex justify-center items-center pt-20  w-full  ">
      <div className=" flex justify-center items-center  flex-col  p-10 w-full h-full">
       
        <div className='sticky top-20 bg-zinc-100 w-9/12 flex justify-center items-center p-6  gap-3 flex-col z-10'>

          {/* AKO ZELIS TRAZIT SA SEARCH!
           <div className="flex justify-center ">
            <input className='w-9/12' type="text" placeholder='Filter items by collection ...'></input>
          </div> */}

            <div className='w-[90%] sm:w-[70%] lg:w-[40%] text-[12px] sm:text-[16px] p-2 gap-3 flex flex-col '>
              <input type="search" className='border-b border-grey-400 outline-none pt-3 pl-2 text-[12px] sm:text-[16px] bg-zinc-100' placeholder='Search for item...'/>

              <Filter category={category} setCategory={setCategory} setProductCategory={setProductCategory} />
            </div>

        </div>
        
       <div className= "w-9/12  justify-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 pt-4 ">
          {/* Ovdje ces mapirati, također i filtrirat pa ce se prikazat sta zelis */}
          {category === "" ? 
          <>
          {products.map((product) => (
            <Link key={product.id} href="/pages/product_info/[id]" as={`/pages/product_info/${product.id}`}>
            <ProductCard naziv={product.title} slika={product.images[0].url} />
            </Link>
              ))}
          </>
          :
           <>
           {productCategory.map((product) => (
            <Link key={product.id} href="/pages/product_info/[id]" as={`/pages/product_info/${product.id}`}>
            <ProductCard naziv={product.title} slika={product.images[0].url} />
            </Link>
              ))}
           </>

          }
           
        </div> 

      </div>
      
    </div>
  )
}

export default products
