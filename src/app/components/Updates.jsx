'use client'

import React from 'react';
import { HiRocketLaunch } from "react-icons/hi2";
import { HiOutlineLink } from "react-icons/hi";
import Link from "next/link";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { FaUncharted } from "react-icons/fa";

const Updates = ({title,subTitle,content}) => {

  return (
    <div className='h-[50vh] ml-4 w-[30vw] flex flex-col justify-center items-center '>
       <h1 className='font-semibold text-xl m-2'>{title}</h1>
       <div className='h-1 rounded-full w-[30vw] bg-gray-400'></div>
       <div className='text-white bg-gray-500 p-2 mt-3 font-semibold w-full'>
         {subTitle}
       </div>

       <div className='h-auto min-h-60 w-[30vw] border border-gray-400'>
          {
                  content?.length ?
                  
                  <div  className="w-full px-1" >    
                      {
                          content &&
                              content.map((update, index) => (
                                  <div key={index} className="flex ">
                                      <RiArrowRightDoubleFill className=" h-[25px] w-[25px] " />
                                      <div dangerouslySetInnerHTML={{ __html: update.content }} />
                                  </div>
                          ))
                      }
                      
                  </div>
                  
                  :
                  
                  // if there is no content then show {not found}
                  <div className="flex w-full gap-2 py-1 border-b ">
                          <RiArrowRightDoubleFill className=" h-[25px] w-[25px] " />
                          <p className="text-[13px] leading-[1.7] ">
                              रिकॉर्ड नहीं मिला
                          </p>
                  </div>
          } 
       </div>

    </div>
  )
}

export default Updates