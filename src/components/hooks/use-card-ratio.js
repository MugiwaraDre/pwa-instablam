import { useState, useCallback } from "react";

/**
 * make camera look like a card by setting height to alway be lesser than width by calc ratio >= 1  divided by the largest dimension
 **/
export function useCardRatio(initialParams) {
  const [aspectRatio, setAspectRatio] = useState(initialParams);

  const calculateRatio = useCallback((height, width) => {
    if (height && width) {
      const isLandscape = height <= width;
      const ratio = isLandscape ? width / height : height / width;

      setAspectRatio(ratio);
    }
  }, []);

  return [aspectRatio, calculateRatio];
}
