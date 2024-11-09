"use client"; // Mark this as a client component

import { useState } from 'react'; // Import useState for modal state management
import styles from './works.module.css'; // Ensure correct path

export default function Works() {
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

  const categories = [
    { 
      title: "Digital Art", 
      images: [
        "/images/digitalcoke.jpg",
        "/images/digital2.jpg",
        "/images/digitalparty.jpg",
      ] 
    },
    { 
      title: "3D Art", 
      images: [
        "/images/3d1.jpg",
        "/images/3dart2.jpg",
      ] 
    },
    { 
      title: "Pencil Art", 
      images: [
        "/images/pencil1.jpg",
        "/images/pencil2.jpg",
        "/images/pencil3.jpg",
        "/images/pencil4.jpg",
      ] 
    },
    { 
      title: "Photography", 
      images: [
        "/images/photo1.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
      ] 
    },
    { 
      title: "Painting + Others", 
      images: [
        "/images/paint1.jpg",
        "/images/paint2.jpg",
        "/images/charcoal1.jpg",
        "/images/scratchart.jpg",
      ] 
    }
  ];

  return (
    <div className={styles.shadowContainer}> {/* Ensure this class is applied here */}
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 className={styles.pageTitle}>✦ My Works ✦</h1>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryContainer}>
            <h2 className={styles.categoryTitle}>{category.title}</h2>
            <div className={styles.collage}>
              {category.images.map((image, imgIndex) => (
                <img 
                  key={imgIndex} 
                  src={image} 
                  alt={`${category.title} ${imgIndex}`} 
                  className={styles.collageImage} 
                  onClick={() => openModal(image)} // Open modal on click
                />
              ))}
            </div>
          </div>
        ))}
        
        {/* Modal for enlarged image */}
        {isModalOpen && (
          <div className={styles.modal} onClick={closeModal}>
            <img src={modalImage} alt="Enlarged Art" className={styles.modalImage} />
          </div>
        )}
      </div>
    </div>
  );
}

