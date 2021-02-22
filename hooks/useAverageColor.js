import {
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import FastAverageColor from "fast-average-color";

const useAverageColor = (url, defaultColor = "white") => {
  const [averageColor, setAverageColor] = useState(defaultColor);
  const fac = new FastAverageColor();

  useEffect(() => {
    fac
      .getColorAsync(url)
      .then((color) => {
        setAverageColor(color.hexa);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [averageColor]);

  return averageColor;
};

export default useAverageColor;
