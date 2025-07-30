import React, { useEffect, useRef } from 'react';
import videojs from 'video.js'; // npm install video.js
import 'video.js/dist/video-js.css'; // comes along with video.js lib
import './Styles.css';

const OtherVideoControlsHover = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Ensure the player is initialized only once
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement('video-js');
      videoElement.classList.add('video-js');

      videoElement.style.width = '348px';
      videoElement.style.height = '348px';
      videoRef.current.appendChild(videoElement);

      // Initialize Video.js player with configuration
      playerRef.current = videojs(
        videoElement,
        {
          autoplay: false,
          loop: true,
          muted: true,
          controls: false,
          preload: 'auto',
          responsive: false,
          fluid: false,
          sources: [
            {
              src:
                process.env.PUBLIC_URL +
                '/assets/video/video-360-loop-embeding.webm',
              type: 'video/webm',
            },
          ],
        },
        () => {
          videojs.log('player is ready');
        }
      );

      // Event handler to play video on mouse hover
      const handleMouseEnter = () => {
        if (playerRef.current) {
          playerRef.current.play();
        }
      };

      // Event handler to pause video when mouse leaves
      const handleMouseLeave = () => {
        if (playerRef.current) {
          playerRef.current.pause();
        }
      };

      // Attach event listeners to the video element
      videoElement.addEventListener('mouseenter', handleMouseEnter);
      videoElement.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        if (playerRef.current && !playerRef.current.isDisposed()) {
          playerRef.current.dispose();
          playerRef.current = null;
        }

        // Ensure the video element still exists before removing event listeners
        if (videoElement) {
          videoElement.removeEventListener('mouseenter', handleMouseEnter);
          videoElement.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  }, []);

  return <div className="videoContainer" ref={videoRef} />;
};

export default OtherVideoControlsHover;
