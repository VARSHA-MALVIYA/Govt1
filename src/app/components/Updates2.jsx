import React from 'react'

const Updates2 = ({title,subTitle}) => {
  return (
    <div className='h-[70vh] w-[15vw] mt-8 ml-4 flex items-center flex-col'>
        <h1 className='font-semibold text-xl '>{title}</h1>
        <div className='h-1 rounded-full w-[15vw] m-2 bg-gray-400'></div>
        <div className='text-white bg-gray-500 p-2 mt-1 font-semibold w-full'>
         {subTitle}
        </div>
        <div className='h-[43vh] w-[15vw] border border-gray-400'>
          <img className='w-full' src='https://www.india.gov.in/sites/upload_files/npi/files/sveep.jpg'/>
          <p className='text-xs p-2'>flagship program of the ECI for voter education, spreading voter awareness & promoting voter literacy in India</p>
          <img className='w-full' src='https://www.india.gov.in/sites/upload_files/npi/files/health_id.jpg'/>
          <p className='text-xs p-2'>Health ID - Key to your Digital Healthcare Journey</p>
        </div>
   </div>
  )
}

export default Updates2