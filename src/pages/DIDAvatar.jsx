// DIDAvatar.jsx
import React, { useEffect, useRef } from 'react';
import * as sdk from '@d-id/client-sdk';
import DIDWebWidget from './DIDWebWidget';
const DIDAvatar = ({agentId, clientKey}) => {
  const videoRef = useRef(null);

  // Paste your actual values here
  const auth = {
    type: 'key',
    clientKey: clientKey,
  };

  const callbacks = {
    onReady: () => console.log('✅ Agent ready'),
    onError: (err) => console.error('❌ Agent error:', err),
  };

  const streamOptions = {
    videoElement: videoRef.current,
    compatibilityMode: 'auto',
    streamWarmup: true,
  };

  useEffect(() => {
    const start = async () => {
      try {
        const agentManager = await sdk.createAgentManager(agentId, {
          auth,
          callbacks,
          streamOptions,
        });

        await agentManager.connect();
        console.log('🔗 Agent connected');

        await agentManager.chat("Hola! Soy tu avatar D-ID.");
      } catch (err) {
        console.error('❌ Error during agent setup:', err);
      }
    };

    start();
  }, []);

  return (
    <div>
      <h2>D-ID Avatar</h2>
      <video ref={videoRef} autoPlay muted playsInline width="480" />
      <DIDWebWidget />
    </div>
  );
};

export default DIDAvatar;
