"use client"
import Proba from './components/Proba'
import Link from 'next/link'

export default function Home() {

  return (
    <div className='fixed flex flex-col justify-center items-center h-screen w-full
      custom-img  bg-cover bg-fixed bg-center '>

        <div className="flex items-center justify-center flex-col top-0 left-0 right-0 bottom-0 h-screen w-full bg-white/60 z-[2] ">
          <h2 className="text-5xl p-10  font-bold">DOBRODOŠLI </h2>
          <Link  href="/pages/products" >
            <button className="px-5 py-5 border border-black hover:bg-white transition delay-50 ">ZAPOČNI KUPNJU</button>
          </Link>
        </div>

    </div>
   
  )
}



