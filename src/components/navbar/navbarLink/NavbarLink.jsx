"use client";

import Link from "next/link";

import styles from "./navbarLink.module.css";
import { usePathname } from "next/navigation";

const NavbarLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavbarLink;
