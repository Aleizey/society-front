import { useAuth } from 'hooks/auth'
import { useState } from 'react'

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
    <form onSubmit={submitForm}>
      {/* Name */}
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          className="block mt-1 w-full"
          onChange={event => setName(event.target.value)}
          required
          autoFocus
        />
      </div>
      {/* Email Address */}
      <div className="mt-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          className="block mt-1 w-full"
          onChange={event => setEmail(event.target.value)}
          required
        />
      </div>
      {/* Password */}
      <div className="mt-4">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          className="block mt-1 w-full"
          onChange={event => setPassword(event.target.value)}
          required
          autoComplete="new-password"
        />
      </div>
      {/* Confirm Password */}
      <div className="mt-4">
        <label htmlFor="password_confirmation">Confirm Password</label>
        <input
          id="password_confirmation"
          type="password"
          value={password_confirmation}
          className="block mt-1 w-full"
          onChange={event => setPasswordConfirmation(event.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-end mt-4">
        <button type="submit" className="ml-4">
          Register
        </button>
      </div>
    </form>
  )
}

export default Register
