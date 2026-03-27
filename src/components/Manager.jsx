import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';

const Manager = () => {
  const [passwords, setPasswords] = useState([])
  const [showPassword, setShowPassword] = useState(false);

  const getData = async (e) => {
    const req = await fetch(import.meta.env.VITE_API_URL)
    const passes = await req.json()
    setPasswords(passes)
  }

  useEffect(() => {
    getData()
  }, [])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()

  const onSubmit = async (data) => {
    setPasswords([...passwords, data])
    const res = await fetch(import.meta.env.VITE_API_URL, { method: "POST", headers: { "content-Type": "application/json" }, body: JSON.stringify(data) })
    toast('🦄 Data saved ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
    reset()
  }
  const handleEdit = async (id, index) => {
    const res = await fetch(import.meta.env.VITE_API_URL, { method: "DELETE", headers: { "content-Type": "application/json" }, body: JSON.stringify({ id }) })
    const itemToEdit = passwords[index];
    setValue("url", itemToEdit.url);
    setValue("username", itemToEdit.username);
    setValue("password", itemToEdit.password);
    const newArray = passwords.filter((item) => id !== item._id)
    setPasswords(newArray)
  }
  const handleDelete = async (id) => {
    const res = await fetch(import.meta.env.VITE_API_URL, { method: "DELETE", headers: { "content-Type": "application/json" }, body: JSON.stringify({ id }) })
    const newArray = passwords.filter((item) => id !== item._id)
    setPasswords(newArray)
    toast('👀 Deleted successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
  }
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    toast('📝 Copied to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      // transition={Bounce}
      />
      <div className='text-white min-h-[85%] md:w-[70%] md:mx-auto flex flex-col items-center'>
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

          <div className='flex md:flex-row flex-col  justify-between items-start gap-4 '>
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

            <div className='md:w-1/3 w-full flex flex-col gap-1 relative'>
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
                <p onClick={togglePasswordVisibility} className='absolute right-2 bottom-2'>
                  <lord-icon
                    src="https://cdn.lordicon.com/dicvhxpz.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ "width": "25px", "height": "25px", "cursor": "pointer", "display": "block" }}>
                  </lord-icon>
                </p>
              </div>
              {errors.password && <span className='text-red-500 text-xs px-1'>{errors.password.message}</span>}
            </div>
          </div>

          <button type='submit' className='md:w-1/10 w-1/3 mx-auto flex items-center justify-center gap-2 px-4 py-2 cursor-pointer bg-blue-900 hover:bg-blue-800 text-xl font-semibold border-0 rounded-sm'>
            <lord-icon
              style={{ "width": "20px", "height": "20px", "cursor": "pointer", "display": "block" }}
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
              <div className="head flex justify-around px-4 py-2 bg-blue-900 rounded-sm font-bold text-[14px] md:text-base">
                <p className='md:w-1/3 '>Site</p>
                <p className='md:w-1/5 '>Username</p>
                <p className='md:w-1/6'>password</p>
                <p>Actions</p>
              </div>
            }
            {passwords.map((item, index) => {
              return <div key={item._id} className="one flex justify-around items-center px-4 py-2 bg-slate-800 rounded-sm text-[12px] md:text-base">
                <div className='md:w-1/3 w-1/4 flex gap-2 items-center '>
                  <p>{item.url}</p>
                  <div onClick={() => handleCopy(item.url)}>
                    <lord-icon
                      style={{ "width": "20px", "height": "20px", "cursor": "pointer", "display": "block", "color": "white" }}
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
                      style={{ "width": "20px", "height": "20px", "cursor": "pointer", "display": "block", "color": "white" }}
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
                      style={{ "width": "20px", "height": "20px", "cursor": "pointer", "display": "block", "color": "white" }}
                      src="https://cdn.lordicon.com/iykgtsbt.json"
                      trigger="hover"
                      colors="primary:#ffffff">
                    </lord-icon>
                  </div>

                </div>
                <div className='flex gap-2 items-center'>
                  <p onClick={() => { handleEdit(item._id, index) }}>
                    <lord-icon
                      src="https://cdn.lordicon.com/gwlusjdu.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{ "width": "20px", "height": "20px", "cursor": "pointer", "display": "block" }}>
                    </lord-icon>
                  </p>
                  <p onClick={() => { handleDelete(item._id) }}>
                    <lord-icon
                      src="https://cdn.lordicon.com/skkahier.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{ "width": "20px", "height": "20px", "cursor": "pointer", "display": "block" }}>
                    </lord-icon>
                  </p>
                </div>
              </div>
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default Manager