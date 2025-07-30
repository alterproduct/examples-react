import './Styles.css';

const ViewerBranding = () => {
  return (
    <iframe
      loading="lazy"
      title="Product Viewer"
      src="https://alterproduct.com/app/viewer/12?add_to_cart=1&bcg=theme"
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default ViewerBranding;
