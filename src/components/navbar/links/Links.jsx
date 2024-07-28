import Link from "next/link";

export const LINKS = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = () => {
  return (
    <div>
      {LINKS.map((link, i) => (
        <Link key={`${link.title}-${i}`} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
