"use client";

import { useState } from "react";

import styles from "./links.module.css";
import NavbarLink from "../navbarLink/NavbarLink";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";

export const LINKS = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {LINKS.map((link) => (
          <NavbarLink item={link} key={link.title} />
        ))}
        {session && session.user?.isAdmin && (
          <NavbarLink item={{ title: "Admin", path: "/admin" }} />
        )}
        {session ? (
          <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
          </form>
        ) : (
          <NavbarLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setOpen((open) => !open)}
      />
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
