import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Avatar,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import AuthForm from '@/components/AuthForm'
import { VisuallyHiddenInput } from '@/components/styled/VisuallyHiddenInput'
import { isAlphanumeric } from '@/utils/validators'

type LooseObject = {
  [key: string]: string
}

function Login() {
  const navigate = useNavigate()

  const [login] = useState(false)
  const [notValidFields, setNotValidFields] = useState<LooseObject>({})
  if (login) navigate('/')

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!(e.target instanceof HTMLFormElement)) return // Typescript safety; otherwise typescript will scream
    const form = new FormData(e.target)
    const values = Object.fromEntries(form.entries())

    const unValidFields: LooseObject = {}
    Object.entries(values).forEach(([key, value]) => {
      if (!value) unValidFields[key] = `${key} is required`
      else if (key === 'username' && !isAlphanumeric(value as string)) {
        unValidFields[key] = 'Username not valid'
        console.log('key is: ', key, value, !isAlphanumeric(value as string))
      }
    })
    console.log('Fields: ', unValidFields)
    setNotValidFields(unValidFields)
    if (JSON.stringify(unValidFields) !== '{}') return

    console.log('Values: ', values)
    // setLogin(true)
  }

  return (
    <div>
      <AuthForm>
        <Typography variant='h5'>Sign Up</Typography>
        <form
          noValidate
          onSubmit={handleSignUp}
          style={{ width: '100%', marginTop: 'center' }}
        >
          <Stack position='relative' width='10rem' margin='auto'>
            <Avatar
              sx={{ width: '10rem', height: '10rem', objectFit: 'contain' }}
            />
            <IconButton
              sx={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                ':hover': { bgColor: 'rgba(0,0,0,0.7)' }
              }}
              component='label'
            >
              <>
                <CameraAltIcon />
                <VisuallyHiddenInput type='file' />
              </>
            </IconButton>
          </Stack>
          <TextField
            required
            fullWidth
            label='Name'
            name='name'
            margin='normal'
            variant='outlined'
            error={!!notValidFields?.name}
            // helperText="some string"
          />
          <TextField
            required
            fullWidth
            label='Bio'
            name='bio'
            margin='normal'
            variant='outlined'
            error={!!notValidFields.bio}
          />
          <TextField
            required
            fullWidth
            label='username'
            name='username'
            margin='normal'
            variant='outlined'
            error={!!notValidFields?.username}
            helperText={
              !notValidFields.username?.includes('required') &&
              notValidFields.username
            }
          />
          <TextField
            required
            fullWidth
            label='password'
            name='password'
            margin='normal'
            variant='outlined'
            error={!!notValidFields?.password}
          />
          <Button
            fullWidth
            type='submit'
            color='primary'
            variant='contained'
            sx={{ marginTop: '1rem' }}
          >
            Sign Up
          </Button>
        </form>
        <Typography textAlign='center' m='1rem'>
          OR
        </Typography>
        <Button
          fullWidth
          variant='text'
          color='secondary'
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
      </AuthForm>
    </div>
  )
}

export default Login
