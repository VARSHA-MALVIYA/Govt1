import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-x-10 text-gray-300 relative'>
        <div className='absolute top-0 h-full w-[50vh] p-10 m-10'>
            <h1 className='tetx-4xl font-serif text-white'>Information Related To</h1>
            <p className='text-xs pt-3'>Agriculture</p>
            <p className='text-xs pt-2'>Commerce</p>
            <p className='text-xs pt-2'>Defence</p>
            <p className='text-xs pt-2'>Environment & Forest</p>
            <p className='text-xs pt-2'>Food and Public Distribution</p>
            <p className='text-xs pt-2'>Governance & Administration</p>
            <p className='text-xs pt-2'>Housing</p>
            <p className='text-xs pt-2'>Industries</p>
            <p className='text-xs pt-2'>Information and BroadCasting</p>
            <p className='text-xs pt-2'>Law & Justice</p>
            <p className='text-xs pt-2'>Rural</p>
            <p className='text-xs pt-2'>Social Development</p>
            <p className='text-xs pt-2'>Travel & Tourism</p>
        </div>

        <div className='absolute top-0 h-full w-[50vh] pt-20 ml-[35%]'>
            <h1 className='tetx-4xl font-serif text-white'>About the Government</h1>
            <p className='text-xs pt-3'>Constitution of India</p>
            <p className='text-xs pt-2'>Government Directory</p>
            <p className='text-xs pt-2'>Indian Parliament</p>
            <p className='text-xs pt-2'>Publications</p>
            <p className='text-xs pt-2'>Who's who</p>
            <p className='text-xs pt-2'>President of India</p>
            <p className='text-xs pt-2'>Members of Parliament</p>
        </div>

        <div className='flex flex-col ml-[70%] pt-20'>
            <img src='https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/img-ftr-open-data-portal.png'/>
            <img src='https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/pib.png'/>
        </div>
    </div>
  )
}

export default Footer