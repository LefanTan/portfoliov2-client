import { useCallback, useEffect, useState } from "react";

const useMediaChange = (media: string) => {
  const [matches, setMatches] = useState(false);

  const mediaChangeHandler = useCallback((ev: MediaQueryListEvent) => {
    setMatches(ev.matches);
  }, []);

  useEffect(() => {
    window.matchMedia(media).addEventListener("change", mediaChangeHandler);

    setMatches(window.matchMedia(media).matches);

    return () =>
      window
        .matchMedia(media)
        .removeEventListener("change", mediaChangeHandler);
  }, [media, mediaChangeHandler]);

  return matches;
};

export default useMediaChange;
