import React from "react";
import TextTransition, { presets } from "react-text-transition";

import "./HeroBanner.css";

const TEXTS = [
  "Are You Ready to Achieve Your Dream Physique?",
  "Give Yourself a Chance To Change Yourself",
  "Are You Willing To Give It All",
  "Be The Best And Fittest Version Of Yourself",
];

const HeroBanner = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="app_herobanner">
      <h1>
        <TextTransition
          className="changing-mainheader flex__center color-white font_head"
          springConfig={presets.gentle}
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
      <h3 className="header-2 color-white font_head">
        Empower yourself to make the changes you need to make
      </h3>
      <h3 className="header-3 color-white font_head">
        Believe in yourself and keep working hard
      </h3>
    </div>
  );
};

export default HeroBanner;
