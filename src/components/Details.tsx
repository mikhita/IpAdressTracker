import React from 'react'

interface Props {
    ipAdress: string;
    location: string;
    timezone: string;
    isp: string
}

function Details(props: Props) {
    console.log(props)
  return (
    <div className='shadow w-10/12 rounded-2xl flex flex-col items-center  justify-center bg-white xl:w-[80%] mt-20 xl:flex-row xl:h-40 '>
        <div className=' flex basis-1/4 flex-col  align-middle my-2 xl:relative '>
            <p className='text-center font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px] xl:ml-8'>IP Address</p>
            <h2 className=' text-[20px] h-6 xl:w-2/3 xl:text-[30px]  font-[500] xl:h-10 xl:ml-8' >{props.ipAdress}</h2>
        </div>
        <hr className="hidden xl:block xl:w-px xl:h-16 bg-slate-400 "/>
        <div className='flex basis-1/4 flex-col  align-middle xl:relative '>
            <p className='text-center font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px] xl:ml-8'>Location</p>
            <h2 className=' text-[20px h-6] xl:w-2/3 xl:text-[30px] font-[500] xl:h-10 xl:ml-8' >{props.location}</h2>
        </div>
        <hr className="hidden xl:block xl:w-px xl:h-16 bg-slate-400 "/>
        <div className='flex basis-1/4 flex-col  align-middle xl:relative '>
            <p className='text-center font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px] xl:ml-8'>Timezone</p>
            <h2 className='text-[20px h-6] xl:w-2/3 xl:text-[30px] font-[500] xl:h-10 xl:ml-8'>{props.timezone}</h2>
        </div>
        <hr className="hidden xl:block xl:w-px xl:h-16 bg-slate-400 "/>
        <div className='flex basis-1/4 flex-col  align-middle xl:relative '>
            <p className='text-center font-rubik uppercase text-sm text-slate-400 text-[10px] xl:text-left xl:text-[15px] xl:ml-8'>ISP</p>
            <h2 className='text-[20px h-6] xl:w-2/3 xl:text-[30px] font-[500] xl:h-10 xl:ml-8'>{props.isp}</h2>
        </div>
    </div>
  )
}

export default Details