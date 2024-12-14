import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: "#010103",
        black: "#13131a",
        main_color: "#d3ad7f",
        border: "rgba(255,255,255,0.3)",
      },
      backgroundImage: {
        'imagem-de-fundo-um': "url('../public/home-img.jpeg')",
      }
    },
  },
  plugins: [],
};
export default config;