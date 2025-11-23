"use client";

import { useState } from "react";
import styles from "./works.module.css";

const categories = [
  {
    title: "Album Cover + Digital Works",
    images: [
      "/images/digitalparty.jpg",
      "/images/digitalcoke.jpg",
      "/images/hope.jpg",
      "/images/digital2.jpg",
    ],
  },
  {
    title: "3D Art",
    images: ["/images/3d1.jpg", "/images/3dart2.jpg"],
  },
  {
    title: "Photography",
    // ✔ 각 항목은 “주제 하나”의 대표 썸네일이라고 생각하면 돼
    images: [
      "/images/photo1_4.jpg",
      "/images/trace5.jpg",
      "/images/L1.jpg",
      "/images/tw1.jpg",
    ],
  },
  {
    title: "Drawings",
    images: [
      "/images/pencil1.jpg",
      "/images/pencil2.jpg",
      "/images/pencil3.jpg",
      "/images/pencil4.jpg",
      "/images/scratchart.jpg",
      "/images/paint1.jpg",
      "/images/paint2.jpg",
    ],
  },
];

const workDetails = {
  // ====== Album Cover + Digital ======
  "/images/digitalcoke.jpg": {
    title: "Coke",
    year: "2023",
    tools: "Procreate · Photoshop",
    description:
      "Created as part of a collaboration with a music artist, this digital illustration visualizes the explosive freshness and energy of the track. By exaggerating carbonation through bold colors and dynamic shapes, the artwork translates the song’s bright, effervescent mood into a playful visual experience.",
    link: "https://open.spotify.com/track/0TJ3dSOBJwrLylAwB2XPyW?si=14a546865dc34035",
  },
  "/images/hope.jpg": {
    title: "Hope You Remember",
    year: "2024",
    tools: "Procreate",
    description:
      "This piece was developed in collaboration with the song’s artist, focusing on translating the emotional tone of the track into layered light and color. The soft gradients and subtle transitions emphasize a sense of reflection and memory, echoing the sentimental mood of the music.",
    link: "https://open.spotify.com/track/1WeRA9MjUlgZspJR0iaKU9?si=1a2a83b2f66b4f47",
  },
  "/images/digitalparty.jpg": {
    title: "Party Tonight",
    year: "2022",
    tools: "Procreate",
    description:
      "Created in collaboration with the artist, this piece visualizes the lively and carefree mood of a city-pop inspired track. Instead of focusing on flashing lights or club intensity, the artwork highlights the warm, upbeat energy of a girls’ night out. The color palette blends soft pastels and saturated tones to capture the brightness and optimism of the music, creating a playful and harmonious atmosphere that reflects the song’s youthful spirit.",
    link: "https://open.spotify.com/track/3qy5ZInGkf6cDMfDQYFep9?si=04652535b0ed4077",
  },
  "/images/digital2.jpg": {
    title: "Love Potion",
    year: "2024",
    tools: "Procreate",
    description:
      "An experimental 2D-to-3D illustration created using Procreate. Although not part of an album collaboration, the piece is inspired by the dreamy, pastel-toned aesthetics of city-pop album covers. Soft gradients, bubble-like highlights, and a heart-shaped glass form were used to explore depth and volume while maintaining a playful and romantic atmosphere.",
  },

  // ====== 3D Art ======
  "/images/3d1.jpg": {
    title: "Party Tonight Remake",
    year: "2024",
    tools: "Blender",
    description:
      "A 3D reinterpretation inspired by the mood of “Party Tonight.” This study explores how simple geometric forms can shift in character through adjustments in lighting, texture, and composition. By manipulating basic shapes, the piece captures a playful yet atmospheric interpretation of the original artwork’s energy.",
  },

  "/images/3dart2.jpg": {
    title: "Wine",
    year: "2024",
    tools: "Blender",
    description:
      "A 3D piece that experiments with organic silhouettes and asymmetrical details. The design aims to create an unfamiliar yet approachable creature-like form, using surface variations and shape distortion to evoke a sense of subtle character and personality.",
  },

  // ====== Photography (예시 경로, 네 파일 이름에 맞게 바꿔야 함!) ======
  "/images/photo1_4.jpg": {
    title: "Silent Geometry",
    year: "2024",
    tools: "Digital Photography",
    description:
      "“Silent Geometry” is a photographic series that explores the quiet abstractions found within everyday architectural structures. Rather than documenting buildings as functional spaces, the images isolate lines, planes, and shadows to reveal the minimalist geometry hidden in the urban environment. By reducing the scenes to contrast, rhythm, and shape, the series captures moments where the city becomes almost silent—stripped of noise, movement, and narrative, leaving only form and light.",
    // 한 주제 안에 들어갈 여러 장의 사진들
    gallery: [
      "/images/photo1_1.jpg",
      "/images/photo1_2.jpg",
      "/images/photo1_3.jpg",
      "/images/photo1_4.jpg",
    ],
  },
  "/images/L1.jpg": {
    title: "Lamplight",
    year: "2024",
    tools: "Digital Photography",
    description:
      "“Lamplight” is an intimate portrait study lit by a single warm light source. The series focuses on the subject’s gaze and the way the glow of the lamp shapes her face and hands. By letting the surrounding space fall into shadow, the images highlight a quiet, introspective moment where the light feels both fragile and protective.",
    gallery: [
      "/images/L1.jpg",
      "/images/L2.jpg",
    ],
  },
  "/images/tw1.jpg": {
    title: "Twilight Breath",
    year: "2024",
    tools: "Digital Photography",
    description:
      "“Twilight Breath” is a photographic series captured during the brief moment when daylight dissolves into night. The images focus on quiet, atmospheric details—a lone streetlight flickering to life, and a silhouette suspended against a pastel-colored sky. The series emphasizes the dirty light of dusk: the imperfect glow shaped by ambient haze, uneven illumination, and the soft residue of the day. Rather than documenting a scene, the photographs reflect a feeling—the softness of the hour, the pause between movements, and the way fading light transforms ordinary surroundings. Through gentle color transitions, textured lighting, and calm compositions, the series captures the serenity and stillness of an evening taking its last breath.",
    gallery: [
      "/images/tw2.jpg",
      "/images/tw1.jpg",
    ],
  },
  "/images/trace5.jpg": {
    title: "Traces Left Behind",
    year: "2024",
    tools: "Digital Photography",
    description: "“Traces Left Behind” is a photographic series that reflects on the quiet marks people leave behind—intentionally or accidentally—long after the moment has passed. Instead of focusing on human presence itself, the images study what remains: torn staples on a bulletin board, the softened fabric of a worn stuffed toy, a dried rose collapsing into itself, the splintered edge of a broken chair, and the faded lettering on an old piano.\n\nEach object reveals a different form of memory.\nThe staples record countless messages once posted and removed.\nThe toy carries the softness of touch and time.\nThe rose, dried and fragile, becomes a monument to something once fresh.\nThe broken chair suggests an abrupt moment of force or neglect.\nAnd the piano keys, worn down by use, echo music that is no longer heard.\n\nThrough monochrome tones and close attention to surface texture, the series focuses on the subtle poetry of aging materials. These photographs do not document events but the evidence of them—showing how even the most ordinary objects become archives of life, touch, and disappearance.",

    gallery: [
      "/images/trace1.jpg",
      "/images/trace5.jpg",
      "/images/trace4.jpg",
      "/images/trace3.jpg",
      "/images/trace2.jpg",
    ],
  },

  // Drawings 는 여기 안 넣음 → 설명 없이 풀스크린 이미지 전용
};

