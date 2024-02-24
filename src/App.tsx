import Router from '@/router/index'
import { Suspense } from 'react'
function App() {
  return (
    <Suspense>
      <Router />
    </Suspense>
  )
}

export default App
