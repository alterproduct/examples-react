import videojs from 'video.js'; // npm install video.js
import 'video.js/dist/video-js.css'; // comes along with video.js lib
import React, { useEffect, useRef } from 'react';

const VideoComponent = ({ displayWrapperRef }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const updateSize = () => {
    if (!playerRef.current || !displayWrapperRef.current) return;

    const player = playerRef.current;
    const container = displayWrapperRef.current;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const containerRatio = containerWidth / containerHeight;

    const videoWidth = player.videoWidth();
    const videoHeight = player.videoHeight();
    const videoRatio = videoWidth / videoHeight;

    if (videoRatio > containerRatio) {
      player.width(containerWidth);
      player.height(containerWidth / videoRatio);
    } else {
      player.height(containerHeight);
      player.width(containerHeight * videoRatio);
    }
  };

  useEffect(() => {
    // Ensure the player is initialized only once
    if (!playerRef.current && videoRef.current) {
      const video = Object.assign(document.createElement('video'), {
        id: 'my-video',
        className: 'video-js',
        loop: true,
        autoplay: true,
        muted: true,
        preload: 'auto',
      });
      video.setAttribute('data-setup', '{"asdf": true }');

      videoRef.current.appendChild(video);

      // Initialize Video.js player with configuration
      playerRef.current = videojs(
        video,
        {
          loop: true,
          autoplay: true,
          muted: true,
          preload: 'auto',
          sources: [
            {
              src:
                process.env.PUBLIC_URL +
                '/assets/video/video-360-loop-embeding.webm',
              type: 'video/webm',
            },
          ],
        },
        function () {
          videojs.log('player is ready');
        }
      );

      playerRef.current.on('loadedmetadata', () => {
        updateSize();
        window.addEventListener('resize', updateSize);
      });

      // Cleanup
      return () => {
        if (playerRef.current && !playerRef.current.isDisposed()) {
          playerRef.current.dispose();
          playerRef.current = null;
        }

        window.removeEventListener('resize', updateSize);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="videoContainer" ref={videoRef} />;
};

export default VideoComponent;
