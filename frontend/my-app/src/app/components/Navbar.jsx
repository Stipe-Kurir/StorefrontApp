"use client"

import React from 'react'
import Link from 'next/link'
import {AiOutlineMenu,AiOutlineClose}  from 'react-icons/ai'
import { useState } from 'react'
import { usePathname } from 'next/navigation'


const Navbar = () => {


  const pathname=usePathname()

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
  const [current,setCurrent]=useState("Home")

  
  const changeMenu=()=>{
    setMenu(!menu)
  }

 console.log(pathname)


  return (
    <div className='fixed left-0 top-0 w-full h-20 z-50  bg-white'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 gap-2 '>
      
        <Link href="/">
        <img className='pt-2 pb-2 w-[200px]' src="https://res.cloudinary.com/zoominfo-com/image/upload/w_70,h_70,c_fit/medusajs.com"/>
        </Link>
    
       
        <ul className='hidden sm:flex'>
       
            {navLink.map(({link,name})=>(
            <li onClick={()=>setCurrent(name)}  key={name} 
                className="p-4 hover:underline">
              <Link
               key={name}
               href={link}
               className={`${pathname === link  ? 'underline': ''}`}
               >{name}</Link>
               </li>
          ))}  

        </ul> 

        {/*MOBILE BUTTON*/ }
        <div className="block sm:hidden z-10">
          {
            menu ? <AiOutlineClose size={20} className="text-black cursor-pointer" onClick={changeMenu}/>
              :
              <AiOutlineMenu size={20} className="text-black cursor-pointer" onClick={changeMenu} />
          }
        </div>

         {/* Mobile menu*/}
          <div className={
            menu ? 
            "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center text-black  ease-in duration-300" 
            :
            "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center text-black ease-in duration-300"
          }
            >
            <ul>

            {navLink.map(({link,name})=>(
              <li onClick={()=>{changeMenu();setCurrent(name)}}  key={name} 
                  className="p-4 hover:underline text-4xl  text-black">
                <Link
                key={name}
                href={link}
                className={`${pathname === link  ? 'underline': ''}`}
                >{name}</Link>
                </li>
            ))}  
            
            </ul>


          </div>
      </div>
    </div>
  )
}

export default Navbar
