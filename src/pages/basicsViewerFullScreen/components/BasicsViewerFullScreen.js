import './Styles.css';

const BasicsViewerFullScreen = () => {
  return (
    <iframe
      loading="lazy"
      title="Product Viewer"
      src="https://alterproduct.com/app/viewer/5z"
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default BasicsViewerFullScreen;
