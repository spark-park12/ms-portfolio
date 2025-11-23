"use client";

import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <a href="/">HOME</a>
          <a href="/works">WORKS</a>
          <a href="/contact">CONTACT</a>
        </nav>

        {children}
      </body>

    </html>
  );
}
