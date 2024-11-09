"use client"; // Mark this as a client component

import styles from './about.module.css'; // Ensure correct path

export default function About() {
  return (
    <div className={styles.shadowContainer}>
      <h1 className={styles.pageTitle}>✦ About Me ✦</h1>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h2 className={styles.subTitle}>Hello</h2>
            <p className={styles.text}>Hello! I'm Se Ah Park, a Junior at the University of California San Diego, currently pursuing an Interdisciplinary Computing and the Arts major.
            Originally from Korea, I spent the first 12 years of my life there, soaking in the rich cultural experiences that now influence both my artistic and technological pursuits.</p>
            
            <h2 className={styles.subTitle}>School</h2>
            <p className={styles.text}>I began my academic journey as a Studio Art major, immersing myself in the world of drawing and painting. This foundational experience 
          laid the groundwork for my creative exploration. Currently, I'm pursuing an Interdisciplinary Computing and the Arts (ICAM) major, where I seamlessly blend my passion for art with the dynamic world of computing art.</p>
            
            <h2 className={styles.subTitle}>Soft Skills</h2>
            <p className={styles.text}>My journey in academia has not only enhanced my technical skills
          but also nurtured essential soft skills. Effective communication, problem-solving, adaptability, organization, 
          teamwork, and a passion for creativity are integral aspects of my professional persona.</p>
          </div>
          
          <div className={styles.column}>
            <h2 className={styles.subTitle}>Programs and Software</h2>
            <p className={styles.text}>My creative journey extends into the digital realm where I leverage graphic design software,
          such as Procreate, to bring my artistic visions to life. Proficient in Adobe Photoshop, Illustrator, and InDesign, I 
          seamlessly blend traditional and digital techniques. Additionally, my hands-on experience in photography allows me to 
          capture moments through the lens, mastering camera settings to convey unique perspectives. 
          <br/> <br/>
          In addition to my proficiency in graphic design and photography, I have hands-on experience creating and designing websites using HTML/CSS and Nextjs. This technical 
          skill allows me to merge my artistic sensibilities with web development, creating visually engaging online experiences.</p>
            
            <h2 className={styles.subTitle}>Interests</h2>
            <p className={styles.text}>My interests serve as a vibrant tapestry, woven from my cultural background and personal passions. I find 
          joy in watching movies, immersing myself in diverse narratives that broaden my perspectives. Outside of academics, I'm an avid enthusiast 
          of drawing and painting, using these artistic outlets to express my creativity and capture moments in vibrant hues.
          <br/> <br/>
          Listening to music holds a special place in my heart and has even influenced my venture into album cover design. 
          The rhythmic melodies and evocative lyrics inspire me to create visuals that complement and enhance the auditory experience. 
          This intersection of music and design adds a unique dimension to my creative pursuits, allowing me to explore the synergy between 
          different forms of artistic expression.</p>
          </div>
        </div>
      </div>
    </div>
  );
}