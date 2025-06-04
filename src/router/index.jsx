import { createBrowserRouter } from 'react-router-dom'
import App from '../pages/App'
import Interview from '../pages/Interview'

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

  export default router