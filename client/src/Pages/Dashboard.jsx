import React from 'react'
import { useContext} from "react";
import {UserContext} from "../context/userContext";


function Dashboard() {
    const {user} = useContext(UserContext)
  return (
    <div>
      <h1 className='bg-slate-50'>Dashboard</h1>
      {!!user && (<h2 className='bg-slate-50'>Hi {user.name}!</h2>)}
    </div>
  )
}

export default Dashboard
