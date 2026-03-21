import React from 'react'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'

const Manager = () => {
  const [passwords, setPasswords] = useState([])
  const copyRef = useRef()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()
  const onSubmit = (data) => {
    setPasswords([...passwords, data])
    console.log(passwords)
  }
  const handleEdit = (e) => {
    console.log("edit");
  }
  const handleDelete = (e) => {
    console.log("Delete");
  }
  const handleCopy = (text) => {
    console.log(text);
    navigator.clipboard.writeText(text)
  }
  return (
    <div className='text-white min-h-[85%] w-[70%] mx-auto flex flex-col items-center'>
      <form className=' w-full flex flex-col p-4 gap-4' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Enter site url' {...register("url")} className=' w-full bg-slate-800 px-4 py-2 rounded-sm' autoFocus />
        <div className='flex justify-between items-center gap-2'>
          <input type='text' placeholder='Enter Username' {...register("username")} className=' w-full bg-slate-800 px-4 py-2 rounded-sm ' />
          <div className='w-1/3 flex relative'>
            <input type='password' placeholder='Enter Password' {...register("password")} className=' w-full bg-slate-800 px-4 py-2 rounded-sm ' />
            <p className='absolute right-4 bottom-2'>🔥</p>
          </div>
        </div>
        <button type='submit' className='w-1/10 mx-auto flex items-center justify-center gap-2 px-4 py-2  cursor-pointer bg-blue-900 hover:bg-blue-800  text-xl font-semibold border-0  rounded-sm'>
          <lord-icon
            style={{ "width": "25px", "height": "25px", "cursor": "pointer", "color": "white" }}
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            colors="primary:#ffffff">
          </lord-icon>
          <p>Save</p>
        </button>
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
          {passwords.map((item, index) => {
            return <div key={index} className="one flex justify-around px-4 py-2 bg-slate-800 rounded-sm">
              <div className='w-1/3 flex gap-2'>
                <p>{item.url}</p>
                <div onClick={() => handleCopy(item.url)}>
                  <lord-icon
                    style={{ "width": "25px", "height": "25px", "cursor": "pointer", "color": "white" }}
                    src="https://cdn.lordicon.com/iykgtsbt.json"
                    trigger="hover"
                    colors="primary:#ffffff">
                  </lord-icon>
                </div>
              </div>
              <div className='w-1/4 flex gap-2 '>
                <p >{item.username}</p>
                <div onClick={() => handleCopy(item.username)}>
                  <lord-icon
                    style={{ "width": "25px", "height": "25px", "cursor": "pointer", "color": "white" }}
                    src="https://cdn.lordicon.com/iykgtsbt.json"
                    trigger="hover"
                    colors="primary:#ffffff">
                  </lord-icon>
                </div>
              </div>
              <div className='w-1/6 flex gap-2'>
                <p >{"*".repeat(item.password.length)}</p>
                <div onClick={() => handleCopy(item.password)}>
                  <lord-icon
                    style={{ "width": "25px", "height": "25px", "cursor": "pointer", "color": "white" }}
                    src="https://cdn.lordicon.com/iykgtsbt.json"
                    trigger="hover"
                    colors="primary:#ffffff">
                  </lord-icon>
                </div>

              </div>
              <div className='flex gap-2'>
                <p onClick={handleEdit}>
                  <lord-icon
                    src="https://cdn.lordicon.com/gwlusjdu.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ "width": "25px", "height": "25px", "cursor": "pointer" }}>
                  </lord-icon>
                </p>
                <p onClick={handleDelete}>
                  <lord-icon
                    src="https://cdn.lordicon.com/skkahier.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ "width": "25px", "height": "25px", "cursor": "pointer" }}>
                  </lord-icon>
                </p>
              </div>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default Manager