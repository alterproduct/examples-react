const MediaButtons = ({ responseApi, selectedPreview, setSelectedPreview }) => {
  const buttonClickHandler = (index) => {
    setSelectedPreview(index);
  };

  return (
    <div id="buttonsWrapper">
      {responseApi.map((item, index) => (
        <div
          key={'buttonMedia' + index}
          className={`buttonContainer ${
            selectedPreview === index ? 'active' : ''
          }`}
          onClick={() => buttonClickHandler(index)}
        >
          <img src={item.urlThumb} alt={item.alt} className="imgThumb" />

          {item.type === 'video' ? (
            <img
              src={process.env.PUBLIC_URL + '/assets/icons/icon-play-video.svg'}
              alt={'Play video'}
              className="button-icon"
            />
          ) : null}

          {item.type === 'viewer3D' ? (
            <img
              src={process.env.PUBLIC_URL + '/assets/icons/icon-3d.svg'}
              alt={'Open 3D Viewer'}
              className="button-icon"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default MediaButtons;
