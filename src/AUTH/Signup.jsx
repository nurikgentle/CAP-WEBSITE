import React from 'react'
import GoogleButton from 'react-google-button'
import {UserAuth} from '../AUTH/CONTEXT/AuthContext'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';


function Signup() {

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await  googleSignIn()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(user != null) {
      navigate('/Homepage')
    }
  }, [user])

  return (
    <div className='auth'>
        <h1>Зарегистрируйся Через Google 😉</h1>
        <GoogleButton onClick={handleGoogleSignIn} className='google'/>
    </div>
  )
}

export default Signup