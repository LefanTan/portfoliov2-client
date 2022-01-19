import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { DataContext } from "./components/services/data.provider";

const App = React.lazy(() => import("./App"));
const ProjectDetailsPage = React.lazy(
  () => import("./components/project-details.page")
);

const AppRoutes = () => {
  const dataContext = useContext(DataContext);

  const onLoad = useCallback(() => {
    setTimeout(() => {
      document.fonts.ready.then(() => {
        if ((dataContext.profile && dataContext.projects, dataContext.user)) {
          const loader = document.querySelector(".loader");
          loader?.classList.add("loader-hide");

          const appBody = document.querySelector(".body");
          appBody?.classList.remove("loader-hide");
        }
      });
    }, 500);
  }, [dataContext.profile, dataContext.projects, dataContext.user]);

  useEffect(() => {
    // DOM is attached, now check if API has been called successfully
    // and that all images and fonts are loaded
    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, [onLoad]);

  /**
   * Loading screen for suspense' fallback,
   * Works by making a copy of the already existing loading screen
   */
  const Loading = () => {
    const emptyDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const loadingScreen = document.querySelector(".loader");
      const cpLoadingScreen = loadingScreen?.cloneNode(true) as Element;

      emptyDivRef.current?.append(cpLoadingScreen);
    }, []);

    return <div ref={emptyDivRef}></div>;
  };

  return (
    <BrowserRouter>
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
