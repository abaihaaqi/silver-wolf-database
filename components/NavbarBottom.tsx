"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

type ItemProps = {
  path: String;
  name: String;
  imgPath: String;
};

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
  const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | null>(null);
  const [highlightedTab, setHighlightedTab] = useState<ItemProps | null>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<DOMRect | null>(
    null
  );
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const repositionHighlight = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: ItemProps
  ) => {
    setTabBoundingBox(e.currentTarget.getBoundingClientRect());
    if (wrapperRef.current) {
      setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    }
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(item);
  };

  let pathname = usePathname() || "/";

  if (pathname.includes("/characters/")) {
    pathname = "/characters";
  }

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles: React.CSSProperties = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "150ms";
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <nav className="bg-black fixed inset-x-0 bottom-0 z-50">
      <div
        ref={wrapperRef}
        onMouseLeave={resetHighlight}
        className="relative flex justify-center items-center"
      >
        <div className="absolute top-0 h-px bg-gray-800 w-full" />
        <div
          style={highlightStyles}
          className="absolute left-0 top-0 h-px bg-app-gradient-to-r transition-all"
        />
        {navItems.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.path}
              className="relative z-10 w-20 h-10 flex justify-center items-center"
              onMouseOver={(ev) => repositionHighlight(ev, item)}
            >
              <Image src={item.imgPath} alt="Logo" width={32} height={32} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
