"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./page.module.css";

export default function Home() {
  const images = ["/images/mypic.jpg"];
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((image) => {
    setModalImage(image);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalImage(null);
    setIsModalOpen(false);
  }, []);

  // 🔒 ESC로 모달 닫기
  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, closeModal]);

  // 💫 마우스 따라오는 중앙 블러 조명
  const wrapRef = useRef(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let rafId = null;
    const onMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        const prevX = parseFloat(getComputedStyle(el).getPropertyValue("--gx")) || 50;
        const prevY = parseFloat(getComputedStyle(el).getPropertyValue("--gy")) || 50;
        const nx = prevX + (x - prevX) * 0.1;
        const ny = prevY + (y - prevY) * 0.1;

        el.style.setProperty("--gx", `${nx}%`);
        el.style.setProperty("--gy", `${ny}%`);
      });
    };

    el.style.setProperty("--gx", "50%");
    el.style.setProperty("--gy", "56%");

    if (window.matchMedia("(pointer: fine)").matches) {
      el.addEventListener("pointermove", onMove);
    }
    return () => {
      el.removeEventListener("pointermove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={wrapRef} className={styles.shadowContainer}>
      <div className={styles.bubbles} aria-hidden="true">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>


      {/* Intro + About 묶음 */}
      <div className={styles.containerMain}>
        <h1 className={styles.title}>✦ HELLO! ✦<br />I&apos;M SEAH PARK</h1>

        <img
          src="/images/mypic.jpg"
          alt="My portrait"
          className={styles.heroImage}
          onClick={() => openModal(images[0])}
          style={{ cursor: "zoom-in" }}
        />

        <h2 className={styles.subtitle}>
          &quot;I studied Interdisciplinary Computing and the Arts,<br />
          and I love creating visuals through computing and graphic design.&quot;
        </h2>
      </div>

      {/* About Section */}
      <h1 className={styles.pageTitle}>✦ About Me ✦</h1>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h2 className={styles.subTitle}>Hello ✦</h2>
            <p className={styles.text}>
              Hello! I&apos;m Se Ah Park, a senior majoring in Interdisciplinary
              Computing and the Arts at the University of California, San Diego.
              <br />I was born and raised in Korea, where I was exposed to a
              wide range of cultural experiences that now influence my artistic
              and technological endeavors.
            </p>

            <h2 className={styles.subTitle}>Programs and Software ✦</h2>
            <p className={styles.text}>
              I have experience with Procreate, Adobe Photoshop, Illustrator,
              and InDesign, as well as photography, 3D modeling in Maya, and
              visual programming in TouchDesigner.
              <br /><br />
              I also design and develop websites using JavaScript, HTML,
              and Next.js—integrating aesthetics with functionality to craft
              thoughtful and engaging digital experiences. Additionally, I’m
              familiar with Python for creative and technical applications.
            </p>

            <h2 className={styles.subTitle}>Studies ✦</h2>
            <p className={styles.text}>
              I majored in Studio Art when I first started my studies, committing
              myself to painting and drawing. My creative exploration was shaped
              by this foundation. I now combine art and technology at ICAM,
              examining computational design and interactive media.
            </p>
          </div>

          <div className={styles.column}>
            <h2 className={styles.subTitle}>Soft Skills ✦</h2>
            <p className={styles.text}>
              Communication, problem-solving, adaptability, organization,
              teamwork, and a love of creativity—all essential components of my
              professional identity—were strengthened through my work.
            </p>

            <h2 className={styles.subTitle}>Interests ✦</h2>
            <p className={styles.text}>
              I like to paint, draw, and watch movies. My album cover designs are
              frequently influenced by music, which gives me the chance to experiment
              with the relationship between sound and visuals.
              <br /><br />
              I eventually experimented with 3D modeling in Maya as a result of
              these creative interests, which allowed me to take my artistic practice
              to new dimensions.
            </p>
          </div>
        </div>
      </div>

      {/* 이미지 모달 */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.6)",
            display: "grid",
            placeItems: "center",
            zIndex: 9999,
            padding: "2rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "min(90vw, 1000px)",
              width: "100%",
              borderRadius: "14px",
              overflow: "hidden",
              background: "#111",
            }}
          >
            {modalImage && (
              <img
                src={modalImage}
                alt="Large view"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            )}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "rgba(255,255,255,.85)",
                border: "none",
                borderRadius: "999px",
                width: "36px",
                height: "36px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
