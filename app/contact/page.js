"use client";

import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.shadowContainer}>
      {/* 🔮 움직이는 컬러 버블 */}
      <div className={styles.bubbles}>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>

      <div className={styles.containerMain}>
        <h1 className={styles.title}>✦ Contact ✦</h1>
        <p className={styles.subtitle}>
          Feel free to reach out for collaborations or inquiries.
        </p>

        <div className={styles.contactBox}>
          {/* 왼쪽 소개 */}
          <div className={styles.leftSection}>
            <h2 className={styles.sectionTitle}>Let’s Connect</h2>
            <p className={styles.text}>
              I'm always open to new collaborations—album covers, visual
              concepts, digital art, 3D modeling and photography.</p> 

            <p className={styles.text}> 
              If you have a project you want to bring to life, send me a
              message!
            </p>
            <p className={styles.text}>
              Tell me briefly who you are and what you're looking for.
            </p>
          </div>

          {/* 오른쪽 정보 */}
          <div className={styles.rightSection}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Email</h3>
              <a
                href="mailto:your.email@example.com"
                className={styles.infoLink}
              >
                sap027@ucsd.edu
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Social</h3>
              <div className={styles.socialList}>
                <a
                  className={styles.socialLink}
                >
                  Instagram
                </a>
                <a
                  className={styles.socialLink}
                >
                  @seahparkk
                </a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Currently Open To</h3>
              <ul className={styles.chipList}>
                <li className={styles.chip}>Album Art</li>
                <li className={styles.chip}>3D Visual Concepts</li>
                <li className={styles.chip}>UX/UI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
