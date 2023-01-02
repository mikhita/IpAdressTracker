import React from 'react'
import Arrow from "../assets/icon-arrow.svg"

interface Props {
    stringProp: string;
    numberProp: number;
    
}

function Input(props: Props) {
   
  return (
    <div className='flex w-80 justify-center align-middle xl:shrink min-w-[40%] mt-7'>
        <input  placeholder='Search for any IP address' className='px-6 py-4 font-rubik text-sm rounded-l-2xl xl:text-xl shrink w-11/12 border-none focus:border-none outline-0'/>
        <div className='rounded-r-2xl bg-black w-14 flex justify-center align-middle'><img  src={Arrow} alt="" className='w-3 h-3 self-center'/></div>
    </div>
  )
}

export default Input