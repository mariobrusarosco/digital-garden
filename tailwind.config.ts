import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./domains/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-bitter)", "serif"],
        sans: ["var(--font-josefin-sans)", "sans-serif"],
      },
      colors: {
        french_gray: {
          DEFAULT: "#d5c5c8",
          100: "#2f2225",
          200: "#5f4549",
          300: "#8e676e",
          400: "#b2959a",
          500: "#d5c5c8",
          600: "#ddd0d2",
          700: "#e5dcdd",
          800: "#eee7e9",
          900: "#f6f3f4",
        },
        cadet_gray: {
          DEFAULT: "#9da3a4",
          100: "#1f2121",
          200: "#3e4243",
          300: "#5d6364",
          400: "#7b8486",
          500: "#9da3a4",
          600: "#b1b6b7",
          700: "#c4c8c9",
          800: "#d8dadb",
          900: "#ebeded",
        },
        wenge: {
          DEFAULT: "#604d53",
          100: "#130f11",
          200: "#261f21",
          300: "#3a2e32",
          400: "#4d3e43",
          500: "#604d53",
          600: "#866b74",
          700: "#a58f96",
          800: "#c3b4b9",
          900: "#e1dadc",
        },
        puce: {
          DEFAULT: "#db7f8e",
          100: "#360f16",
          200: "#6c1f2b",
          300: "#a22e41",
          400: "#cc4a5f",
          500: "#db7f8e",
          600: "#e299a5",
          700: "#e9b3bc",
          800: "#f1ccd2",
          900: "#f8e6e9",
        },
        misty_rose: {
          DEFAULT: "#ffdbda",
          100: "#5f0300",
          200: "#be0600",
          300: "#ff251e",
          400: "#ff817c",
          500: "#ffdbda",
          600: "#ffe3e2",
          700: "#ffeaea",
          800: "#fff1f1",
          900: "#fff8f8",
        },
        azure: {
          DEFAULT: "#ecf8f8",
          100: "#1a4747",
          200: "#348d8d",
          300: "#5fc4c4",
          400: "#a6dede",
          500: "#ecf8f8",
          600: "#f0f9f9",
          700: "#f4fbfb",
          800: "#f8fcfc",
          900: "#fbfefe",
        },
        isabelline: {
          DEFAULT: "#eee4e1",
          100: "#3b2721",
          200: "#774f43",
          300: "#ac7a6b",
          400: "#cdafa6",
          500: "#eee4e1",
          600: "#f2eae7",
          700: "#f5efed",
          800: "#f8f4f3",
          900: "#fcfaf9",
        },
        almond: {
          DEFAULT: "#e7d8c9",
          100: "#3c2b1b",
          200: "#785736",
          300: "#b28253",
          400: "#ccad8e",
          500: "#e7d8c9",
          600: "#ece0d5",
          700: "#f1e8df",
          800: "#f6f0ea",
          900: "#faf7f4",
        },
        pale_dogwood: {
          DEFAULT: "#e6beae",
          100: "#3e1f13",
          200: "#7b3e26",
          300: "#b95d39",
          400: "#d38c6f",
          500: "#e6beae",
          600: "#ebcabd",
          700: "#f0d7ce",
          800: "#f5e5de",
          900: "#faf2ef",
        },
        lion: {
          DEFAULT: "#b2967d",
          100: "#261e16",
          200: "#4c3b2d",
          300: "#725943",
          400: "#987659",
          500: "#b2967d",
          600: "#c1aa96",
          700: "#d1bfb0",
          800: "#e0d4ca",
          900: "#f0eae5",
        },
      },
    },
  },
  plugins: [],
};

export default config;
