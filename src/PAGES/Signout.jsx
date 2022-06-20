import React from 'react'
import { UserAuth } from '../AUTH/CONTEXT/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

function Signout() {
 const { logOut, user } = UserAuth()
 const navigate = useNavigate()

 const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
        console.log();
    }
 }
     
  return (
        <>
       <Link to='/'> <button onClick={handleSignOut} className='sign-out'>ВЫЙТИ ИЗ АККАУНТА</button> </Link> 
        </>
  )
}

export default Signout