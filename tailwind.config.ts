import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-pt-sans)"],
        "isometric-3d": ["var(--font-3d-isometric)"],
      },
      height: {
        canvas: "calc(100vh - 40px)",
      },
      backgroundImage: {
        "app-gradient-to-r":
          "linear-gradient(to right, transparent, #ac61b9, #b7c1de, #ac61b9, transparent)",
        "app-gradient-to-b":
          "linear-gradient(to bottom, transparent, #ac61b9, #b7c1de, #ac61b9, transparent)",
        "app-gradient-to-br":
          "linear-gradient(to bottom right, #63345e, #ac61b9, #b7c1de, #ac61b9, #63345e)",
      },
    },
  },
  plugins: [],
};
export default config;
