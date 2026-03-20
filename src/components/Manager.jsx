import React from 'react'
import { useForm } from 'react-hook-form'

const Manager = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className='text-white min-h-[85%] w-[70%] mx-auto flex flex-col items-center'>
      <form className=' w-full flex flex-col p-4 gap-4' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Enter site url' {...register("url")} className=' w-full bg-slate-800 px-4 py-2 rounded-sm' autoFocus />
        <div className='flex justify-between items-center gap-2'>
          <input type='text' placeholder='Enter Username' {...register("username")} className=' w-full bg-slate-800 px-4 py-2 rounded-sm ' />
          <div className='w-1/3 flex relative'>
            <input type='password' placeholder='Enter Password' {...register("password")} className=' w-full bg-slate-800 px-4 py-2 rounded-sm ' />
            <p className='absolute right-4 bottom-2'>👁️</p>
          </div>
        </div>
        <input className='px-4 py-2 cursor-pointer w-1/6 mx-auto  bg-blue-900 hover:bg-blue-800 font-bold border-0  rounded-sm' type="submit" />
      </form>
      <div className="passwordContainer flex flex-col w-full gap-3 p-4 ">
        <p className='font-bold text-xl text-slate-200'>Your Passwords</p>
        <div className="head flex justify-around px-4 py-2 bg-blue-900 rounded-sm font-bold">
          <p className='w-1/3'>Site</p>
          <p className='w-1/4 '>Username</p>
          <p className='w-1/6'>password</p>
          <p>Actions</p>
        </div>
        <div className='flex flex-col gap-3 overflow-auto h-80'>
          <div className="one flex justify-around px-4 py-2 bg-slate-800 rounded-sm">
            <p className='w-1/3'>www.alsjdfl.alsjdfl.comm</p>
            <p className='w-1/4 '>Username</p>
            <p className='w-1/6'>lkasdjflajs;dlf</p>
            <div className='flex gap-2'>
              <p>del</p>
              <p>edit</p>
            </div>
          </div>

  

        </div>
      </div>
    </div>
  )
}

export default Manager