"use client";

import { usePathname } from "next/navigation";
import "./globals.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="navbarInner">
            <a className="wordmark" href="/" aria-label="Se Ah Park home">
              Se Ah Park
            </a>

            <nav className="navLinks" aria-label="Main navigation">
              {links.map(({ href, label }) => {
                const isCurrent =
                  href === "/" ? pathname === href : pathname.startsWith(href);

                return (
                  <a
                    key={href}
                    href={href}
                    className={`navLink${isCurrent ? " navLinkActive" : ""}`}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
          </div>
        </header>

        {children}

        <footer className="siteFooter">
          <div className="footerInner">
            <p>© 2026 Se Ah Park</p>
            <p>Interactive art · Creative technology · UC San Diego</p>
            <a className="footerLink" href="/contact">
              Get in touch ↗
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}