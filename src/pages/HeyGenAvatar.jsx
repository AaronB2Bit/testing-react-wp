import React, { useEffect, useRef } from 'react';
import StreamingAvatar, {
  AvatarQuality,
  StreamingEvents,
  TaskType,
} from '@heygen/streaming-avatar';

const HeyGenAvatar = ({ token, avatarId, voiceId }) => {
  const videoRef = useRef(null);
  const avatarRef = useRef(null);
  console.log('token', token)
  console.log('avatarId', avatarId)
  console.log('voiceId', voiceId)

  useEffect(() => {
    const initAvatar = async () => {
      avatarRef.current = new StreamingAvatar({ token });

      avatarRef.current.on(StreamingEvents.STREAM_READY, () => {
        console.log('Stream is ready');
      });

      avatarRef.current.on(StreamingEvents.AVATAR_START_TALKING, () => {
        console.log('Avatar started talking');
      });

      avatarRef.current.on(StreamingEvents.AVATAR_STOP_TALKING, () => {
        console.log('Avatar stopped talking');
      });

      const session = await avatarRef.current.createStartAvatar({
        avatarName: avatarId,
        quality: AvatarQuality.High,
        voice: {
          voiceId,
          rate: 1.0,
        },
      });

      // Attach the video stream to the video element
      if (videoRef.current && session.stream) {
        videoRef.current.srcObject = session.stream;
      }

      // Make the avatar speak
      await avatarRef.current.speak({
        sessionId: session.session_id,
        text: 'Hello! I am your interactive avatar.',
        task_type: TaskType.REPEAT,
      });
    };

    initAvatar();

    return () => {
      if (avatarRef.current) {
        console.log(avatarRef)
        // avatarRef.current.disconnect();
      }
    };
  }, [token, avatarId, voiceId]);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted width="640" height="480" />
    </div>
  );
};

export default HeyGenAvatar;
