import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.hero} aria-labelledby="intro-title">
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>
            Interactive art · Creative technology
          </p>

          <h1 className={styles.heroName} id="intro-title">
            Se Ah
            <br />
            Park
          </h1>

          <p className={styles.heroCopy}>
            I create sensory and visual experiences exploring perception,
            identity, and emotion through art and technology.
          </p>

          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="/works">
              Explore selected works
            </a>
            <a className={styles.textLink} href="/contact">
              Get in touch ↗
            </a>
          </div>
        </div>

        <div
          className={styles.heroComposition}
          aria-label="Selected artwork by Se Ah Park"
        >
          <img
            className={styles.profileImage}
            src="/images/mypic.jpg"
            alt="Se Ah Park"
          />
        </div>
      </section>

      <section className={styles.aboutGrid} aria-labelledby="about-title">
        <div>
          <p className={styles.eyebrow}>A little about me</p>
          <h2 className={styles.aboutHeading} id="about-title">
            Between art
            <br />
            and systems.
          </h2>
        </div>

        <div className={styles.aboutColumn}>
          <h3>Background</h3>
          <p>
            I studied Interdisciplinary Computing and the Arts at UC San Diego,
            with a focus on experiences shaped by perception, sensory
            interaction, and cross-cultural perspectives.
          </p>

          <h3>Focus</h3>
          <p>
            Interactive installations, sensory interfaces, creative coding,
            and visual storytelling.
          </p>
        </div>

        <div className={styles.aboutColumn}>
          <h3>Tools</h3>
          <p>
            TouchDesigner, Python, Arduino, Raspberry Pi, Maya, ZBrush,
            Procreate, Adobe Creative Cloud, JavaScript, React, and Next.js.
          </p>

          <h3>Approach</h3>
          <p>
            I move between research, visual experimentation, and hands-on
            technical production to make ideas tangible.
          </p>
        </div>
      </section>
    </main>
  );
}
