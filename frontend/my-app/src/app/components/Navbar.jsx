"use client"

import React from 'react'
import Link from 'next/link'
import {AiOutlineMenu,AiOutlineClose}  from 'react-icons/ai'
import { useState } from 'react'
import { useRouter } from 'next/navigation'




const Navbar = () => {

  const router=useRouter()

  const navLink=[
    {
      name:"Home",
      link:"/",
    },
    {
      name:"Products",
      link:"/pages/products",
    },
  ];

  const [menu,setMenu]=useState(false)
  const [current,setCurrent]=useState(1)


  
  const changeMenu=()=>{
    setMenu(!menu)
  }

  console.log(router.pathname)

  return (
    <div className='fixed left-0 top-0 w-full h-20 z-50 bg-red-400'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 '>

        <Link href="/">
        <h1 className='font-bold text-4xl '>E-SHOP</h1>
        </Link>
        
        <ul className='hidden sm:flex'>
       
           {/* {navLink.map(({link,name})=>(
            <li  key={name} 
                className="p-4 hover:underline">
              <Link
               key={name}
               href={link}
               className={` ${router.pathname === link  ? ' border border-black': ''}`}
               >{router.pathname} 2222</Link>
               </li>
          ))}  */}
          <li className="p-4 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:underline">
            <Link href="/pages/products">Products</Link>
          </li>
        </ul>

        {/*MOBILE BUTTON*/ }
        <div className="block sm:hidden z-10">
          {
            menu ? <AiOutlineClose size={20} className="text-white cursor-pointer" onClick={changeMenu}/>
              :
              <AiOutlineMenu size={20} className="text-black cursor-pointer" onClick={changeMenu} />
          }
        </div>

        {/* Mobile menu*/}
        <div className={
          menu ? 
          "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white ease-in duration-300" 
           :
          "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white ease-in duration-300"
        }
          >
          <ul>
          <li className="p-4 text-4xl hover:text-gray-500 ">
          <Link href="/">
            <button onClick={changeMenu}>
              Home
            </button>
            </Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500 ">
           <Link href="/pages/products">
              <button onClick={changeMenu}>
                Products
              </button>
            </Link>
          </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
