import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes, userRoutes } from './routes'
import ProtectedRoute from './ProtectedRoute'
import UserLayout from '@/layouts/UserLayout'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route element={<UserLayout />}>
        {userRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ProtectedRoute>
                <route.element />
              </ProtectedRoute>
            }
          />
        ))}</Route>
        <Route element={<UserLayout />}>
        {adminRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ProtectedRoute role='admin'>
                <route.element />
              </ProtectedRoute>
            }
          />
        ))}</Route>
        {authRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path='/*' element={<div><h2>404</h2></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
