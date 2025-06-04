// DIDWebWidget.jsx
import { useEffect } from 'react';

const DIDWebWidget = () => {
  useEffect(() => {
    const scriptId = 'did-agent-widget';

    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://agent.d-id.com/v1/index.js';
    script.id = scriptId;

    script.setAttribute('data-name', 'did-agent');
    script.setAttribute('data-mode', 'fabio'); // or 'fullscreen', 'embedded'
    script.setAttribute('data-client-key', 'Z29vZ2xlLW9hdXRoMnwxMTMzNjI5OTMwOTMyNDYyNzQ3OTA6WU03WTJ2bGoxcVhnYXBtUk9MRGt2');
    script.setAttribute('data-agent-id', 'agt_0fNZVED7');
    script.setAttribute('data-monitor', 'true');

    document.body.appendChild(script);
  }, []);

  return null;
};

export default DIDWebWidget;
