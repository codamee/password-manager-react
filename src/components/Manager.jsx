import React from 'react'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'

const Manager = () => {
  const [passwords, setPasswords] = useState([])
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()
  const onSubmit = (data) => {
    setPasswords([...passwords, data])
  }
  const handleEdit = (index) => {
    const itemToEdit = passwords[index];
    setValue("url", itemToEdit.url);
    setValue("username", itemToEdit.username);
    setValue("password", itemToEdit.password);
    const newArray = passwords.filter((item, i) => i !== index)
    setPasswords(newArray)
  }
  const handleDelete = (index) => {
    const newArray = passwords.filter((item, i) => i !== index)
    setPasswords(newArray)
  }
  const handleCopy = (text) => {
    console.log(text);
    navigator.clipboard.writeText(text)
  }

  return (
    <div className='text-white min-h-[85%] w-[70%] mx-auto flex flex-col items-center'>
      <form className='w-full flex flex-col p-4 gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <input
            type='text'
            placeholder='Enter site url'
            {...register("url", {
              required: "URL is required",
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 50, message: "Max length is 50" }
            })}
            className='w-full bg-slate-800 px-4 py-2 rounded-sm'
            autoFocus
          />
          {errors.url && <span className='text-red-500 text-xs px-1'>{errors.url.message}</span>}
        </div>

        <div className='flex justify-between items-start gap-2'>
          <div className="flex flex-col gap-1 w-full">
            <input
              type='text'
              placeholder='Enter Username'
              {...register("username", {
                required: "Username is required",
                minLength: { value: 3, message: "Min length is 3" }
              }

              )}
              className='w-full bg-slate-800 px-4 py-2 rounded-sm'
            />
            {errors.username && <span className='text-red-500 text-xs px-1'>{errors.username.message}</span>}
          </div>

          <div className='w-1/3 flex flex-col gap-1 relative'>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter Password'
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 chars" }
                })}
                className='w-full bg-slate-800 px-4 py-2 rounded-sm'
              />
              <p onClick={togglePasswordVisibility} className='absolute right-2 bottom-1'>
                <lord-icon
                  src="https://cdn.lordicon.com/dicvhxpz.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ "width": "25px", "height": "25px", "cursor": "pointer" }}>
                </lord-icon>
              </p>
            </div>
            {errors.password && <span className='text-red-500 text-xs px-1'>{errors.password.message}</span>}
          </div>
        </div>

        <button type='submit' className='w-1/10 mx-auto flex items-center justify-center gap-2 px-4 py-2 cursor-pointer bg-blue-900 hover:bg-blue-800 text-xl font-semibold border-0 rounded-sm'>
          <lord-icon
            style={{ "width": "20px", "height": "20px", "cursor": "pointer" }}
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            colors="primary:#ffffff">
          </lord-icon>
          <p>Save</p>
        </button>
      </form>
      <div className="passwordContainer flex flex-col w-full gap-3 p-4 ">
        <p className='font-bold text-xl text-slate-200'>Your Passwords</p>
        <div className='flex flex-col gap-3 overflow-auto h-80'>
          {passwords.length === 0 ? <div className='text-center font-semibold m-4'>No passwords to show🤷‍♀️</div> :
            <div className="head flex justify-around px-4 py-2 bg-blue-900 rounded-sm font-bold">
              <p className='w-1/3'>Site</p>
              <p className='w-1/4 '>Username</p>
              <p className='w-1/6'>password</p>
              <p>Actions</p>
            </div>
          }
          {passwords.map((item, index) => {
            return <div key={index} className="one flex justify-around items-center px-4 py-2 bg-slate-800 rounded-sm">
              <div className='w-1/3 flex gap-2 items-center '>
                <p>{item.url}</p>
                <div onClick={() => handleCopy(item.url)}>
                  <lord-icon
                    style={{ "width": "20px", "height": "20px", "cursor": "pointer", "color": "white" }}
                    src="https://cdn.lordicon.com/iykgtsbt.json"
                    trigger="hover"
                    colors="primary:#ffffff">
                  </lord-icon>
                </div>
              </div>
              <div className='w-1/4 flex gap-2 items-center '>
                <p >{item.username}</p>
                <div onClick={() => handleCopy(item.username)}>
                  <lord-icon
                    style={{ "width": "20px", "height": "20px", "cursor": "pointer", "color": "white" }}
                    src="https://cdn.lordicon.com/iykgtsbt.json"
                    trigger="hover"
                    colors="primary:#ffffff">
                  </lord-icon>
                </div>
              </div>
              <div className='w-1/6 flex gap-2 items-center'>
                <p >{"*".repeat(item.password.length)}</p>
                <div onClick={() => handleCopy(item.password)}>
                  <lord-icon
                    style={{ "width": "20px", "height": "20px", "cursor": "pointer", "color": "white" }}
                    src="https://cdn.lordicon.com/iykgtsbt.json"
                    trigger="hover"
                    colors="primary:#ffffff">
                  </lord-icon>
                </div>

              </div>
              <div className='flex gap-2 items-center'>
                <p onClick={() => { handleEdit(index) }}>
                  <lord-icon
                    src="https://cdn.lordicon.com/gwlusjdu.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ "width": "20px", "height": "20px", "cursor": "pointer" }}>
                  </lord-icon>
                </p>
                <p onClick={() => { handleDelete(index) }}>
                  <lord-icon
                    src="https://cdn.lordicon.com/skkahier.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ "width": "20px", "height": "20px", "cursor": "pointer" }}>
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