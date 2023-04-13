import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

const ikUser = {
  id: 123,
  name: 'Isaac Pozos',
  email: 'test@tester.com'
}

export const LoginPage = () => {
  const {user, setUser} = useContext(UserContext)
  return (
    <>
        <h1>Login Page</h1>
        <hr />
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
        <button 
          onClick={ ()=> setUser(ikUser)}
          className='btn btn-outline-primary'>
          Establecer usuario
        </button>

    </>
  )
}
