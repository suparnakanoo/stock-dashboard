import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate= useNavigate()
  const [data, setData] = useState({
    name:'',
    email:'',
    password:'',
  })

  const registerUser =async (e)=>{//takes a event property
    e.preventDefault()
    //destructuring data
    const {name, email, password} = data
    try {
      const {data}= await axios.post('/register',{
        name,email,password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success(' Registered successfully!Login to get started')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className='flex flex-col m-auto bg-neutral-900  w-96 h-[495px] shadow-md shadow-black'action="" onSubmit={registerUser}>
    <div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className=' text-zinc-50 text-3xl py-10'>Register</h1>
      </div>
      <div className='flex flex-col'>
      <input className='w-80 mx-8 mb-5 py-2 px-4 bg-neutral-50 bg-opacity-5 text-zinc-50'type="text" placeholder='Enter your name' value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}/> {/*we spread the data object and change its name property to e.target.value*/}
      <input className='w-80 mx-8 mb-5 py-2 px-4 bg-neutral-50 bg-opacity-5 text-zinc-50'type="text" placeholder='Enter your email' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}/>
      <input className='w-80 mx-8 mb-5 py-2 px-4 bg-neutral-50 bg-opacity-5 text-zinc-50'type="password" placeholder='Enter your password'value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} />
      
      <button className='w-80 mx-8 mb-5 py-2 px-4 bg-green-700  text-zinc-50'>Register</button>
      <div>
        <p className='mb-5 ml-8 text-zinc-50'>Already have an account?
        <Link to='/login'className='text-blue-600'>Login here</Link></p>
      </div>
      </div>
      
      

    </div>
    </form>
  )
}

export default Register
