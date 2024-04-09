import React from 'react'

const Midbar = () => {
  return (
    <div className='absolute text-white flex gap-60'>
        <div className='h-full w-[40vw] p-5 flex flex-col items-center'>
                 <h2 className="text-3xl font-serif">Be involved</h2>
                  <h4 className='text-xl  font-extralight'>collaborate, share and influence government policy</h4>

                  <div >
                    <div className='flex  p-5'>
                      <img height={45} width={45} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNtbmHjfob-LYl0B1eo14QoAUuKCHO6BchNvEm1zUnw&s"/>
                      <a className="hover:underline" href="https://www.mygov.in/">Create a logo for 46th Wordls Heritage Committee Meeting (46th WHCM)</a>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center'>
                      <img height={80} width={80} src="https://png.pngtree.com/png-vector/20220726/ourmid/pngtree-check-vote-icon-png-image_6061322.png"/>
                      <a className="hover:underline" href="https://www.mygov.in/">Vote for your favourite creator now</a>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center'>
                      <img className='rounded-full' height={65} width={65} src="https://www.freeiconspng.com/thumbs/vote-icon/vote-icon-3.jpg"/>
                      <a className="hover:underline" href="https://www.mygov.in/">Global Cyber Challenge 2017 - Grand Finale</a>
                    </div>
                  </div>
              </div>



              <div>
                  <div className='flex items-center gap-5 p-5'>
                    <img className='rounded-full' height={45} width={45} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhHwpFZZV_snCG6-xDii2wRC0Vk5JV2KhbmZXeuUWGg&s"/>
                    <a className='hover:underline text-xl' href="#">Feedback</a>
                  </div>

                  <div className='flex items-center gap-5 p-5'>
                    <img className='rounded-full' height={45} width={45} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fZiavzg7AIZdPN75YC0jS54UPgTIijeQD95-K-fxyw&s"/>
                    <a className='hover:underline text-xl' href="#">Contact Us</a>
                  </div>

                  <div className='flex items-center gap-5 p-5'>
                    <img className='rounded-full' height={45} width={45} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnH3ugBPZRCDtaFLDEPTX84v4JOXfcJaXfFOv6JD0Dyg&s"/>
                    <a className='hover:underline text-xl' href="#">Share this page</a>
                  </div>

                  <div className='flex items-center gap-5 p-5'>
                    <img className='rounded-full' height={45} width={45} src="https://img.freepik.com/premium-psd/3d-icon-social-media-app_23-2150049613.jpg"/>
                    <a className='hover:underline text-xl' href="#">Twitter</a>
                  </div>

              </div>

        </div>
  )
}

export default Midbar