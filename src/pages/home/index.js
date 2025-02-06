import './Styles.css';

const Home = () => {
  return (
    <div id="wrapper">
      <h1>Alter Product - Documentation Examples</h1>

      <ul>
        <li>
          <a href="./basics-viewer-full-screen">
            <span>Basics</span> - Viewer Full Screen
          </a>
        </li>
        <li>
          <a href="./basics-viewer-styling">
            <span>Basics</span> - Viewer Styling
          </a>
        </li>
        <li>
          <a href="./basics-video-360-product-loop">
            <span>Basics</span> - Video 360 Product Loop
          </a>
        </li>
        <li>
          <a href="./advanced-video-controls-hover">
            <span>Advanced</span> - Video Controls Hover
          </a>
        </li>
        <li>
          <a href="./advanced-product-media-gallery">
            <span>Advanced</span> - Product Media Gallery
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
