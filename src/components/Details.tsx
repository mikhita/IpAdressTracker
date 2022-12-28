import React from 'react'

function Details() {
  return (
    <div className='shadow w-10/12 rounded-2xl flex flex-col justify-center bg-white xl:w-[80%] mt-8 xl:flex-row xl:h-40 '>
        <div className='flex flex-col justify-center align-middle text-center my-2 xl:mr-16'>
            <p className='font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px]'>IP Address</p>
            <h2 className=' text-[20px] font-[500]'>192.212.174.101</h2>
        </div>
        <hr className="hidden xl:block xl:w-px xl:h-16 bg-slate-400 relative top-14"/>
        <div className='flex flex-col justify-center align-middle text-center xl:mx-16'>
            <p className='font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px]'>Location</p>
            <h2 className=' text-[20px] font-[500]'>Brooklyn, NY 10001</h2>
        </div>
        <hr className="hidden xl:block xl:w-px xl:h-16 bg-slate-400 relative top-14"/>
        <div className='flex flex-col justify-center align-middle text-center xl:mx-16'>
            <p className='font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px]'>Timezone</p>
            <h2 className=' text-[20px] font-[500]'>UTC -05:00</h2>
        </div>
        <hr className="hidden xl:block xl:w-px xl:h-16 bg-slate-400 relative top-14"/>
        <div className='flex flex-col justify-center align-middle text-center xl:ml-16'>
            <p className='font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px]'>ISP</p>
            <h2 className=' text-[20px] font-[500]'>SpaceX Starlink</h2>
        </div>
    </div>
  )
}

export default Details