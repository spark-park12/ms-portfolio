export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <title>Se Ah Park</title>
        <link href="https://fonts.googleapis.com/css2?family=Borel&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* 네비게이션 바 */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ marginRight: "1rem" }}>
              <a href="/" style={{ color: "#000", textDecoration: "none" }}>
                INTRO
              </a>
            </li>

            <li style={{ marginRight: "1rem" }}>
              <a
                href="/works"
                style={{ color: "#000", textDecoration: "none" }}
              >
                WORKS
              </a>
            </li>

            <li style={{ marginRight: "1rem" }}>
              <a
                href="/about"
                style={{ color: "#000", textDecoration: "none" }}
              >
                ABOUT
              </a>
            </li>

            <li>
              <a
                href="/contact"
                style={{ color: "#000", textDecoration: "none" }}
              >
                CONTACT
              </a>
            </li>
            
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}