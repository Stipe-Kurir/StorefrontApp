import React from 'react'
import {AiOutlineClose}  from 'react-icons/ai'

const Modal = ({setModal,modal}) => {
  return (
    <div className='fixed h-[100%] w-[100%] overflow-x-hidden bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50'>
    <div className='fixed top-[300px]  w-[200px] h-[150px] sm:w-[300px] sm:h-[200px] bg-white flex flex-col text-[12px] sm:text-[16px]'>
             <div className='w-full flex justify-end pt-1 bg-slate-300 '>
             <AiOutlineClose size={20} className="text-black cursor-pointer " onClick={()=>setModal(!modal)}/>
              </div> 
              <div className='w-full h-full flex justify-center items-center'>
                Product added to cart
              </div>
              <div className='w-full flex justify-center pt-2 pb-2'>
                <button className=" pt-[10px] pb-[10px] p-[20px] font-bold  bg-slate-300 "onClick={()=>setModal(!modal)}>Ok</button>
                </div>
    </div>  
  </div> 
  )
}

export default Modal
