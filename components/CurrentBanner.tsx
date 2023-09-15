"use client";

import Card from "@/components/Card";
import Image from "next/image";
import newCharBannerImg from "@/public/image/new-char-banner.png";
import newLightConeBannerImg from "@/public/image/new-light-cone-banner.png";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CurrentBanner() {
  const [charDetailState, setCharDetailState] = useState(false);
  const [coneDetailState, setConeDetailState] = useState(false);

  const newCharBanner = {
    img: newCharBannerImg,
    name: "Epochal Spectrum",
    char: {
      id: 1213,
      name: "Dan Heng • Imbibitor Lunae",
      desc: "Dan Heng's true form from his Vidyadhara lineage carries the residual power left behind by his past incarnation, the Imbibitor Lunae. Upon accepting the majestic horned crown atop his forehead, he must accept all the merits and faults attributed to that sinner.",
      path: "Destruction",
      pathImg: "/icon/path/Destruction.png",
      link: "/character/1213",
    },
    featuredChar: [
      "Yukong (Harmony : Imaginary)",
      "Asta (Harmony : Fire)",
      "March 7th (Preservation : Ice)",
    ],
  };

  const newLightConeBanner = {
    img: newLightConeBannerImg,
    name: "Brilliant Fixation",
    cone: {
      id: 23015,
      name: "Brighter Than The Sun",
      desc: "From birth, all that ever lay before him was but a lightless dungeon. To this darkness, irrelevant sins bound him... irrelevant memories engulfed him. He writhed, gasping for breath with every fiber of his being, attempting to clasp a sliver of light in this fathomless ocean.  Until the day the general stepped into the lightless depths of this prison, he beheld a radiance shining brighter than the sun — the gaze of a young man.",
      path: "Destruction",
      pathImg: "/icon/path/Destruction.png",
      link: "/light-cone/23015",
    },
    featuredCone: [
      "Dance! Dance! Dance! (Harmony)",
      "Planetary Rendezvous (Harmony)",
      "Landau's Choice (Preservation)",
    ],
  };

  return (
    <>
      {/* Current Event Banner */}
      <h1 className="font-bold text-lg text-center mb-5">Current Banner</h1>
      <div className="px-2 grid grid-cols-1 gap-5 mb-5">
        {/* Character Event Banner */}
        <Card className="flex flex-col gap-2">
          <Image
            src={newCharBanner.img}
            alt="New Character Event Banner Image"
          />
          <h1 className="font-bold text-lg text-center">
            {newCharBanner.name}
          </h1>

          {/* Description Container */}
          <div className="px-3 pb-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image
                  src={newCharBanner.char.pathImg}
                  alt={`${newCharBanner.char.name} path image`}
                  width={32}
                  height={32}
                />
                <div>
                  <strong className="text-sm">{newCharBanner.char.name}</strong>
                  <p>{newCharBanner.char.path}</p>
                </div>
              </div>
              <Link
                href={newCharBanner.char.link}
                className="p-1 underline hover:bg-blue-950 rounded transition-all"
              >
                Build Guide ↗
              </Link>
            </div>

            <AnimatePresence mode="wait">
              {charDetailState && (
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
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    },
                  }}
                  key={newCharBanner.char.id}
                >
                  <div className="mb-2">{newCharBanner.char.desc}</div>
                  <div>
                    Featured 4⭐ character :
                    <ol className="list-decimal pl-4">
                      {newCharBanner.featuredChar.map((name, index) => (
                        <li key={index}>{name}</li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              className="text-gray-600"
              onClick={() => setCharDetailState(!charDetailState)}
            >
              {charDetailState ? "Close ↑" : "Expand ↓"}
            </button>
          </div>
        </Card>

        {/* Light Cone Event Banner */}
        <Card className="flex flex-col gap-2">
          <Image
            src={newLightConeBanner.img}
            alt="New Character Event Banner Image"
          />
          <h1 className="font-bold text-lg text-center">
            {newLightConeBanner.name}
          </h1>

          {/* Description Container */}
          <div className="px-3 pb-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image
                  src={newLightConeBanner.cone.pathImg}
                  alt={`${newLightConeBanner.cone.name} path image`}
                  width={32}
                  height={32}
                />
                <div>
                  <strong className="text-sm">
                    {newLightConeBanner.cone.name}
                  </strong>
                  <p>{newLightConeBanner.cone.path}</p>
                </div>
              </div>
              <Link
                href={newLightConeBanner.cone.link}
                className="p-1 underline hover:bg-blue-950 rounded transition-all"
              >
                Detail ↗
              </Link>
            </div>

            <AnimatePresence mode="wait">
              {coneDetailState && (
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
                        delay: 0.25,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    },
                  }}
                  key={newLightConeBanner.cone.id}
                >
                  <div className="mb-2">{newLightConeBanner.cone.desc}</div>

                  <div>
                    Featured 4⭐ Light Cone :
                    <ol className="list-decimal pl-4">
                      {newLightConeBanner.featuredCone.map((name, index) => (
                        <li key={index}>{name}</li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              className="text-gray-600"
              onClick={() => setConeDetailState(!coneDetailState)}
            >
              {coneDetailState ? "Close ↑" : "Expand ↓"}
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}
