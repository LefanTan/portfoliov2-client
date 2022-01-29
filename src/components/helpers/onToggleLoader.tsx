const onToggleLoader = (toggle: boolean) => {
  const loader = document.querySelector(".loader");

  const toggleClassName = () => {
    if (toggle) {
      // Re-enable loading screen
      if (loader?.classList.contains("loader-hide"))
        loader?.classList.remove("loader-hide");
    } else {
      if (!loader?.classList.contains("loader-hide"))
        loader?.classList.add("loader-hide");
    }
  };

  document.fonts.ready
    .then(() => toggleClassName())
    .catch((err) => {
      console.warn(err);
      toggleClassName();
    });
};

export default onToggleLoader;
