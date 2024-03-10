import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        global: "#000",
      },
    },
  },
  plugins: [],
};
export default config;
