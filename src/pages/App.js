import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./home'));

const ViewerFullScreen = lazy(() => import('./viewerFullScreen'));
const ViewerBasicStyling = lazy(() => import('./viewerBasicStyling'));
const ViewerStylingUrl = lazy(() => import('./viewerStylingUrl'));
const ViewerBranding = lazy(() => import('./viewerBranding'));

const ConfiguratorFullScreen = lazy(() => import('./configuratorFullScreen'));
const ConfiguratorBasicStyling = lazy(() =>
  import('./configuratorBasicStyling')
);
const ConfiguratorStylingUrl = lazy(() => import('./configuratorStylingUrl'));
const ConfiguratorBranding = lazy(() => import('./configuratorBranding'));

const CustomizerFullScreen = lazy(() => import('./customizerFullScreen'));
const CustomizerBasicStyling = lazy(() => import('./customizerBasicStyling'));
const CustomizerBranding = lazy(() => import('./customizerBranding'));

const OtherVideo360ProductLoop = lazy(() => import('./video360ProductLoop'));
const OtherVideoControlsHover = lazy(() => import('./videoControlsHover'));
const OtherProductMediaGallery = lazy(() => import('./productMediaGallery'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/viewer-full-screen"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ViewerFullScreen />
            </Suspense>
          }
        ></Route>
        <Route
          path="/viewer-basic-styling"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ViewerBasicStyling />
            </Suspense>
          }
        ></Route>
        <Route
          path="/viewer-styling-url"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ViewerStylingUrl />
            </Suspense>
          }
        ></Route>
        <Route
          path="/viewer-branding"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ViewerBranding />
            </Suspense>
          }
        ></Route>

        <Route
          path="/configurator-full-screen"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ConfiguratorFullScreen />
            </Suspense>
          }
        ></Route>
        <Route
          path="/configurator-basic-styling"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ConfiguratorBasicStyling />
            </Suspense>
          }
        ></Route>
        <Route
          path="/configurator-styling-url"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ConfiguratorStylingUrl />
            </Suspense>
          }
        ></Route>
        <Route
          path="/configurator-branding"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ConfiguratorBranding />
            </Suspense>
          }
        ></Route>

        <Route
          path="/customizer-full-screen"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CustomizerFullScreen />
            </Suspense>
          }
        ></Route>
        <Route
          path="/customizer-basic-styling"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CustomizerBasicStyling />
            </Suspense>
          }
        ></Route>
        <Route
          path="/customizer-branding"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CustomizerBranding />
            </Suspense>
          }
        ></Route>

        <Route
          path="/other-video-360-product-loop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <OtherVideo360ProductLoop />
            </Suspense>
          }
        ></Route>
        <Route
          path="/other-video-controls-hover"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <OtherVideoControlsHover />
            </Suspense>
          }
        ></Route>
        <Route
          path="/other-product-media-gallery"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <OtherProductMediaGallery />
            </Suspense>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
