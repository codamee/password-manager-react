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
    <div className='text-white min-h-[85%] bg-mauve-700 w-[70%] mx-auto flex flex-col items-center'>
      <form className=' w-full flex flex-col p-4 gap-4' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Enter site url' {...register("url")} className=' w-full bg-red-400 px-4 py-2 rounded-sm' autoFocus />
        <div className='flex justify-between items-center gap-2'>
          <input type='text' placeholder='Enter username url' {...register("username")} className=' w-full bg-red-400 px-4 py-2 rounded-sm ' />
          <div className='w-1/3 flex relative'>
            <input type='password' placeholder='Enter username url' {...register("password")} className=' w-full bg-red-400 px-4 py-2 rounded-sm ' />
            <p className='absolute right-4 bottom-2'>👁️</p>
          </div>
        </div>
        <input className='px-4 py-2 cursor-pointer w-1/6 mx-auto border bg-blue-200 text-black  rounded-sm' type="submit" />
      </form>
      <div className="passwordContainer bg-amber-400">
        <p>Your Passwords</p>
        <div className="head flex">
          <p>Site</p>
          <p>Username</p>
          <p>Password</p>
          <p>Actions</p>
        </div>
        <div>
          {/* <div className="one flex">
            <p>www.yuturbe.come</p>
            <p>Username</p>
            <p>Password</p>
            <p>Actions</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Manager