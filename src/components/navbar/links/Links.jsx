"use client";

import { useState } from "react";

import styles from "./links.module.css";
import NavbarLink from "../navbarLink/NavbarLink";

export const LINKS = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {LINKS.map((link) => (
          <NavbarLink item={link} key={link.title} />
        ))}
        {session && isAdmin && (
          <NavbarLink item={{ title: "Admin", path: "/admin" }} />
        )}
        {session ? (
          <button className={styles.logout}>Logout</button>
        ) : (
          <NavbarLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((open) => !open)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {LINKS.map((link) => (
            <NavbarLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
