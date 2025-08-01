import './Styles.css';

const ViewerFullScreen = () => {
  return (
    <iframe
      loading="lazy"
      title="Product Viewer"
      src="https://alterproduct.com/app/viewer/1"
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default ViewerFullScreen;
