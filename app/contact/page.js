import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 className={styles.title}>연락처 페이지</h1>
      <p>문의 사항이 있으면 언제든지 연락주세요!</p>
    </div>
  );
}