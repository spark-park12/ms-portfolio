import styles from "./works.module.css";
import ProjectCarousel from "./components/ProjectCarousel";

const featuredProjects = [
  {
    number: "01",
    title: "Composed",
    category: "Interactive Installation",
    year: "2026",
    description:
      "An interactive multiscreen installation exploring identity and emotion through scent selection, visual feedback, and physical interaction.",
    tools: "Raspberry Pi · Arduino · React · Vite · LED Systems",
    images: [
      "/images/installation_overviewA.jpg",
      "/images/compose1.jpg",
      "/images/compose2.jpg",
      "/images/compose3.jpg",
    ], 
    href: "https://composed-website.vercel.app/",
    external: true,
  },
];

const categories = [
  {
    number: "01",
    title: "Album Cover + Digital Works",
    shortTitle: "Digital",
    href: "/works/digital",
    description:
      "Illustration, graphic design, and digital works, including album collaborations.",
    cover: "/images/digital2.jpg",
  },
  {
    number: "02",
    title: "3D Art",
    shortTitle: "3D",
    href: "/works/3d",
    description:
      "Character modeling, sculptural studies, texturing, lighting, and rendering.",
    cover: "/images/3d1.jpg",
  },
  {
    number: "03",
    title: "Photography",
    shortTitle: "Photography",
    href: "/works/photography",
    description:
      "Series-based photography exploring light, space, composition, and texture.",
    cover: "/images/photo1_4.jpg",
  },
  {
    number: "04",
    title: "Drawings",
    shortTitle: "Drawings",
    href: "/works/drawings",
    description:
      "Pencil drawings, sketches, paintings, and observational studies.",
    cover: "/images/pencil1.jpg",
  },
];

export default function WorksIndex() {
  return (
    <main className={styles.page}>
      {/* Page introduction */}
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Selected work · 2022—2026</p>

        <div className={styles.introGrid}>
          <h1 className={styles.pageTitle}>Works</h1>

          <p className={styles.pageIntro}>
            A selection of interactive systems, digital experiences, 3D work,
            photography, and visual studies created between art and technology.
          </p>
        </div>
      </header>

      {/* Featured projects */}
      <section
        className={styles.featuredSection}
        aria-labelledby="featured-projects"
      >
        <div className={styles.sectionHeader}>
          <p id="featured-projects">Featured projects</p>
          <span>Selected case studies</span>
        </div>

        <div className={styles.featuredList}>
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className={`${styles.featuredProject} ${
                index % 2 !== 0 ? styles.featuredProjectReverse : ""
              }`}
            >
              <div className={styles.featuredImageLink}>
                <ProjectCarousel
                  images={project.images}
                  title={project.title}
                />
              </div>

              <div className={styles.featuredInfo}>
                <div className={styles.projectNumber}>
                  <span>{project.number}</span>
                  <span>{project.year}</span>
                </div>

                <p className={styles.projectCategory}>{project.category}</p>

                <h2 className={styles.projectTitle}>{project.title}</h2>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <p className={styles.projectTools}>{project.tools}</p>

                <a href={project.href} className={styles.projectLink}>
                  View project <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Visual archive */}
      <section
        className={styles.archiveSection}
        aria-labelledby="visual-archive"
      >
        <div className={styles.sectionHeader}>
          <p id="visual-archive">Visual archive</p>
          <span>Explore by practice</span>
        </div>

        <div className={styles.archiveGrid}>
          {categories.map((category) => (
            <a
              key={category.href}
              href={category.href}
              className={styles.archiveCard}
            >
              <div className={styles.archiveImageWrapper}>
                <img
                  src={category.cover}
                  alt={category.title}
                  className={styles.archiveImage}
                />
              </div>

              <div className={styles.archiveMeta}>
                <span className={styles.archiveNumber}>
                  {category.number}
                </span>

                <div className={styles.archiveContent}>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>

                <span className={styles.archiveArrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom contact */}
      <section className={styles.contactSection}>
        <p>Have a project or collaboration in mind?</p>

        <a href="/contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}