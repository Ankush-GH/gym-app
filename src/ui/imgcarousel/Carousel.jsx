import React from "react";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

import "./Carousel.css";
import { CarouselData } from "./CarouselData";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider flex__center">
      <BsFillArrowLeftSquareFill
        className="left-arrow pointer"
        onClick={prevSlide}
      />
      <BsFillArrowRightSquareFill
        className="right-arrow pointer"
        onClick={nextSlide}
      />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.Img} alt="Gym Image" className="slider-img" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
