"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  {
    path: "/",
    name: "home",
    imgPath: "/icon/home.png",
  },
  {
    path: "/characters",
    name: "Characters",
    imgPath: "/icon/character.png",
  },
  {
    path: "/light-cones",
    name: "Light Cones",
    imgPath: "/icon/light-cone.png",
  },
  {
    path: "/guides",
    name: "Guides",
    imgPath: "/icon/guide.png",
  },
];

export default function NavbarBottom() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/characters/")) {
    pathname = "/characters";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <nav className="bg-black fixed inset-x-0 bottom-0 z-50">
      <div className="absolute top-0 h-px bg-gray-800 w-full" />
      <div className="flex justify-center items-center">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={index}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
              className="relative w-20 h-10 flex justify-center items-center"
            >
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute top-0 h-px bg-app-gradient-to-r w-20"
                  layoutId="navbar"
                  aria-hidden={true}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                  }}
                />
              )}
              <Image src={item.imgPath} alt="Logo" width={32} height={32} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
