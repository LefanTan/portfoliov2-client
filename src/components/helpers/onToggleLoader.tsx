const onToggleLoader = (toggle: boolean) => {
  const loader = document.querySelector(".loader");

  if (toggle) {
    // Re-enable loading screen
    if (loader?.classList.contains("loader-hide"))
      loader?.classList.remove("loader-hide");
  } else {
    if (!loader?.classList.contains("loader-hide"))
      loader?.classList.add("loader-hide");
  }
};

export default onToggleLoader;
