import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material'
import AuthForm from '@/components/AuthForm'

function Login() {
  const navigate = useNavigate()

  const [login, setLogin] = useState(false)
  if (login) navigate('/')

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!(e.target instanceof HTMLFormElement)) return // Typescript safety; otherwise typescript will scream
    const form = new FormData(e.target)
    const values = Object.fromEntries(form.entries())
    console.log('Values: ', values)
    setLogin(true)
  }

  return (
    <div>
      <AuthForm>
        <Typography variant='h5'>Login</Typography>
        <form
          onSubmit={handleLogin}
          style={{ width: '100%', marginTop: 'center' }}
        >
          <TextField
            required
            fullWidth
            label='username'
            name='username'
            margin='normal'
            variant='outlined'
          />
          <TextField
            required
            fullWidth
            label='password'
            name='password'
            margin='normal'
            variant='outlined'
          />
          <Button
            fullWidth
            type='submit'
            color='primary'
            variant='contained'
            sx={{ marginTop: '1rem' }}
          >
            Login
          </Button>
        </form>
        <Typography textAlign='center' m='1rem'>
          OR
        </Typography>
        <Button
          fullWidth
          variant='text'
          color='secondary'
          onClick={() => navigate('/sign-up')}
        >
          Sign Up
        </Button>
      </AuthForm>
    </div>
  )
}

export default Login
