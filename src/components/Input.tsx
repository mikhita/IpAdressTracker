import React from 'react'


interface Props {
    inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmitHandler: (e:React.FormEvent<HTMLFormElement>) => void;

}

function Input(props: Props) {
   
  return (
    <div className='flex w-10/12 justify-center align-middle xl:shrink  mt-7'>
        <form className='flex w-96 justify-center align-middle xl:shrink min-w-[40%] mt-7' onSubmit={props.onSubmitHandler}>
            <input placeholder='Search for any IP address' className='cursor-pointer px-6 py-4 font-rubik text-sm rounded-l-2xl xl:text-xl shrink w-11/12 border-none focus:border-none outline-0'  onChange={props.inputChangeHandler} type="text"/>
            <input type="submit" className='cursor-pointer rounded-r-2xl bg-black w-14 flex justify-center align-middle text-cyan-50 text-3xl' value=">"/>
        </form>
    </div>
  )
}

export default Input