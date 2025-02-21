import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

const Login = () => {

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/'
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = async event => {
    event.preventDefault()
    login({ email, password, setErrors, setStatus })
  }

  return (
    <form onSubmit={submitForm}>
      {/* Email Address */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          className="block mt-1 w-full"
          onChange={event => setEmail(event.target.value)}
          required
          autoFocus
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
          autoComplete="current-password"
        />
      </div>
      {/* Remember Me */}
      <div className="block mt-4">
        <label htmlFor="remember_me" className="inline-flex items-center">
          <input
            id="remember_me"
            type="checkbox"
            name="remember"
            className="rounded border-gray-300 text-indigo-600
            shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
      </div>
      {/* Submit */}
      <div className="flex items-center justify-end mt-4">
        <button className="ml-3">
          Login
        </button>
      </div>
    </form>
  )
}

export default Login
