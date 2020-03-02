import Link from "next/link";
import React from "react";

export const Header = () => {
  const links = [
    { href: "/", title: "Home" },
    { href: "team", title: "Team" }
  ];

  return (
    <div>
      Header!{" "}
      {links.map(link => (
        <React.Fragment key={link.title}>
          <Link href={link.href}>
            <a href={link.href}>{link.title}</a>
          </Link>

          <style jsx>{`
            a {
              color: red;
            }
          `}</style>
        </React.Fragment>
      ))}
    </div>
  );
};
