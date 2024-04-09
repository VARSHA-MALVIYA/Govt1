import React from 'react'
import Slider from '../components/Slider'
import Link from 'next/link'

const NavPage = () => {
  return (
    <div className='flex gap-10 items-center'>

        <div className='flex flex-col items-center'>
        <div className='h-15 w-15 rounded-full bg-slate-200 hover:bg-slate-300 px-2 py-2'>
          <div className='h-13 w-13 rounded-full bg-slate-300 hover:bg-slate-400'>
            <img src='https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav1.png' alt='topic'/>
          </div>
        </div>
        <h1 className='text-center text-xs text-slate-400'>TOPICS</h1>
        </div>

        <div className='flex flex-col items-center'>
        <div className='h-15 w-15 rounded-full bg-slate-200 hover:bg-slate-300 px-2 py-2'>
          <div className='h-13 w-13 rounded-full bg-slate-300 hover:bg-slate-400'>
            <img src='https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav2.png' alt='services'/>
          </div>
        </div>
        <h1 className='text-xs text-center text-slate-400'>SERVICES</h1>
        </div>

        <div className='flex flex-col items-center'>
        <div className='h-15 w-15 rounded-full bg-slate-200 hover:bg-slate-300 px-2 py-2'>
          <div className='h-13 w-13 rounded-full bg-slate-300 hover:bg-slate-400'>
            <img src='https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav3.png' alt='my government'/>
          </div>
        </div>
        <h1 className='text-center text-xs text-slate-400'>MY GOVERNMENT</h1>
        </div>

        <div className='flex flex-col items-center'>
        <div className='h-15 w-15 rounded-full bg-slate-200 hover:bg-slate-300 px-2 py-2'>
          <div className='h-13 w-13 rounded-full bg-slate-300 hover:bg-slate-400'>
            <img src='https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav4.png' alt='people groups'/>
          </div>
        </div>
        <h1 className='text-center text-xs text-slate-400'>PEOPLE GROUPS</h1>
        </div>

        <div className='flex flex-col items-center'>
                <div className='h-15 w-15 rounded-full bg-slate-200 hover:bg-slate-300 px-2 py-2'>
                    <div className='h-13 w-13 rounded-full bg-slate-300 hover:bg-slate-400'>
                        <img src='https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav5.png' alt='INDIA AT A GLANCE'/>
                    </div>
                </div>
                <h1 className='text-center text-xs text-slate-400'>INDIA AT A GLANCE</h1>
        </div>

        <Link 
         href='/login'
        className='font-bold hover:bg-blue-700 h-12 mr-5 w-20 bg-blue-500 text-white p-2 rounded-md text-xl'>Login</Link>
       
    </div>
  )
}

export default NavPage