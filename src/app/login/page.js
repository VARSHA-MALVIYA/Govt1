'use client'

// import { useRouter } from "next/router"
// import logo from '@/assets/mpLogo.png'
import SsoAuth from "../../../npm"

const Login = () => {
  return (
	<div class="flex flex-wrap">
    
  <div class="flex w-full flex-col md:w-1/2">
    
    <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
		<p className="text-3xl text-center">Log in to your account</p>
      

    <SsoAuth></SsoAuth>      
      
    </div>
  </div>
  
  <div class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
    <div class="absolute bottom-0 z-10 px-8 text-white opacity-100">
         
    </div>
    <img class="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1585744945554-5df801d2b680?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  </div>
</div>

  )
}

export default Login