import React from 'react'
import NavPage from '../pages/NavPage'
import img from '../assets/mplogo-removebg-preview.png'

const NavHero = () => {
  return (
    <div className=" w-full h-[18vh] flex justify-evenly  gap-[20vw] bg-white">

    <div className="h-full  gap-1 py-4 flex justify-center items-center">
        <img className='rounded-full' width={96} height={96} src='https://w7.pngwing.com/pngs/586/479/png-transparent-gwalior-government-of-india-raisen-district-government-of-madhya-pradesh-others-food-logo-india-thumbnail.png' alt='logo'/>
        <h1 className='text-3xl font-serif text-blue-800 font-bold '>CitizenHub.Gov.in</h1>
    </div>

    <NavPage/>

    </div>
  )
}

export default NavHero