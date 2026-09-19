import styles from "./contact.module.css";

const opportunities = [
  "Interactive Media",
  "Creative Technology",
  "Web Design & Development",
  "3D Visualization",
  "Album Artwork",
  "Photography",
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>
          Contact · Collaborations · Opportunities
        </p>

        <div className={styles.heroGrid}>
          <h1 className={styles.title}>Let&apos;s connect.</h1>

          <p className={styles.intro}>
            I&apos;m open to creative collaborations, technical projects, and
            opportunities that bring together art, design, and technology.
          </p>
        </div>
      </header>

      <section className={styles.contactSection}>
        <div className={styles.sectionLabel}>
          <p>Get in touch</p>
          <span>01</span>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.messageColumn}>
            <h2>Have a project in mind?</h2>

            <p>
              Whether you&apos;re looking to develop an interactive experience,
              digital artwork, album visual, website, or 3D concept, I&apos;d
              love to hear about it.
            </p>

            <p>
              Introduce yourself and briefly describe your project, timeline,
              and the kind of collaboration you&apos;re looking for.
            </p>
          </div>

          <div className={styles.linksColumn}>
            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>Email</p>

              <a
                href="mailto:sayahpark1228@gmail.com"
                className={styles.primaryLink}
              >
                <span>sayahpark1228@gmail.com</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>LinkedIN</p>

              <a
                href="https://www.linkedin.com/in/seahpark12/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                <span>Se Ah Park</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>Based in</p>
              <p className={styles.location}>California, USA</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.opportunitiesSection}>
        <div className={styles.sectionLabel}>
          <p>Currently open to</p>
          <span>02</span>
        </div>

        <ul className={styles.opportunityList}>
          {opportunities.map((opportunity, index) => (
            <li key={opportunity}>
              <span className={styles.opportunityNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.opportunityName}>
                {opportunity}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>Have an idea worth exploring?</p>

        <a href="mailto:sayahpark1228@gmail.com">
          Start a conversation
          <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  );
}