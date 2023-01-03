import React from 'react'

interface Props {
    ipAdress: string
}

function Details(props: Props) {
  return (
    <div className='shadow w-10/12 rounded-2xl flex flex-col  justify-center bg-white xl:w-[80%] mt-20 xl:flex-row xl:h-40 '>
        <div className='flex basis-1/4 flex-col  align-middle my-2 xl:relative xl:top-11'>
            <p className='font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px] xl:ml-8'>IP Address</p>
            <h2 className='w-2/3 text-[30px] font-[500] h-10 xl:ml-8' >{props.ipAdress}</h2>
        </div>
        <hr className="hidden xl:block xl:w-px xl:h-16 bg-slate-400 relative top-14"/>
        <div className='flex basis-1/4 flex-col  align-middle xl:relative xl:top-11'>
            <p className='font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px] xl:ml-8'>Location</p>
            <h2 className=' w-2/3 text-[30px] font-[500] h-10 xl:ml-8' >Brooklyn, NY 10001</h2>
        </div>
        <hr className="hidden xl:block xl:w-px xl:h-16 bg-slate-400 relative top-14"/>
        <div className='flex basis-1/4 flex-col  align-middle xl:relative xl:top-11'>
            <p className='font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px] xl:ml-8'>Timezone</p>
            <h2 className='w-2/3 text-[30px] font-[500] h-10 xl:ml-8'>UTC -05:00</h2>
        </div>
        <hr className="hidden xl:block xl:w-px xl:h-16 bg-slate-400 relative top-14"/>
        <div className='flex basis-1/4 flex-col  align-middle xl:relative xl:top-11'>
            <p className='font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px] xl:ml-8'>ISP</p>
            <h2 className='w-2/3 text-[30px] font-[500] h-10 xl:ml-8'>SpaceX Starlink</h2>
        </div>
    </div>
  )
}

export default Details