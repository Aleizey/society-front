import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router';

const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/'
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])

  const submitForm = event => {
    event.preventDefault()
    register({ name, email, password, password_confirmation, setErrors })
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://th.bing.com/th/id/R.ff0e1a70721d8797d00fb4af33cd6d52?rik=NEhMNP2s7%2fBe7Q&pid=ImgRaw&r=0&sres=1&sresct=1" alt=""
            className="w-full h-full object-cover filter blur-lg brightness-50" />
        </div>
        <div className="relative z-10 bg-white p-8 rounded-md shadow-lg">
          <h1
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500 pb-2 text-center">
            Crear Cuenta
          </h1>
          <form onSubmit={submitForm}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="email">Nombre</label>
              <div className="relative mt-1">
                <input type="text" name="name" id="name" className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500" placeholder="Alejandro Valdivia" value={name} onChange={event => setName(event.target.value)} required autoFocus />
                <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2"><svg width="20px" height="20px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="11" r="7" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4 41C4 32.1634 12.0589 25 22 25" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M31 42L41 32L37 28L27 38V42H31Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
              </div>
            </div>
            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="email">Email</label>
              <div className="relative mt-1">
                <input type="email" name="email" id="email" className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500" placeholder="user@xyz.com" value={email} onChange={event => setEmail(event.target.value)} required />
                <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-blue-400 pointer-events-none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </span>
              </div>
            </div>
            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="password">Password</label>
              <div className="relative mt-1">
                <input type="password" name="password" id="password" className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500" placeholder="Contraseña" value={password} onChange={event => setPassword(event.target.value)} required autoComplete="current-password" />
                <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2"><svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17,9V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                </span>
              </div>
            </div>
            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="password">Confirm Password</label>
              <div className="relative mt-1">
                <input type="password" name="confirmPassword" id="confirmPassword" className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500" placeholder="Confirmar Contraseña" value={password} onChange={event => setPassword(event.target.value)} required autoComplete="current-password" />
                <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2"><svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17,9V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" /></svg>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-8">
              <Button
                variant="contained"
                type="submit">
                Crear Cuenta
              </Button>

              <Button 
                variant="contained"
                type="button">
                  <Link to='/login'>
                Iniciar sesion
                </Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
