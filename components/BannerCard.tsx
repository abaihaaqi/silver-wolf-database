"use client";

import Image, { StaticImageData } from "next/image";
import Card from "./Card";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export type BannerCardProps = {
  img: StaticImageData;
  name: String;
  item: {
    id: Number;
    name: String;
    desc: String;
    path: String;
    pathImg: String;
    link: String;
  };
  featuredItem: String[];
};

export default function BannerCard({
  img,
  name,
  item,
  featuredItem,
}: BannerCardProps) {
  const [detailState, setDetailState] = useState(false);

  return (
    <Card className="flex flex-col gap-2 overflow-hidden">
      <Image src={img} alt="New Character Event Banner Image" />
      <h1 className="font-bold text-lg text-center">{name}</h1>

      {/* Description Container */}
      <div className="px-3 pb-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image
              src={`${item.pathImg}`}
              alt={`${item.name} path image`}
              width={32}
              height={32}
            />
            <div>
              <strong className="text-sm">{item.name}</strong>
              <p>{item.path}</p>
            </div>
          </div>
          <Link
            href={`${item.link}`}
            className="p-1 underline hover:bg-blue-950 rounded transition-all"
          >
            Build Guide ↗
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {detailState && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                    delay: 0.1,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
              }}
              key={`${item.id}`}
            >
              <div className="mb-2">{item.desc}</div>
              <div>
                Featured 4⭐ character :
                <ol className="list-decimal pl-4">
                  {featuredItem.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ol>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="text-gray-600"
          onClick={() => setDetailState(!detailState)}
        >
          {detailState ? "Close ↑" : "Expand ↓"}
        </button>
      </div>
    </Card>
  );
}
