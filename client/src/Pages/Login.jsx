import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'


function Login() {
  const navigate= useNavigate()
  const [data,setData]=useState({//It has empty string because when we go to the page its gonna have nothing and not the previous state os the user
    email:'',
    password:'',
  })
  const loginUser =async (e)=>{
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('/login',{
        email,
        password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        toast.success(' Logged in successfully!')
        setData({});//reset the form to default values
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <Navbar/>
    <form className='flex flex-col m-auto bg-neutral-900  w-96 h-[495px] shadow-md shadow-black'action="" onSubmit={loginUser}>
    <div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className=' text-zinc-50 text-3xl py-10'>Login</h1>
      </div>
      <div className='flex flex-col'>
      <input className='w-80 mx-8 mb-5 py-2 px-4 bg-neutral-50 bg-opacity-5 text-zinc-50'type="text" placeholder='Enter your email'value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
      <input className='w-80 mx-8 mb-5 py-2 px-4 bg-neutral-50 bg-opacity-5 text-zinc-50'type="password" placeholder='Enter your password'value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} />
      <div className="flex items-center ml-8 mb-5">
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          
          <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-zinc-50 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          Remember me
        </label>
      </div>
      <button className='w-80 mx-8 mb-5 py-2 px-4 bg-green-700  text-zinc-50'>Login</button>
      <div>
        <p className='mb-5 ml-8 text-zinc-50'>Forgot password?<Link to='#' className='text-blue-600'>Click here</Link></p>
        <p className='mb-5 ml-8 text-zinc-50'>New User?
        <Link to='/register' className='text-blue-600'>Register here</Link></p>
      </div>
      </div>
      
      

    </div>
    </form>
    </>
  )
}

export default Login
