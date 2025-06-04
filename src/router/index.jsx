import { createBrowserRouter } from 'react-router-dom'
import App from '../pages/App'
import Interview from '../pages/Interview'
import HeyGenAvatar from '../pages/HeyGenAvatar'
import DIDAvatar from '../pages/DIDAvatar'

const token = 'eyJ0b2tlbiI6ICJhYzBhN2M1OGEwNDA0MGU1YmM1ZmRhMTk4NjRmNTViMiIsICJ0b2tlbl90eXBlIjogInNhX2Zyb21fcmVndWx hciIsICJjcmVhdGVkX2F0IjogMTc0OTA0OTA1NH0='
const avatarId = 'Pedro_Blue_Shirt_public'
const voiceId = 'es-ES-Standard-A'

const didApiKey = 'Z29vZ2xlLW9hdXRoMnwxMTMzNjI5OTMwOTMyNDYyNzQ3OTA6WU03WTJ2bGoxcVhnYXBtUk9MRGt2'
const agentId = 'agt_0fNZVED7'
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      
    },
    {
      path: '/interview',
      element: <Interview />,
    },
    {
      path: '/heygen',
      element: <HeyGenAvatar token={token} avatarId={avatarId} voiceId={voiceId}/>,
    },
    {
      path: '/did',
      element: <DIDAvatar agentId={agentId} clientKey={didApiKey} />,
    }
  ])

  export default router