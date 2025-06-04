import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Interview from './pages/Interview.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
  },
  {
    path: '/interview',
    element: <Interview />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
