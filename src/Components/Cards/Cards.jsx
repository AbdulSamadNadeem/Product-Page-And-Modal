import React, { useEffect, useState } from 'react'
import { products } from '../../const/utils/app'
import Modal from '../Modal/Modal'
import 'animate.css';



const Cards = () => {
const [modalData , setmodalData] = useState({id:null , modalstate:false})
const [isBlur , setIsblur] = useState(false)

const data=(id)=>{
  setmodalData({id , modalstate:true})
  setIsblur(true)

}

const closeModal =()=>{
  setmodalData({modalstate:false})
  setIsblur(false)
}


  return (
    <>
     <h1 className='text-6xl text-center text-white font-mono '>My Products</h1>
    <div className={`flex flex-wrap justify-around gap-10 mt-10`}>
       {
          products.map((item)=>{
            return(
                <>
                 <div key={item.id} className={`w-72 flex flex-col justify-between items-center border-2 border-blue-400 rounded-xl hover:transition-transform hover:scale-105 duration-300 ${isBlur ? 'blur-sm' : ''} animate__animated animate__fadeIn`}>
                <div className='mt-4 rounded-xl drop-shadow-custom'>
                 <img src={item.image} alt="" className='w-52 h-52' />
                 </div>
                 <div>
                 <h1 className='text-2xl text-center text-white underline'>{item.name}</h1>
                  <h2 className='text-center text-xl text-white pt-6'>${item.price}</h2>
                 <p className='text-center text-lg text-white pt-4'>{item.description}</p>
                </div>
                <button onClick={()=>data(item.id)}  className='w-28 h-10 bg-blue-500 mt-6 mb-6 rounded-xl hover:bg-black hover:text-blue-400 hover:border-2 border-blue-400 '>Click Me</button>
                 </div> 
                </>
            )
          })
       }
       <Modal data={modalData} handlemodal={closeModal}/>
    </div>
    </>
  )
}

export default Cards



