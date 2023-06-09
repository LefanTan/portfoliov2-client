import React, { Suspense, useCallback, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/error.page";
import onToggleLoader from "./components/helpers/onToggleLoader";
import { DataContext } from "./components/services/data.provider";

const App = React.lazy(() => import("./App"));
const ProjectDetailsPage = React.lazy(
  () => import("./components/project-details.page")
);

const AppRoutes = () => {
  const dataContext = useContext(DataContext);

  // On DOM initial load, hide loader
  const onLoad = useCallback(() => {
    if (dataContext.user) onToggleLoader(false);
  }, [dataContext]);

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

  useEffect(() => {
    if (dataContext.user) onToggleLoader(false);
  }, [dataContext]);

  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
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
    </BrowserRouter>
  );
};

export default AppRoutes;
