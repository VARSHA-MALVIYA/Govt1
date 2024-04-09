'use client'
import React from 'react';
import { useState } from 'react';
import {  FaArrowCircleLeft,FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({slides}) => {

  let [current,setCurrent]= useState();

  let previousSlide = () =>{
    if (current===0) setCurrent(slides.length-1);
    else setCurrent(current-1);
  }

  let nextSlide = () =>{
    if (current===slides.length-1) setCurrent(0);
    else setCurrent(current + 1);
  }


  return (
    <div>
        <div className='h-[7vh] bg-blue-500 text-white text-sm flex justify-evenly items-center'>
          <p>| Birth Certificate |</p>
          <p>| Driving License |</p>
          <p>| Pan card |</p>
        </div>

        <div className='overflow-hidden relative'>
            <div className ={`flex transition ease-out duration-75`}
            style={
              {
                transform :`translateX(-${current*100}%)`
              }
            }
            >
              {slides.map((s) => {
                  return <img src={s}/>;
                })}
            </div>

            <div className='absolute top-0 h-full w-full justify-between items-center flex text-4xl  px-6 '>
              <button>
                <FaArrowCircleLeft onClick={previousSlide}/>
              </button>

              <button onClick={nextSlide}>
                <FaArrowCircleRight/>
              </button>
            </div>

            <div className='absolute py-4 bottom-0 flex justify-center gap-3 w-full'>
                {
                  slides.map((s,i) => {
                    return(
                      <div 
                       onClick={ () => {
                        setCurrent(i);
                       }}
                       key={"circle" + i}
                       className={`h-5 w-5 rounded-full 
                       ${
                        i== current ? "bg-black" : "bg-gray-500"
                       }`}
                      ></div>
                    );
                  })
                }
            </div>

        </div>
    </div>
  )
}

export default Slider