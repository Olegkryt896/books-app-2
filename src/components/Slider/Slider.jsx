import React, { useRef, useState, useEffect } from "react";
import styles from "./Slider.module.sass";
import { Transition, TransitionGroup } from "react-transition-group";

const banners = [
  "../public/slider/banner1.svg",
  "../public/slider/banner2.svg",
  "../public/slider/banner3.svg",
];

const Slider = () => {
  const [people, setPeople] = useState(banners);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex >= people.length) setCurrentIndex(0);
    if (currentIndex < 0) setCurrentIndex(people.length - 1);
  }, [currentIndex, people]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <>
      <div className={styles.sliderDiv}>
        {people.map((person, index) => {
          let position = "nextSlide";
          let style = styles.nextSlide;
          if (index === currentIndex) {
            position = "activeSlide";
            style = styles.activeSlide;
          }
          if (
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === banners.length - 1)
          ) {
            position = "lastSlide";
            style = styles.lastSlide;
          }
          return (
            <article className={style} key={index}>
              <img src={person} className={styles.imgSliderImage} />
            </article>
          );
        })}
      </div>
      <div className={styles.divDots}>
        {people.map((banner, index) => {
          let style = styles.dots;
          if (index === currentIndex) {
            style = styles.dotsActive;
          }
          return (
            <div onClick={() => setCurrentIndex(index)} className={style}></div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
