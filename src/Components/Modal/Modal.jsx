import React, {useEffect, useState } from 'react'
import { FaWindowClose } from "react-icons/fa";
import 'animate.css';
import { products } from '../../const/utils/app'
const Modal = ({data , handlemodal}) => {
  const {id , modalstate} = data
      const  findData = products.find((item)=>{
        return item.id === data.id
      })
     
     if(findData){
      window.scrollTo({top:0 , behavior:'smooth'})
     }
   
  return (
    <>
    {modalstate && 
    <div className={`fixed top-56 w-3/4 bg-gradient shadow-primary-shadow flex justify-around animate__animated animate__fadeInDown`}>
         <div className=' border border-slate-800 my-12 ml-4 shadow-custom-shadow flex flex-col items-center'>
           <img src={findData.image} className='w-72 h-80 object-contain' alt="" />
         </div>
         <div className='flex flex-col justify-center '>
          <h1 className='text-4xl font-thin text-white'>{findData.name}</h1>
          <h1 className='text-xl font-thin text-white'>ColorsAvailable</h1>
         <div className='flex'>
          {findData &&

           findData.colorsAvailable.map((item,index)=>{
              return(
                <div key={index} className={`w-10 h-10 `} style={{backgroundColor : item}}></div>
              )
            })
          }
       
         </div>
         <h1 className='text-3xl font-thin'>Price:${findData.price}</h1>
         <button  className='w-28 h-10 bg-blue-500 mt-6  rounded-xl hover:bg-black hover:text-blue-400 hover:border-2 border-blue-400 '>Buy Now</button>
         <button  className='w-36 h-10 bg-black mt-6  rounded-xl text-blue-400 border-blue-400 hover:bg-black hover:text-blue-400 hover:border-2  '>Buy In Installments</button>
         <button className='absolute top-0 left-0 w-10 h-10 hover:bg-black hover:border border-blue-400' onClick={handlemodal} ><FaWindowClose className='w-full h-full  text-blue-500 '/></button>
         </div>
      </div>}
    </>
  )
}

export default Modal