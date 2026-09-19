import Link from "next/link";
import styles from "./gallery.module.css";

export default function GalleryPage({
  eyebrow,
  title,
  introduction,
  works,
}) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/works" className={styles.backLink}>
          ← All works
        </Link>

        <p className={styles.eyebrow}>{eyebrow}</p>

        <div className={styles.headerGrid}>
          <h1>{title}</h1>
          <p>{introduction}</p>
        </div>
      </header>

      <section className={styles.gallery} aria-label={title}>
        {works.map((work, index) => (
          <article
            key={`${work.title}-${index}`}
            className={`${styles.galleryItem} ${
              styles[work.size] || styles.square
            }`}
          >
            <a
              href={work.image}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageLink}
              aria-label={`View ${work.title} image`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={work.image}
                  alt={work.alt || work.title}
                  className={styles.image}
                />
              </div>
            </a>

            <div className={styles.caption}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className={styles.captionText}>
                <h2>{work.title}</h2>

                <p>
                  {work.type}
                  {work.year ? ` · ${work.year}` : ""}
                </p>

                {work.description && (
                  <p className={styles.description}>
                    {work.description}
                  </p>
                )}

                {work.href && (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.albumLink}
                  >
                    Listen to the album
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <Link href="/works">← Return to all works</Link>
        <Link href="/contact">Get in touch ↗</Link>
      </footer>
    </main>
  );
}