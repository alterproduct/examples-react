import React, { useState } from 'react';

import './Styles.css';

import { responseApi } from './responseApi';

import MediaButtons from './Mediabuttons';
import DisplayMedia from './DisplayMedia';

const AdvancedProductMediaGallery = () => {
  const [selectedPreview, setSelectedPreview] = useState(0);

  return (
    <div id="wrapper">
      <DisplayMedia
        responseApi={responseApi}
        selectedPreview={selectedPreview}
      />
      <MediaButtons
        responseApi={responseApi}
        selectedPreview={selectedPreview}
        setSelectedPreview={setSelectedPreview}
      />
    </div>
  );
};

export default AdvancedProductMediaGallery;
