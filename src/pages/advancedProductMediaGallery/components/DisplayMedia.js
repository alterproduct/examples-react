import React, { useRef } from 'react';
import VideoComponent from './VideoComponent';

const DisplayMedia = ({ responseApi, selectedPreview }) => {
  const displayWrapperRef = useRef(null);

  return (
    <div id="displayWrapper" ref={displayWrapperRef}>
      {responseApi[selectedPreview].type === 'img' ? (
        <img
          src={responseApi[selectedPreview].urlContent}
          alt={responseApi[selectedPreview].alt}
        />
      ) : null}

      {responseApi[selectedPreview].type === 'video' ? (
        <VideoComponent displayWrapperRef={displayWrapperRef} />
      ) : null}

      {responseApi[selectedPreview].type === 'viewer3D' ? (
        <iframe
          loading="lazy"
          title="Product Viewer"
          src="https://alterproduct.com/app/viewer/1"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : null}
    </div>
  );
};

export default DisplayMedia;
