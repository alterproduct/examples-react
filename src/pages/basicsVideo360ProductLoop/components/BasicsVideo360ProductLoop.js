import React, { useEffect, useRef } from 'react';
import videojs from 'video.js'; // npm install video.js
import 'video.js/dist/video-js.css'; // comes along with video.js lib
import './Styles.css';

const BasicsVideo360ProductLoop = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Ensure the player is initialized only once
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement('video-js');
      videoElement.classList.add('video-js');

      // Set poster image to be displayed before the video starts
      videoElement.setAttribute(
        'poster',
        '/assets/video/video-360-loop-embeding-poster.png'
      );

      // Define fixed dimensions for the video player
      videoElement.style.width = '348px';
      videoElement.style.height = '348px';
      videoRef.current.appendChild(videoElement);

      // Initialize the Video.js player with configurations
      playerRef.current = videojs(
        videoElement,
        {
          autoplay: true,
          loop: true,
          muted: true,
          controls: false,
          preload: 'auto',
          responsive: false,
          fluid: false,

          sources: [
            {
              src: '/assets/video/video-360-loop-embeding.webm',
              type: 'video/webm',
            },
          ],
        },
        () => {
          videojs.log('player is ready'); // Log when player is initialized
        }
      );
    }

    // Cleanup function to properly dispose of the player when component unmounts
    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return <div className="videoContainer" ref={videoRef} />;
};

export default BasicsVideo360ProductLoop;
