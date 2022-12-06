import React from "react";
import "../../styles/slider.scss";
import leftArrow from '../../icons/left-arrow.svg'
import rightArrow from '../../icons/right-arrow.svg'

export default function btnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}

