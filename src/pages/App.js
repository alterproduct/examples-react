import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./home'));
const BasicsViewerFullScreen = lazy(() => import('./basicsViewerFullScreen'));
const BasicsViewerStyling = lazy(() => import('./basicsViewerStyling'));
const BasicsVideo360ProductLoop = lazy(() =>
  import('./basicsVideo360ProductLoop')
);
const AdvancedVideoControlsHover = lazy(() =>
  import('./advancedVideoControlsHover')
);

const AdvancedProductMediaGallery = lazy(() =>
  import('./advancedProductMediaGallery')
);

function App() {
  console.log(process.env.NODE_ENV);

  return (
    <Router
      basename={
        process.env.NODE_ENV === 'development' ? '' : process.env.PUBLIC_URL
      }
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/basics-viewer-full-screen"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BasicsViewerFullScreen />
            </Suspense>
          }
        ></Route>
        <Route
          path="/basics-viewer-styling"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BasicsViewerStyling />
            </Suspense>
          }
        ></Route>
        <Route
          path="/basics-video-360-product-loop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BasicsVideo360ProductLoop />
            </Suspense>
          }
        ></Route>
        <Route
          path="/advanced-video-controls-hover"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AdvancedVideoControlsHover />
            </Suspense>
          }
        ></Route>
        <Route
          path="/advanced-product-media-gallery"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AdvancedProductMediaGallery />
            </Suspense>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
