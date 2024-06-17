import React from 'react'
import { useContext} from "react";
import {UserContext} from "../context/userContext";
import Card from "./Card"
import DayAndDate from '../Components/DayAndDate'
function Header() {
    const {user} = useContext(UserContext)
  return (
    <Card>
       
          {!!user && (<h2 className='text-neutral-50 text-2xl font-bold'>Hello,{user.name}</h2>)}
          <DayAndDate/>
      
    </Card>
  )
}

export default Header
