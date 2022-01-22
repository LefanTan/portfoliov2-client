import React, { Suspense, useCallback, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import onToggleLoader from "./components/helpers/onToggleLoader";

const App = React.lazy(() => import("./App"));
const ProjectDetailsPage = React.lazy(
  () => import("./components/project-details.page")
);

const AppRoutes = () => {
  // On DOM initial load, hide loader
  const onLoad = useCallback(() => onToggleLoader(false), []);

  useEffect(() => {
    // DOM is attached, now check if API has been called successfully
    // and that all images and fonts are loaded
    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, [onLoad]);

  const Loading = () => {
    useEffect(() => {
      // Reenable loading screen
      onToggleLoader(true);
    }, []);

    return <></>;
  };

  return (
    <BrowserRouter basename="/">
      <div className="body">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <App />
              </Suspense>
            }
          />
          <Route
            path="/project/:name"
            element={
              <Suspense fallback={<Loading />}>
                <ProjectDetailsPage />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
