import { Container, Paper} from '@mui/material'
import { ReactNode } from 'react'

type AuthFromProps = {
  children: ReactNode
}

function AuthForm({ children }: AuthFromProps) {

  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {children}
      </Paper>
    </Container>
  )
}

export default AuthForm
