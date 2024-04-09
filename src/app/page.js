// working as home page of website 
'use client'

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Midbar from "./components/Midbar";
import Midlogo from "./components/Midlogo";
import NavHero from "./components/NavHero";
import Slider from "./components/Slider";
import Updates from "./components/Updates";
import Updates2 from "./components/Updates2";


export default function Home() {


  const [newsContent,setNewsContent] = useState([])
  const [notification,setNotification] = useState([])

  useEffect(()=>{
    fetchNews()
    fetchNotification()
  },[])

  let slides= [
      "https://www.india.gov.in/sites/upload_files/npi/files/telemanas.jpg",
      "https://www.india.gov.in/sites/upload_files/npi/files/chakshu.jpg",
      "https://cbpssubscriber.mygov.in/assets/uploads/flYHd7E7b2W2XRtP?54",
      "https://www.india.gov.in/sites/upload_files/npi/files/Common-Fellowship-Portal.jpg",
      "https://www.india.gov.in/sites/upload_files/npi/files/ecisveep.jpg",
      "https://www.india.gov.in/sites/upload_files/npi/files/voter_information_services.jpg",
  ]

  const fetchNews = async() => {  
    let res = await fetch('https://rtvsso.onrender.com/api/v1/broadcast/getnews',{
      method:"POST",
      credentials:'include',
      mode:"cors",
      headers:{
        'Content-Type' : 'application/json'
      }
    })

    if(res.ok)
    {
      let data = await res.json()
      console.log(data)
      setNewsContent(data)
    }
    else{
      alert('error in sendPostNewsReq')
    }
  }

  const fetchNotification = async() => {  
    let res = await fetch('https://rtvsso.onrender.com/api/v1/broadcast/getnotification',{
      method:"POST",
      credentials:'include',
      mode:"cors",
      headers:{
        'Content-Type' : 'application/json'
      }
    })

    if(res.ok)
    {
      let data = await res.json()
      console.log(data)
      setNotification(data)
    }
    else{
      alert('error in fetchNotification')
    }
  }

  return (
    <div className=" h-[200vh] w-full ">
      <NavHero />

      <div className="w-full m-auto">
        <Slider slides={slides}/>
      </div>

      <div className="flex flex-col ">
      <div className="flex gap-x-7 justify-center ">
          <Updates title='News Highlights' subTitle='News & press Release' content={newsContent} />
          <Updates title='Most Requested Information & Forms' subTitle='Notification' content={notification}/>
          <Updates2 title='Activities & Initiatives' subTitle='New Thoughts'/>
        </div>      
    </div>

        <div className="h-[50vh] w-full bg-blue-600 relative">
          <Midbar/>
        </div>

        <div className="h-[40vh] w-full">
            <Midlogo/>
        </div>

        <div className="h-10 w-full bg-slate-600 text-xs font-serif flex text-white items-center justify-center">
         <pre className="flex ">
         <p>About Us |</p>
          <p> Contact Us |</p>
          <p> Feedback |</p>
          <p> Visitors Summary |</p>
          <p> Help |</p>
          <p> Link to Us |</p>
          <p> Newsletter |</p>
          <p> Tell a Friend |</p>
          <p> Website Policy |</p>
          <p> Sitemap </p>
         </pre>
        </div>
        <div className="h-[30vw] w-full bg-black">
         <Footer/>
        </div>
        <div className="h-7 w-full bg-blue-500">
            <p className="text-white text-center">@copyright 2024</p>
        </div>
   </div> 
  );

  

}
