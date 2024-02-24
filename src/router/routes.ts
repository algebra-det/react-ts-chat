import { lazy } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))
const SignUp = lazy(() => import('@/pages/SignUp'))
const Chats = lazy(() => import('@/pages/Chats'))
const Groups = lazy(() => import('@/pages/Groups'))
const Admin = lazy(() => import('@/pages/Admin'))

export const authRoutes = [
  {
    path: '/login',
    element: Login
  },
  {
    path: '/sign-up',
    element: SignUp
  }
]

export const publicRoutes = [
  {
    path: '/',
    element: Home
  },
]

export const userRoutes = [
  {
    path: '/chats',
    element: Chats
  },
  {
    path: '/groups',
    element: Groups
  }
]

export const adminRoutes = [
  {
    path: '/admin',
    element: Admin
  }
]