export default function WorksPage() {
  const [selectedWork, setSelectedWork] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [imageModal, setImageModal] = useState(null); // Drawings 전체보기용
  const [slideIndex, setSlideIndex] = useState(0);    // 사이드바 슬라이드 인덱스

  const handleImageClick = (image, categoryTitle) => {
    const detail = workDetails[image];

    // 설명 없는 애들(Drawings 등) → 전체 화면 이미지로만 보기
    if (!detail) {
      setImageModal(image);
      setIsPanelOpen(false);
      setSelectedWork(null);
      return;
    }

    // 설명 있는 애들(Digital / 3D / Photography) → 사이드바
    setSelectedWork({
      image,
      category: categoryTitle,
      title: detail.title || categoryTitle,
      year: detail.year || "",
      tools: detail.tools || "",
      description:
        detail.description || "This piece is part of an ongoing project.",
      link: detail.link || null,
      gallery: detail.gallery || null,
    });
    setSlideIndex(0);
    setIsPanelOpen(true);
    setImageModal(null);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  // 슬라이드용 편의 함수
  const handlePrevSlide = () => {
    if (!selectedWork?.gallery) return;
    setSlideIndex((prev) =>
      prev === 0 ? selectedWork.gallery.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    if (!selectedWork?.gallery) return;
    setSlideIndex((prev) =>
      prev === selectedWork.gallery.length - 1 ? 0 : prev + 1
    );
  };

  // 현재 보여줄 이미지 (gallery 있으면 그 중 하나, 없으면 단일 이미지)
  const currentImage =
    selectedWork?.gallery && selectedWork.gallery.length > 0
      ? selectedWork.gallery[slideIndex]
      : selectedWork?.image;

  return (
    <div className={styles.shadowContainer}>
      
      {/* 🔥 Blurred Red Glow Background */}
      <div className={styles.redBlob}></div>
      <div className={styles.redBlob2}></div>

      <div className={styles.pageContent}>
        <h1 className={styles.pageTitle}>✦ My Works ✦</h1>

        {categories.map((category, index) => (
          <div key={index} className={styles.categoryContainer}>
            <h2 className={styles.categoryTitle}>{category.title}</h2>
            <div className={styles.collage}>
              {category.images.map((image, imgIndex) => (
                <button
                  key={imgIndex}
                  type="button"
                  className={styles.collageItem}
                  onClick={() => handleImageClick(image, category.title)}
                >
                  <img
                    src={image}
                    alt={`${category.title} ${imgIndex}`}
                    className={styles.collageImage}
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Digital / 3D / Photography: 사이드바 */}
      {isPanelOpen && selectedWork && (
        <div className={styles.detailBackdrop} onClick={handleClosePanel}>
          <aside
            className={styles.detailPanel}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.detailCloseButton}
              type="button"
              onClick={handleClosePanel}
            >
              ✕
            </button>

            {/* 이미지 슬라이드 영역 */}
            <div className={styles.detailImageWrapper}>
              {selectedWork.gallery && selectedWork.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    className={styles.sliderButton + " " + styles.sliderButtonLeft}
                    onClick={handlePrevSlide}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className={styles.sliderButton + " " + styles.sliderButtonRight}
                    onClick={handleNextSlide}
                  >
                    ›
                  </button>
                </>
              )}

              {selectedWork.link ? (
                <a
                  href={selectedWork.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={currentImage}
                    alt={selectedWork.title}
                    className={styles.detailImage}
                  />
                </a>
              ) : (
                <img
                  src={currentImage}
                  alt={selectedWork.title}
                  className={styles.detailImage}
                />
              )}
            </div>

            {/* 슬라이드 인디케이터 (점) */}
            {selectedWork.gallery && selectedWork.gallery.length > 1 && (
              <div className={styles.sliderDots}>
                {selectedWork.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={
                      styles.sliderDot +
                      " " +
                      (idx === slideIndex ? styles.sliderDotActive : "")
                    }
                    onClick={() => setSlideIndex(idx)}
                  />
                ))}
              </div>
            )}

            <p className={styles.detailCategory}>{selectedWork.category}</p>
            <h2 className={styles.detailTitle}>{selectedWork.title}</h2>

            {(selectedWork.year || selectedWork.tools) && (
              <p className={styles.detailMeta}>
                {selectedWork.year && <span>{selectedWork.year}</span>}
                {selectedWork.year && selectedWork.tools && <span> · </span>}
                {selectedWork.tools && <span>{selectedWork.tools}</span>}
              </p>
            )}

            <p className={styles.detailDescription}>
              {selectedWork.description}
            </p>

            {selectedWork.link && (
              <a
                href={selectedWork.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailLink}
              >
                Listen to the track ↗
              </a>
            )}
          </aside>
        </div>
      )}

      {/* 🔹 Drawings: 전체 화면 이미지 모달 */}
      {imageModal && (
        <div
          className={styles.imageModalBackdrop}
          onClick={() => setImageModal(null)}
        >
          <img
            src={imageModal}
            alt="Drawing"
            className={styles.imageModalImage}
          />
        </div>
      )}
    </div>
  );
}
