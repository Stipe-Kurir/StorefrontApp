"use client"

import Link from 'next/link'

export default function Home() {

  return (
    <div className='flex justify-center items-center 
      h-screen custom-img bg-cover bg-fixed bg-center '>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/60 z-[2] flex justify-center items-center">
          <div className='p-5 z-[2] flex flex-col  justify-center items-center '>
            <h2 className="text-5xl p-10 pb-7 font-bold">WELCOME</h2>
            <Link className='bg-grey-300'  href="/pages/products" >
              <button className="px-5 py-5 border border-black hover:bg-white transition delay-50  ">BROWSE PRODUCTS</button>
            </Link>
          </div>
        </div>
    </div>
  
  )
}
