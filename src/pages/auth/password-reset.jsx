import { useAuth } from 'hooks/auth'
import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';

const PasswordReset = () => {
  const params = useParams()
  const { resetPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = event => {
    event.preventDefault()
    resetPassword({
      email,
      password,
      password_confirmation,
      setErrors,
      setStatus
    })
  }

  useEffect(() => {
    setEmail(params.email || '')
  }, [params.email])

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <Link to="/">
            <ApplicationLogo className="w-40 h-40" />
          </Link>
        }>
        {/* Session Status */}
        <AuthSessionStatus className="mb-4" status={status} />
        {/* Validation Errors */}
        <AuthValidationErrors className="mb-4" errors={errors} />
        <form onSubmit={submitForm}>
          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
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
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              className="block mt-1 w-full"
              onChange={event => setPassword(event.target.value)}
              required
            />
          </div>
          {/* Confirm Password */}
          <div className="mt-4">
            <Label htmlFor="password_confirmation">
                Confirm Password
            </Label>
            <Input
              id="password_confirmation"
              type="password"
              value={password_confirmation}
              className="block mt-1 w-full"
              onChange={event =>
                setPasswordConfirmation(event.target.value)
              }
              required
            />
          </div>
          <div className="flex items-center justify-end mt-4">
            <Button>Reset Password</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}

export default PasswordReset
