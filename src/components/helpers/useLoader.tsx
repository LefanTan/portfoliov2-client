import { useEffect } from "react";
import { DataType } from "../services/data.provider";

const useLoadHook = (dataContext: DataType) => {
  useEffect(() => {
    // DOM is attached, now check if API has been called successfully
    // and that all images and fonts are loaded
    // For now just use a timeout
    setTimeout(() => {
      document.fonts.ready.then(() => {
        if ((dataContext.profile && dataContext.projects, dataContext.user)) {
          const loader = document.querySelector(".loader");
          loader?.classList.add("loader-hide");

          const appBody = document.querySelector(".body");
          appBody?.classList.remove("loader-hide");
        }
      });
    }, 0);
  }, [dataContext.profile, dataContext.projects, dataContext.user]);
};

export default useLoadHook;
