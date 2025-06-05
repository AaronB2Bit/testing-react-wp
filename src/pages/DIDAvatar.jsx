import React, { useEffect, useRef, useState } from 'react'
import * as sdk from '@d-id/client-sdk'

const DIDAvatar = () => {
  const videoRef = useRef(null)
  const textAreaRef = useRef(null)
  const [agentManager, setAgentManager] = useState(null)

  const agentId = 'TU_AGENT_ID'
  const auth = { type: 'key', clientKey: 'TU_CLIENT_KEY' }

  useEffect(() => {
    const initAgent = async () => {
      const callbacks = {
        onSrcObjectReady: (stream) => {
          videoRef.current.srcObject = stream
        },
        onConnectionStateChange: (state) => {
          console.log('State:', state)
        },
        onVideoStateChange: (state) => {
          if (state === 'STOP') {
            videoRef.current.src = agentManager?.agent?.presenter?.idle_video
          }
        },
        onNewMessage: (messages) => {
          const last = messages[messages.length - 1]
          console.log(`[${last.role}]: ${last.content}`)
        },
        onError: (err) => {
          console.error('Agent error:', err)
        }
      }

      const streamOptions = { compatibilityMode: 'auto', streamWarmup: true }

      const manager = await sdk.createAgentManager(agentId, { auth, callbacks, streamOptions })
      setAgentManager(manager)

      videoRef.current.style.backgroundImage = `url(${manager.agent.presenter.source_url})`
      await manager.connect()
    }

    initAgent()
  }, [])

  const handleChat = () => {
    const val = textAreaRef.current.value
    if (val && agentManager) {
      agentManager.chat(val)
      textAreaRef.current.value = ''
    }
  }

  return (
    <div className="interview-container">
      <video ref={videoRef} autoPlay muted playsInline id="videoElement" />
      <textarea ref={textAreaRef} placeholder="Escribe tu respuesta..." />
      <button onClick={handleChat}>Enviar</button>
    </div>
  )
}

export default DIDAvatar
