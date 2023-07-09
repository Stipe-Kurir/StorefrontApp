"use client"

import ProductCard from '@/app/components/ProductCard'
import Medusa from "@medusajs/medusa-js"
import React, { useEffect, useState } from "react"
import Link from 'next/link'
import Filter from '@/app/components/Filter'
import SearchItem from '@/app/components/SearchItem'


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

  useEffect(() => {
   medusa.products.list({
    })
    .then(({ products, limit, offset, count }) => {
      setProducts(products)
      })
  },[])


return (
    <div className="flex justify-center items-center pt-20  w-full  ">

      <div className=" flex justify-center items-center  flex-col  p-10 w-[90%]  h-full">
       
        <div className='sticky top-20 bg-white w-[300px] sm:w-9/12 flex justify-center items-center p-6  gap-3 flex-col z-10'>
            <div className='w-full sm:w-[70%] lg:w-[40%] text-[12px] sm:text-[16px] p-2 gap-3 flex flex-col'>
              <SearchItem setProducts={setProducts}/>
              <Filter  setProducts={setProducts} />
            </div>
        </div>
        
       <div className= "w-[300px] sm:w-9/12  justify-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 pt-4 ">
          {/* Ovdje ces mapirati, također i filtrirat pa ce se prikazat sta zelis */}
          <>
          {products.map((product) => (
            <Link key={product.id} href="/pages/product_info/[id]" as={`/pages/product_info/${product.id}`}>
            <ProductCard naziv={product.title} slika={product.images[0].url} />
            </Link>
              ))}
          </>
        </div> 

      </div>
      
    </div>
  )
}

export default products




