"use client";

import { useState } from "react";
import styles from "../works.module.css";

export default function ProjectCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselViewport}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div className={styles.carouselSlide} key={`${image}-${index}`}>
              <img
                src={image}
                alt={`${title} project image ${index + 1}`}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
              onClick={showPrevious}
              aria-label="View previous image"
            >
              ←
            </button>

            <button
              type="button"
              className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
              onClick={showNext}
              aria-label="View next image"
            >
              →
            </button>
          </>
        )}

        <div className={styles.carouselCount}>
          {String(currentIndex + 1).padStart(2, "0")}
          <span>/</span>
          {String(images.length).padStart(2, "0")}
        </div>
      </div>

      {images.length > 1 && (
        <div className={styles.carouselDots}>
          {images.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`${styles.carouselDot} ${
                index === currentIndex ? styles.carouselDotActive : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}