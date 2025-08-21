// src/app/Components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(v => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.container}>
      {/* Top bar */}
      <nav
        className="navbar navbar-expand-lg navbar-light 
                   bg-dark bg-opacity-75 fixed-top text-light"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand text-light fw-bold" href="/" onClick={closeMenu}>
            GFG Blogs
          </Link>

          {/* Hamburger (always visible; Bootstrap classes are optional here) */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
            className="btn p-0 border-0"
            type="button"
          >
            <div className={styles.hamburger}>
              <div className={isOpen ? styles.barOpen : styles.bar}></div>
              <div className={isOpen ? styles.barOpen : styles.bar}></div>
              <div className={isOpen ? styles.barOpen : styles.bar}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Slide-out / dropdown menu (positioned by your CSS module) */}
      <div className={isOpen ? styles.menuOpen : styles.menu}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/Createblog" onClick={closeMenu}>
              Create new Blog
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
