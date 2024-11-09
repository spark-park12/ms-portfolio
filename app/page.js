"use client"; // Mark this as a client component

import { useState } from 'react'; // Import useState for modal state management
import styles from './page.module.css'; // Ensure correct path
<link href="https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Open+Sans&family=Revalia&display=swap" rel="stylesheet"></link>

export default function Home() {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.shadowContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}> ✦ HELLO! ✦<br />I'M SEAH</h1>
        <h2 className={styles.subtitle}>
          "I studied Interdisciplinary Computing and the Arts,<br />
          and I love creating visuals through computing and graphic design."
        </h2>
      </div>
    </div>
  );
}


