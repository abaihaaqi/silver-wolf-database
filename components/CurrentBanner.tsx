"use client";

import Card from "@/components/Card";
import Image from "next/image";
import newCharBannerImg from "@/public/image/new-char-banner.png";
import newLightConeBannerImg from "@/public/image/new-light-cone-banner.png";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BannerCard from "./BannerCard";

export default function CurrentBanner() {
  const [charDetailState, setCharDetailState] = useState(false);
  const [coneDetailState, setConeDetailState] = useState(false);

  const newCharBanner = {
    img: newCharBannerImg,
    name: "Epochal Spectrum",
    item: {
      id: 1213,
      name: "Dan Heng • Imbibitor Lunae",
      desc: "Dan Heng's true form from his Vidyadhara lineage carries the residual power left behind by his past incarnation, the Imbibitor Lunae. Upon accepting the majestic horned crown atop his forehead, he must accept all the merits and faults attributed to that sinner.",
      path: "Destruction",
      pathImg: "/icon/path/Destruction.png",
      link: "/character/1213",
    },
    featuredItem: [
      "Yukong (Harmony : Imaginary)",
      "Asta (Harmony : Fire)",
      "March 7th (Preservation : Ice)",
    ],
  };

  const newLightConeBanner = {
    img: newLightConeBannerImg,
    name: "Brilliant Fixation",
    item: {
      id: 23015,
      name: "Brighter Than The Sun",
      desc: "From birth, all that ever lay before him was but a lightless dungeon. To this darkness, irrelevant sins bound him... irrelevant memories engulfed him. He writhed, gasping for breath with every fiber of his being, attempting to clasp a sliver of light in this fathomless ocean.  Until the day the general stepped into the lightless depths of this prison, he beheld a radiance shining brighter than the sun — the gaze of a young man.",
      path: "Destruction",
      pathImg: "/icon/path/Destruction.png",
      link: "/light-cone/23015",
    },
    featuredItem: [
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
        <BannerCard {...newCharBanner} />

        {/* Light Cone Event Banner */}
        <BannerCard {...newLightConeBanner} />
      </div>
    </>
  );
}
